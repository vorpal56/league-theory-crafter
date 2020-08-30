import re, csv, os, json, pickle, requests
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(FILES_PATH, "data")


runes_width = 100
champion_width = 770
pp = PrettyPrinter(indent=2, width=runes_width)

def separateToList(line):
	return next(csv.reader([line], delimiter=',', quotechar='"'))

def dumpItems():
	file = open(os.path.join(FILES_PATH, "crixaliz-items-sheet.csv"), "r", encoding="utf-8")
	fileHeaders = file.readline()
	headers= "name,#,gold,hp,hp5,mp,mp5,ad,AP,ARm,MR,AS,crit,cdr,LS,Leth,MPEN,boots_ms,ms%,heal_shield,phys_on_hit,magic_on_hit,att_m_proc,spell_m_proc,att_phys_proc,apen%,Mpen%,CritDMG,spell_vamp,ap_mult,ad_mult,hp_mult,tenacity,flat_ms,shield"
	keys = separateToList(headers)
	totalItems = []
	additionalKeys = ["modes", "shared_item", "img", "apiname", "tags", "allowed_to"]
	counts =0
	for i, line in enumerate(file):
		itemInfo = separateToList(line)
		name = itemInfo[0]
		upperedName = itemInfo[0].upper()
		if upperedName != "" and upperedName != "-SELECT-" and  upperedName != 'ELIXIRES' and upperedName != "PLAYER TOTAL" and upperedName !="ENEMY TOTAL":
			counts +=1
			length = len(itemInfo)
			itemStats = {}
			for j in range(length):
				statNameLowered = keys[j].lower()
				if j != 1:
					itemValue = re.sub(r'[\%\_\.]', '', itemInfo[j])
					try:
						if "mult" in statNameLowered:
							itemVal = 0 if itemValue == "" else int(itemValue)
							itemStats[statNameLowered] = {
							"type": "total", # adjust this manually on the items (there are so few items)
							"value": itemVal
							}
						else:
							# print(statNameLowered, itemValue) if statNameLowered=="upperedName" else None
							itemStats[statNameLowered] = int(itemValue)
					except:
						if itemValue == "" and statNameLowered !="upperedName":
							itemStats[statNameLowered] = 0
						else:
							itemStats[statNameLowered] = itemValue.replace("Masterwork: ", "")
			for key in additionalKeys:
				if key=="modes":
					itemStats[key]="all"
				if key == "shared_item":
					if ("ENCHANTMENT:" in upperedName):
						itemStats[key] = "enchantments" # adjust the shared item as the main parent (eg haunting shared = liandrys, liandrys shared = liandrys)
					elif upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT":
						itemStats[key] = "liandrys"
						# print(itemStats)
					elif "ABYSSAL MASK" in upperedName:
						itemStats[key] = "abyssal"
					elif "MASTERWORK" in upperedName:
						itemStats[key] = "masterwork"
					else:
						itemStats[key] = None
				if key == "tags":
					itemStats[key] = ""
				lowerLookUpName = name.lower()[:8]
				if key == "img":
					if (lowerLookUpName == "hex core"):
						itemStats[key] = "assets/images/items/" + re.sub(r'[\:\.\-]', '', name) + ".png"
					elif lowerLookUpName == "null-mag":
						itemStats[key] = "assets/images/items/Null-Magic Mantle.png"
					elif lowerLookUpName == "masterwo":
						itemStats[key] = "assets/images/items/" + re.sub(r'[0-9\:\.\-]', '', name).replace("Masterwork ", "") + ".png"
					else:
						itemStats[key] = "assets/images/items/" + re.sub(r'[0-9\:\.\-]', '', name) + ".png"
				if key =="apiname":
					if (lowerLookUpName == "hex core"):
						itemStats[key] = re.sub(r'[\' \:\.\-]', '', name.lower())
					elif (lowerLookUpName == "masterwo"):
						itemStats[key] = re.sub(r'[0-9\' \:\.\-]', '', name.lower().replace("masterwork", ""))
					else:
						itemStats[key] = re.sub(r'[0-9\' \:\.\-]', '', name.lower())
				if key =="allowed_to":
					itemStats[key] = {"ranged":True, "melee":True }
				# if (upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT"):
				# 	print(pp.pformat(itemStats))
			totalItems.append(itemStats)
			# if (upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT"):
			# 	print(itemStats)
			# 	print(totalItems[counts-1])
	itemStats = {}
	for key in keys:
		statNameLowered = key.lower()
		if statNameLowered == "name":
			itemStats[statNameLowered] = "Empty"
		elif "mult" in statNameLowered:
			itemVal = 0 if itemValue == "" else int(itemValue)
			itemStats[statNameLowered] = {
			"type": "total", # adjust this manually on the items (there are so few items)
			"value": itemVal
			}
		elif statNameLowered != "#":
			itemStats[statNameLowered] = 0
	for key in additionalKeys:
		if key == "shared_item":
			itemStats[key] = None
		elif key == "modes":
			itemStats[key] = "all"
		elif key =="allowed_to":
			itemStats[key] = {"ranged":True, "melee":True }
		else:
			itemStats[key] = ""
	file.close()
	file = open(os.path.join(DATA_PATH, "items_test2.ts"), "w", encoding="utf-8")
	result = pp.pformat(totalItems)
	file.write("let None = null;\nlet True = true;\nlet False = False;\nexport const EMPTY_ITEM = " + pp.pformat(itemStats) + ";\nexport const ITEMS = " + result )
	file.close()
	return totalItems

