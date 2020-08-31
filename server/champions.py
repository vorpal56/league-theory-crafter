import re, os, pickle, requests
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(FILES_PATH, "data")

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
	variable_length = len(variable_name)
	# the var length is to limit spell ability placeholders like espellvamp
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

def compile_champion_data(using="ddragon"):
	# champion data from meraki analytics use the lol wiki which is the full item descriptions, this is actually way to indepth. it might be interesting to apply both definitions, but this is difficult to actually get the numbers. I would need a way to combine the values compiled from merkai with ddragon
	# champion data from ddragon has many values that are unprovided leaving multiple "?" and is the ingame tooltip

	champion_width = 770 # tooltipping (pretty print on prettify)
	pp = PrettyPrinter(indent=2, width=champion_width)

	file = open(os.path.join(DATA_PATH, "pkl", "champions.pkl"), "rb")
	champions = pickle.load(file)
	file.close()
	skill_keys = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]
	for champion_obj in champions:
		champion_name = champion_obj["apiname"]
		if (using == "ddragon"):
			patch_num = "10.16"
			url = "https://ddragon.leagueoflegends.com/cdn/{}.1/data/en_US/champion/{}.json".format(patch_num, champion_name)
		else:
			url = "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/{}.json".format(champion_name)
		response = requests.get(url)
		if (response.status_code == 200):
			pickle_filename = "{}.pkl".format(champion_name)
			response_body = response.json()
			file = open(os.path.join(DATA_PATH, "champion_cache_{}".format(using), pickle_filename), "wb")
			pickle.dump(response_body, file)
			file.close()
			if (using=="ddragon"):
				champion_data = response_body["data"][champion_name]
				champion_tooltips =  parse_champion_data_ddragon(champion_name, champion_data)
			else:
				champion_tooltips = parse_champion_data_meraki(response_body)
			for i, skill_key in enumerate(skill_keys):
				champion_obj[skill_key]["tooltip"] = champion_tooltips[i]
			# file = open(os.path.join(DATA_PATH, "updated_champion_cache_".format(using), pickle_filename), "wb")
			# pickle.dump(champion_obj, file)
			# file.close()
		else:
			print("Failed to get: ", champion_name)
	file = open(os.path.join(DATA_PATH, "pkl", "champions.pkl"), "wb")
	pickle.dump(champions, file)
	file.close()
	file = open(os.path.join(DATA_PATH, "updated_champions_{}.ts".format(using)), "w")
	file.write('export const CHAMPIONS = ' + pp.pformat(champions))
	file.close()
	return

def parse_champion_data_meraki(champion_data):
	champion_stats = champion_data["stats"]
	champion_abilities = champion_data["abilities"]
	champion_tooltips = []
	for i, champion_ability_type in enumerate(champion_abilities):
		champion_ability = champion_abilities[champion_ability_type]
		for ability_obj in champion_ability:
			ability_effects = ability_obj["effects"]
			champion_tooltip = "<br><br>".join([ability_effect["description"] for ability_effect in ability_effects])
			champion_tooltips.append(champion_tooltip)
	# champion_tooltips can vary in length (eg. aphelios is 15 long due to the number of guns)
	return champion_tooltips

def parse_champion_data_ddragon(champion_name, champion_data=None):
	if (champion_data is None):
		file = open(os.path.join(DATA_PATH, "champion_cache_ddragon", "{}.pkl".format(champion_name)), "rb")
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
					# print(champion_spell["id"], champion_name, key) # print the weird spell ids
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
	return champion_tooltips

if __name__ == "__main__":
	compile_champion_data()
	pass