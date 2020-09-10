import re, os, json, requests
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

def compile_champion_data(using="meraki", use="live"):
	# champion data from meraki analytics use the lol wiki which is the full item descriptions, this is actually way to indepth. it might be interesting to apply both definitions, but this is difficult to actually get the numbers. I would need a way to combine the values compiled from merkai with ddragon
	# champion data from ddragon has many values that are unprovided leaving multiple "?" and is the ingame tooltip

	# we are going to be using both data points. Some of the data in league wiki is incomplete or organized differently than the expectation.
	# we will use a combination of the

	champion_width = 770 # tooltipping (pretty print on prettify)
	pp = PrettyPrinter(indent=2, width=champion_width)
	skill_keys = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]

	meraki_champion_cache_path = os.path.join(DATA_PATH, "json_meraki_champion_cache")
	if (not os.path.exists(meraki_champion_cache_path)):
		os.mkdir(meraki_champion_cache_path)

	ddragon_champion_cache_path = os.path.join(DATA_PATH, "json_ddragon_champion_cache")
	if (not os.path.exists(ddragon_champion_cache_path)):
		os.mkdir(ddragon_champion_cache_path)

	# the updated champion cache is a combination of using the ddragon cdn and meraki cdn
	# ddragon will be used to get the tooltips, meraki will be used to get damage values
	updated_champion_cache_path = os.path.join(DATA_PATH, "json_combined_champion_cache")
	if (not os.path.exists(updated_champion_cache_path)):
		os.mkdir(updated_champion_cache_path)

	all_attribute_names = {}
	with open(os.path.join(DATA_PATH, "json", "champions.json"), "r+") as file, \
		open(os.path.join(DATA_PATH, "updated_champions_combined.ts"), "w", encoding="utf-8") as ts_file, \
		open(os.path.join(DATA_PATH, "json", "fixed_tooltips.json"), "r") as fixed_tooltips_file:
		champions = json.load(file)
		fixed_tooltips = json.load(fixed_tooltips_file)
		file.seek(0)
		for champion_obj in champions:
			champion_name = champion_obj["apiname"]
			champion_file_name = "{}.json".format(champion_name)
			if using == "ddragon":
				if (use == "cache"):
					json_file = open(os.path.join(ddragon_champion_cache_path, champion_file_name), "r")
					response_body = json.load(json_file)
					json_file.close()
				elif use == "live":
					# not really concerned about constantly requesting from the ddragon cdn since they handle quite a lot of traffic
					patch_num = "10.16"
					url = "https://ddragon.leagueoflegends.com/cdn/{}.1/data/en_US/champion/{}.json".format(patch_num, champion_name)
					response = requests.get(url)
					response_body = response.json()

				champion_data = response_body["data"][champion_name]
				champion_tooltips, max_ranks =  parse_champion_data_ddragon(champion_name, champion_data)

			if (use == "cache"):
				json_file = open(os.path.join(meraki_champion_cache_path, champion_file_name), "r")
				response_body = json.load(json_file)
				json_file.close()
			elif use == "live":
				url = "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/{}.json".format(champion_name)
				response = requests.get(url)
				response_body = response.json()
			if using=="meraki":
				champion_tooltips, ability_breakdown, attribute_names = parse_champion_data_meraki(champion_name, response_body)
				some_keys = {}
				for key, value in attribute_names.items():
					if ("min." in key.lower() or "min" in key.lower() or "minimum" in key.lower() ):
						some_keys["has_min"] = True
					elif ("max." in key.lower() or "max" in key.lower() or "maximum" in key.lower() ):
						some_keys["has_max"] = True
					if (key in all_attribute_names):
						all_attribute_names[key] += value
					else:
						all_attribute_names[key] = value
				if (len(some_keys.keys()) == 1 ):
					print(champion_name, attribute_names)
			for i, skill_key in enumerate(skill_keys):
				if champion_tooltips[i] == "":
					fixed_tooltip = fixed_tooltips["_".join([champion_name, skill_key])]
					if (fixed_tooltip is not None):
						champion_obj[skill_key]["tooltip"] = fixed_tooltip
					else:
						print(champion_name, skill_key)
				else:
					champion_obj[skill_key]["tooltip"] = champion_tooltips[i]

				if (using == "meraki"):
					champion_obj[skill_key]["ability_breakdown"] = ability_breakdown[i]
			json_file = open(os.path.join(updated_champion_cache_path, champion_file_name), "w")
			json.dump(champion_obj, json_file)
			json_file.close()
		file.truncate()
		json.dump(champions, file)
		ts_file.write('export const CHAMPIONS = ' + str(champions))
	# sorted_attribute_names = dict(sorted(all_attribute_names.items(), key=lambda item: item[0]))
	sorted_attribute_names = dict(sorted(all_attribute_names.items(), key=lambda item: item[1], reverse=True))
	attribute_names_file = open(os.path.join(DATA_PATH, "json", "filtered_attributes.json"), "w", encoding="utf-8")
	json.dump(sorted_attribute_names, attribute_names_file)
	attribute_names_file.close()
	return