def countChamps():
	new_list = []
	for i, item in enumerate(CHAMPIONS):
		item["index"] = i
		new_list.append(item)

	file = open(os.path.join(DATA_PATH, "data_test.ts"), "w", encoding="utf-8")
	file.write("export const CHAMPIONS = " + pp.pformat(new_list))
	file.close()

def scrape_op():
	from bs4 import BeautifulSoup
	import requests, re, urllib.request, time, random
	from random import randint
	# champion-stat__skill tip > a tag > img tag src

	# mid, supp, bot, top, jng does not influence ability on getting assets
	request_url = "https://www.op.gg/champion/{}/statistics/mid"
	champs = []
	for ci, champion in enumerate(CHAMPIONS):
		champion_path = os.path.join(FILES_PATH, 'assets', 'images', 'champions', champion["name"])
		if not os.path.exists(champion_path):
			os.mkdir(champion_path)
		champion_url = request_url.format(champion["apiname"])
		response = requests.get(champion_url)
		# we get request limited after about 500 or so requests to their cdn or so
		time.sleep(randint(1, 5))
		base_assets_path = "/".join(["assets", "images", "champions", champion["name"]])
		if response.status_code == 200:
			soup = BeautifulSoup(response.text, 'html.parser')
			div_tag = soup.find_all("div", class_="champion-stat__skill")

			for i, div in enumerate(div_tag):
				src_tag = "https:" + div.find("img")["src"].split("?")[0]
				if i == 0:
					skill_name =  "skill_i"
				elif i == 1:
					skill_name =  "skill_q"
				elif i ==2:
					skill_name = "skill_w"
				elif i == 3:
					skill_name = "skill_e"
				elif i == 4:
					skill_name = "skill_r"
				img_path = os.path.join(champion_path, champion[skill_name]["1"] +".png")
				if not os.path.exists(img_path):
					urllib.request.urlretrieve(src_tag, img_path)
					print("Retrieved", skill_name)
			print("Finished with", champion["name"], "\n")
		else:
			print("Something went wrong for", champion["name"])

		champion["img"] = base_assets_path + "/" + champion["name"] + ".png"
		champion["index"] = int(ci)
		champion["apiname"] = champion["apiname"].lower()
		champs.append(champion)
	file = open(os.path.join(DATA_PATH, "new_data.ts"), "w", encoding="utf-8")
	file.write(pp.pformat(champs))
	file.close()
	print("Finished")
	return
def add_apiname_field_runes():
	for obj in RUNES:
		for slot in obj["runes"]:
			for a in slot:
				for rune_obj in slot[a]:
					# print(rune_obj, "\n")
					val = re.sub(r"[\:\'\-\ ]", '', rune_obj["name"]).lower()
					# print(val, re.sub(r"[\:\'\-\ ]", '', rune_obj["name"]), re.sub(r"", '', rune_obj["name"]))
					rune_obj["apiname"] = val
	file = open(os.path.join(DATA_PATH, "new_runes.ts"), "w", encoding="utf-8")
	file.write(pp.pformat(RUNES))
	file.close()
	return
def fix_order():
	sorted_items_by_name = sorted(items, key=lambda item:item["name"])
	for i, item in enumerate(sorted_items_by_name):
		item["index"] = i
	file = open(os.path.join(DATA_PATH, "sorted_items.ts"), "w", encoding="utf-8")
	file.write(pp.pformat(sorted_items_by_name))
	file.close()
	# print(pp.pformat(b))
	return

def remove_html_tags(text):
	# useful for parsing the tooltips from ddragon cdn
	replace_br_with_newline = re.sub('<br\s?\/>|<br>', r'\n', text)
	replaced_tags = re.sub('<[^<]+?>', '', replace_br_with_newline)
	return re.sub(r'\n', '<br>', replaced_tags)

def find_all_placeholders(tooltip):
	expression_pattern = r'({{.*?}})'
	return re.findall(expression_pattern, tooltip)

