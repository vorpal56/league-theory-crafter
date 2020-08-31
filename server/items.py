import re,  os,  pickle, requests, json
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(FILES_PATH, "data")
true = True
false = False
null = None
stat_keys = {
	'ad': ' Attack Damage',
	'ap': ' Ability Power',
	'apen%': '% Armor Penetration',
	'arm': ' Armor',
	'as': '% Attack Speed',
	'boots_ms': ' Move Speed',
	'cdr': '% Cooldown Reduction',
	'crit': '% Critical Hit Chance',
	'critdmg': '% Bonus Critical Damage',
	'flat_ms': ' Move Speed',
	'heal_shield': '% Bonus Healing or Shielding',
	'hp': ' Health',
	'hp5': ' Health per 5',
	'hp5%': '% Heatlh per 5',
	'leth': ' Lethality',
	'ls': '% Lifesteal',
	'mp': ' Mana',
	'mp5':  ' Mana per 5',
	'mp5%': '% Mana per 5',
	'mpen': ' Magic Penetration',
	'mpen%': '% Magic Penetration',
	'mr': ' Magic Resistance',
	'ms%': '% Move Speed',
	'shield': ' Shield',
	'spell_vamp': '% Spell Vamp',
	'tenacity': '% Tenacity',
}

def get_item_codes():
	item_width = 150
	pp = PrettyPrinter(indent=2, width=item_width)
	try:
		from bs4 import BeautifulSoup
	except:
		print("Requires Beautiful Soup")
		return
	for item in items:
		item_name = item["name"]
		url = "https://leagueoflegends.fandom.com/wiki/{}".format(item_name)
		response = requests.get(url)
		if response.status_code == 200:
			soup = BeautifulSoup(response.text, 'html.parser')
			item_code = soup.find("td", attrs={"data-source":"code"}).text
			item["id"] = item_code
		else:
			if (item_name == "BF Sword"):
				item["id"] = "1038"
			elif ("bloodrazor" in item_name):
				item["id"] = "1419"
			elif ("cinderhulk" in item_name):
				item["id"] = "1413"
			elif ("runic" in item_name):
				item["id"] = "1414"
			elif ("warrior" in item_name):
				item["id"] = "1412"
			else:
				print("Cant get ", item_name)
	with open(os.path.join(DATA_PATH, "items.ts"), "w", encoding="utf-8") as file:
		file.write("export const ITEMS = " + pp.pformat(items))
	return

def compile_item_data(using="meraki", use="live"):
	item_cache_path = os.path.join(DATA_PATH, "json_meraki_item_cache")
	if not os.path.exists(item_cache_path):
		os.mkdir(item_cache_path)

	with open(os.path.join(DATA_PATH, "json", "items.json"), "r+") as file, \
		open(os.path.join(DATA_PATH, "updated_items_merkai.ts"), "w", encoding="utf-8") as ts_file:
		items = json.load(file)
		file.seek(0)
		for item in items:
			item_code = item["id"]
			json_file_name = "{}_{}.json".format(item["apiname"], item_code)
			if use == "live":
				url = "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items/{}.json".format(item_code)
				response = requests.get(url)
				if response.status_code == 200:
					response_body = response.json()
					item_json_file = open(os.path.join(item_cache_path, json_file_name), "w")
					json.dump(response_body, item_json_file)
					item_json_file.close()
				else:
					print("cant get", item["apiname"], item_code)
					continue
			elif use =="cache":
				item_json_file = open(os.path.join(item_cache_path, json_file_name), "r")
				response_body = json.load(item_json_file)
				item_json_file.close()
			tooltip = parse_item_data_meraki(response_body, item)
			item["tooltip"] = tooltip
		file.truncate()
		json.dump(items, file)
		pp = PrettyPrinter(indent=2, width=900)
		ts_file.write("export const ITEMS = " + pp.pformat(items))
	return

def fix_punctuation(text):
	# some of the text has some weird things in it so we fix the punctuation
	if ("0.0%" in text):
		text = text.replace("0.0%", "0%")
	return re.sub(r'(?<=[.,])(?=[^\s])', r' ', text)

def parse_item_data_meraki(response_data, item):
	passives = response_data["passives"]
	# meraki_tooltip = "<br><br>".join([for passive in passives])
	meraki_tooltip = base_item_stats_tooltip(item)
	passives_string_iter = []
	for passive in passives:
		passive_name = passive["name"]
		passive_str = ""
		if (passive["unique"]):
			passive_str += "UNIQUE Passive - "
		if (passive_name is not None):
			passive_str += passive_name + ": "
		passive_str += passive["effects"]
		passives_string_iter.append(fix_punctuation(passive_str))
	actives = response_data["active"]
	active_string_iter = []
	for active in actives:
		active_name = active["name"]
		active_str = ""
		if (active["unique"]):
			active_str += "UNIQUE Active - "
		if (active_name is not None):
			active_str += active_name + ": "
		active_str += active["effects"]
		active_string_iter.append(fix_punctuation(active_str))
	if (len(passives_string_iter) != 0):
		meraki_tooltip += "<br><br>" + "<br><br>".join(passives_string_iter)
	if (len(active_string_iter) != 0):
		meraki_tooltip += "<br><br>" + "<br><br>".join(active_string_iter)

	return meraki_tooltip

def base_item_stats_tooltip(item):
	return item["name"] + "<br><br>" + "Cost: " + str(item["gold"]) + "<br>" + "<br>".join(["+" + str(stat_val) + stat_keys[stat_name] for stat_name, stat_val in item.items() if (stat_val != 0 and stat_name in stat_keys)])

if __name__ == "__main__":
	compile_item_data(use="cache")
	pass