'''
[
	{main:[
		{
			attribute,
			expressions=[
				rank 1, rank2, rank3, rank4, rank5
			]
		}
	], form: [

	]
	},
	{main, form},
	{main, form}, ..
]
'''

# def parse_champion_data_meraki(champion_data)-> [{"main":[{"attribute", "expressions"}, {"attribute", "expressions"}], "form":[]}, {"main":[], "form":[]}]:
def parse_champion_data_meraki(champion_name, champion_data):
	champion_stats = champion_data["stats"]
	champion_abilities = champion_data["abilities"]
	champion_tooltips = []
	# skill_keys = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]
	ability_breakdown = []
	all_attribute_names = {}
	for i, champion_ability_type in enumerate(champion_abilities):
		# ability type is p, q, w, e, r
		champion_ability = champion_abilities[champion_ability_type]
		ability_details = []
		base_champion_blurbs = []
		champion_tooltip = ""
		for j, ability_obj in enumerate(champion_ability):
			# there are multiple ability objs since transformers can switch between abilities
			# we'll dictate it into 2 separate objs for form and main
			main_key = "main" if j == 0 else "form"
			main_dict = {main_key:[]}
			ability_effects = ability_obj["effects"]
			for ability_effect in ability_effects:
				ability_effect_leveling = ability_effect["leveling"]
				for attribute in ability_effect_leveling:

					'''
					some abilities provide stats that are not meaningful when calculating damage such as wall width or length (taliyah, yasuo, anivia), but is an attribute that grows on skill level. similarly stats like bonus ad and ap are important but are different than attributes with damage in the name. we'll have to do some manual work to interpret the damage formula which we'll have to change on a patch by patch basis. the damage calculation would need to be on a champion by champion basis?

					we are not concerned about minion, monster, and other non-champion related damage
					refunds and restores are for mana/health on kill which is not significant in calculation
					slows are not significant in damage calculation
					ally bonuses are not significant for self and damage calculation
					walls (taliyah, yasuo, anivia) are not significant in damage calculation
					structure damage does not affect targets
					cripple (target attack speed slow) is not significant in damage calculation
					decay (shyvana) is fury decay rate which is not significant in damage calculation
					'''
					attribute_name = attribute["attribute"].title()
					la_name = attribute_name.lower()

					attribute_is_significant = "minion" not in la_name and "monster" not in la_name and "non-champion" not in la_name and "refund" not in la_name and "restore" not in la_name and "slow" not in la_name and "wall" not in la_name and "width" not in la_name and "ally" not in la_name and "allies" not in la_name and "structure" not in la_name and "cripple" not in la_name and "decay" not in la_name
					if attribute_is_significant:
						if (attribute_name in all_attribute_names):
							all_attribute_names[attribute_name] +=1
						else:
							all_attribute_names[attribute_name] = 1
						a = {"attribute": attribute_name}
						expressions = [] # [rank1, rank2, rank3, rank4]
						for k, modifier in enumerate(attribute["modifiers"]):
							values, units = modifier["values"], modifier["units"]
							value_length, unit_length = len(values), len(units)
							for l, value in enumerate(values):
								if units[l] == "%":
									text_formula = str(value) + units[l]
								elif ("%" in units[l]):
									text_formula = str(value/100) + re.sub(r'[%]', ' *', units[l])
								else:
									text_formula = str(value) + units[l]
								if (champion_name == "JarvanIV" and la_name == "armor reduction"):
									text_formula = text_formula.replace("of target's", "target")
								else:
									text_formula = text_formula.replace("of target's", "")
								text_formula = text_formula.replace("total", "")
								text_formula = re.sub(r'[ ]', '', text_formula)
								if (k==0):
									expressions.append(text_formula)
								else:
									if (unit_length == 1):
										for o, existing_expression in enumerate(expressions):
											expressions[o] += "+" + text_formula
									else:
										if (unit_length == 5 or unit_length == 6 or unit_length == 3):
											expressions[l] += "+" + text_formula
										else:
											# the skill has a level dependant attribute that we I was unable to dynamically allocate to.
											# examples like janna w, nidalee cougar q, garen e, etc.
											# print("error skill key", champion_ability_type, ability_obj["name"], champion_data["name"])
											pass
									# print(existing_expression)
						a["string_expression"]=expressions
						main_dict[main_key].append(a)
			if (main_dict != {main_key:[]}):
				# the name is already attached to the champion skill key in the json obj we use for our calculations
				main_dict["name"] = ability_obj["name"]
				ability_details.append(main_dict)
			if (ability_obj["blurb"] is not None):
				base_champion_blurbs.append(ability_obj["blurb"])
		champion_tooltips.append("<br><br>".join(base_champion_blurbs))
		ability_breakdown.append(ability_details)
	# champion_tooltips can vary in length (eg. aphelios is 15 long due to the number of guns)
	return champion_tooltips, ability_breakdown, all_attribute_names