def placeholder_type(placeholder_var):
	expression_pattern = r'{{(.*?)}}'
	variable_name = re.sub(r' ', '', re.search(expression_pattern, placeholder_var).group(1))
	# variable_name = re.sub(expression_pattern, '', placeholder_var)
	# print(variable_name, placeholder_var)
	variable_length = len(variable_name)
	if (variable_name[0] == "e" and variable_length <=3):
		return "effectBurn", int(re.sub(r'[a-z]', '', variable_name))
	elif ((variable_name[0] == "a" or variable_name[0] == "f") and variable_length <=3):
		return "vars", variable_name
	else:
		return "?", 0

def find_var_key(var_array, var_key):
	for obj in var_array:
		if (obj["key"] == var_key):
			return obj
	return None

def replace_placeholder(tooltip, placeholder, value):
	return tooltip.replace(placeholder, value)

def compile_champion_data_from_meraki(patch_num="10.16"):
	return

def compile_champion_data_from_ddragon(patch_num="10.16"):
	file = open(os.path.join(DATA_PATH, "updated_champions.pkl"), "rb")
	champions = pickle.load(file)
	file.close()
	skill_keys = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]
	for champion_obj in champions:
		champion_name = champion_obj["ddragon_apiname"]
		response = requests.get("https://ddragon.leagueoflegends.com/cdn/{}.1/data/en_US/champion/{}.json".format(patch_num, champion_name))
		if response.status_code == 200:
			response_body = response.json()
			file = open(os.path.join(DATA_PATH, "champion_cache", "{}.pkl".format(champion_name)), "wb")
			pickle.dump(response_body, file)
			file.close()
			champion_data = response_body["data"][champion_name]
			champion_tooltips = parse_relevant_champion_data_from_ddragon(champion_name, champion_data)
			for i, skill_key in enumerate(skill_keys):
				champion_obj[skill_key]["tooltip"] = champion_tooltips[i]
			file = open(os.path.join(DATA_PATH, "updated_champion_cache", "{}.pkl".format(champion_name)), "wb")
			pickle.dump(champion_obj, file)
			file.close()
			# champion_obj["ddragon_apiname"] = champion_name
		else:
			# if champion_name == "Wukong":
			# 	champion_obj["ddragon_apiname"] = "MonkeyKing"
			# else:
			# 	champion_obj["ddragon_apiname"] = champion_name.capitalize()
			print("Failed to get: " , champion_name)
	file = open(os.path.join(DATA_PATH, "updated_champions.pkl"), "wb")
	pickle.dump(champions, file)
	file.close()
	file = open(os.path.join(DATA_PATH, "updated_champions.ts"), "w")
	file.write('export const CHAMPIONS = ' + pp.pformat(champions))
	file.close()
	return

def parse_relevant_champion_data_from_ddragon(champion_name, champion_data=None):
	if (champion_data is None):
		file = open(os.path.join(DATA_PATH, "champion_cache", "{}.pkl".format(champion_name)), "rb")
		champion_data = pickle.load(file)["data"][champion_name]
		file.close()
	champion_stats = champion_data["stats"]
	champion_spells = champion_data["spells"]
	champion_passive = champion_data["passive"]
	champion_tooltips = [remove_html_tags(champion_passive["description"])]
	for champion_spell in champion_spells:
		tooltip = remove_html_tags(champion_spell["tooltip"])
		placeholders = find_all_placeholders(tooltip)
		parsed_tooltip = tooltip
		for placeholder in placeholders:
			look_in, key = placeholder_type(placeholder)
			if (look_in == "effectBurn"):
				value = champion_spell[look_in][key]
				if value is not None:
					parsed_tooltip = replace_placeholder(parsed_tooltip, placeholder, value)
				else:
					print(champion_spell["id"], champion_name, key)
					parsed_tooltip = replace_placeholder(parsed_tooltip, placeholder, "?")
			elif (look_in == "vars"):
				obj = find_var_key(champion_spell[look_in], key)
				if obj is None:
					parsed_tooltip = replace_placeholder(parsed_tooltip, placeholder, "?")
				else:
					parsed_tooltip = replace_placeholder(parsed_tooltip, placeholder, str(obj["coeff"]))
			elif (look_in == "?"):
				parsed_tooltip = replace_placeholder(parsed_tooltip, placeholder, look_in)
		champion_tooltips.append(parsed_tooltip)
	# print(champion_tooltips)
	return champion_tooltips

if __name__ == '__main__':
	compile_champion_data_from_ddragon()
	# fix_order()
	# add_apiname_field_runes()
	# scrape_op()
	# items = dumpItems()
	# countChamps()
	pass