def parse_champion_data_ddragon(champion_name, champion_data=None):
	if (champion_data is None):
		file = open(os.path.join(DATA_PATH, "json_ddragon_champion_cache", "{}.json".format(champion_name)), "r")
		champion_data = json.load(file)["data"][champion_name]
		file.close()
	champion_stats = champion_data["stats"]
	champion_spells = champion_data["spells"]
	champion_passive = champion_data["passive"]
	champion_tooltips = [remove_html_tags(champion_passive["description"])]
	max_ranks = []
	for champion_spell in champion_spells:
		max_ranks.append(champion_spell["maxrank"])
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
	return champion_tooltips, max_ranks

def combine_champion_data():
	skill_keys = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]
	with open(os.path.join(DATA_PATH, "json", "basic_champions.json"), "r+") as file:
		champions = json.load(file)
		file.seek(0)
		for champion in champions:
			champion_file = open(os.path.join(DATA_PATH, "json_combined_champion_cache", "{}.json".format(champion["apiname"])), 'r')
			champion_data = json.load(champion_file)
			champion_file.close()
			for i, skill_key in enumerate(skill_keys):
				if (champion_data[skill_key]["ability_breakdown"] != []):
					champion_data[skill_key].pop('img', None)
					champion_data[skill_key].pop('tooltip', None)
					champion[skill_key] = champion_data[skill_key]
				else:
					print(champion_data["apiname"], skill_key)

		file.truncate()
		json.dump(champions, file)

def store_meraki():
	meraki_champion_cache_path = os.path.join(DATA_PATH, "json_meraki_champion_cache")
	if (not os.path.exists(meraki_champion_cache_path)):
		os.mkdir(meraki_champion_cache_path)
	with open(os.path.join(DATA_PATH, "json", "champions.json"), "r") as file:
		champions = json.load(file)
		for champion_obj in champions:
			champion_name = champion_obj["apiname"]
			champion_file_name = "{}.json".format(champion_name)
			url = "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/{}".format(champion_file_name)
			response = requests.get(url)
			response_body = response.json()
			json_file = open(os.path.join(meraki_champion_cache_path, champion_file_name), "w")
			json.dump(response_body, json_file)
			json_file.close()

if __name__ == "__main__":
	# combine_champion_data()
	compile_champion_data(using="meraki", use="cache")
	# champion_name = "Lillia"
	# meraki_champion_cache_path = os.path.join(DATA_PATH, "json_meraki_champion_cache")
	# json_file = open(os.path.join(meraki_champion_cache_path, "{}.json".format(champion_name)), "r")
	# champion_data = json.load(json_file)
	# json_file.close()
	# champion_tooltips, ability_breakdown  = parse_champion_data_meraki(champion_name, champion_data)
	# print(champion_tooltips, ability_breakdown)
	# store_meraki()
	pass