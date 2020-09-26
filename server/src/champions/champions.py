import re
import os
import json
import requests
from pprint import PrettyPrinter
from common.utils import APP_PATH,DATA_PATH, SKILL_KEYS, BASE_ASSETS_PATH, remove_html_tags, remove_extra_whitespace, get_live_version, update_data_version


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
	from deepdiff import DeepDiff

	pp = PrettyPrinter(indent=2,width=100)
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
	all_basic_champions = []
	all_champions = []

	ordered_keys = ["index", "apiname", "name", "adaptivetype", "resource", "rangetype", "img"]
	for skill_key in SKILL_KEYS:
		ordered_keys.append(skill_key)
	ordered_keys.append("stats")

	# update the current data patch version so that I know what patch we're on
	update_data_version()

	with open(os.path.join(DATA_PATH, "json", "champions.json"), "r+") as file, \
		open(os.path.join(DATA_PATH, "json", "fixed_tooltips.json"), "r") as fixed_tooltips_file:
		champions = json.load(file)
		fixed_tooltips = json.load(fixed_tooltips_file)
		file.seek(0)
		for l, champion_obj in enumerate(champions):
			apiname = champion_obj["apiname"]
			champion_file_name = "{}.json".format(apiname)
			champion_obj["index"] = l
			basic_champion_obj = {"apiname" : apiname, "id":champion_obj["id"], "index": champion_obj["index"]}

			if using == "ddragon":
				if (use == "cache"):
					json_file = open(os.path.join(ddragon_champion_cache_path, champion_file_name), "r")
					response_body = json.load(json_file)
					json_file.close()
				elif use == "live":
					# not really concerned about constantly requesting from the ddragon cdn since they handle quite a lot of traffic
					patch_num = get_live_version()
					url = "https://ddragon.leagueoflegends.com/cdn/{}.1/data/en_US/champion/{}.json".format(patch_num, apiname)
					response = requests.get(url)
					response_body = response.json()

				champion_data = response_body["data"][apiname]
				champion_tooltips, max_ranks =  parse_champion_data_ddragon(apiname, champion_data)

			if (use == "cache"):
				json_file = open(os.path.join(meraki_champion_cache_path, champion_file_name), "r")
				response_body = json.load(json_file)
				json_file.close()
			elif use == "live":
				url = "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/{}.json".format(apiname)
				response = requests.get(url)
				response_body = response.json()
				json_file = open(os.path.join(meraki_champion_cache_path, champion_file_name), "w")
				json.dump(response_body, json_file)
				json_file.close()
			if using=="meraki":
				champion_stats, champion_tooltips, ability_breakdown, ability_names, attribute_names = parse_champion_data_meraki(apiname, response_body)
				some_keys = {}
				for key, value in attribute_names.items():
					if ("min." in key.lower() or "min" in key.lower() or "minimum" in key.lower()):
						some_keys["has_min"] = True
					elif ("max." in key.lower() or "max" in key.lower() or "maximum" in key.lower()):
						some_keys["has_max"] = True
					if (key in all_attribute_names):
						all_attribute_names[key] += value
					else:
						all_attribute_names[key] = value

			champion_name = response_body.get("name")
			basic_champion_obj["name"] = champion_name
			champion_obj["name"] = champion_name

			all_basic_champions.append(basic_champion_obj)

			for stat_name, stat_val in champion_stats.items():
				if ((stat_name in champion_obj["stats"]) or (stat_name not in champion_obj["stats"] and stat_val != 0)):
					if (champion_obj["stats"].get(stat_name) is None):
						print(apiname, "has new added stat", stat_name)
						champion_obj["stats"][stat_name] = stat_val
					else:
						current_stat_val = champion_obj["stats"][stat_name]
						if (current_stat_val != stat_val):
							print(apiname, "has updated", stat_name, "from", current_stat_val, "to", stat_val)
							champion_obj["stats"][stat_name] = stat_val

			for i, skill_key in enumerate(SKILL_KEYS):
				ability_name = champion_obj[skill_key].get("1")
				if (champion_obj[skill_key].get("img") is None):
					print("added new skill ability img path")
					champion_obj[skill_key]["img"] = BASE_ASSETS_PATH + "{}/{}.png".format(champion_name, ability_name)
				for subkey in ability_names[skill_key]:
					current_skill_details = champion_obj[skill_key][subkey]
					new_skill_details = re.sub(r'[\:]', '', ability_names[skill_key][subkey])
					# subkeys are ["1", "img", ?"2"]
					if (current_skill_details.lower() != new_skill_details.lower() and apiname != "Aphelios"):
						print(apiname, "has updated", current_skill_details, "to", new_skill_details )
						champion_obj[skill_key][subkey] = new_skill_details

				if champion_tooltips[i] == "":
					fixed_tooltip = fixed_tooltips.get("_".join([apiname, skill_key]))
					if (fixed_tooltip is not None):
						champion_obj[skill_key]["tooltip"] = fixed_tooltip
					else:
						print("\nXXXXX", apiname, "needs tooltip for", skill_key, "XXXXX\n")
				else:
					champion_obj[skill_key]["tooltip"] = champion_tooltips[i]

				if (using == "meraki"):
					# check if there has been any changes to the ability breakdown
					if (champion_obj[skill_key].get("ability_breakdown") is None):
						print(apiname, "has new ability breakdown")
						champion_obj[skill_key]["ability_breakdown"] = ability_breakdown[i]
					elif (champion_obj[skill_key]["ability_breakdown"] != ability_breakdown[i]):
						difference= DeepDiff(champion_obj[skill_key]["ability_breakdown"], ability_breakdown[i])
						print(apiname, "has changed", pp.pformat(difference))
						champion_obj[skill_key]["ability_breakdown"] = ability_breakdown[i]

			new_champion_obj = create_new_champion(ordered_keys, champion_obj)
			json_file = open(os.path.join(updated_champion_cache_path, champion_file_name), "w")
			json.dump(new_champion_obj, json_file)
			json_file.close()
			all_champions.append(new_champion_obj)
		file.truncate()
		json.dump(all_champions, file)

	sorted_attribute_names = dict(sorted(all_attribute_names.items(), key=lambda item: item[1], reverse=True))
	with open(os.path.join(DATA_PATH, "json", "filtered_attributes.json"), "w", encoding="utf-8") as attribute_names_file, \
	open(os.path.join(DATA_PATH, "json", "basic_champions.json"), "w", encoding="utf-8") as basic_champions_file:
		json.dump(all_basic_champions, basic_champions_file)
		json.dump(sorted_attribute_names, attribute_names_file)
	return

# def parse_champion_data_meraki(champion_data)-> [{"main":[{"attribute", "expressions"}, {"attribute", "expressions"}], "form":[]}, {"main":[], "form":[]}]:
def parse_champion_data_meraki(apiname, champion_data):
	champion_stats = champion_data["stats"]
	main_meraki_stat_keys = {
		"health": "hp",
		"healthRegen": "hp5",
		"mana": "mp",
		"manaRegen": "mp5",
		"armor": "arm",
		"magicResistance": "mr",
		"attackDamage": "ad",
		"movespeed": "ms",
		# "criticalStrikeDamage": "critdmg",
		# "criticalStrikeDamageModifier": "crit_mod",
		"attackSpeed": "as",
		"attackRange": "range",
	}
	stat_val_reps = {
		"flat": "_base",
		"percent":"%",
		"perLevel":"_lvl",
		# "percentPerLevel":
	}
	new_stats = {}
	for stat_base_key, stat_base_details in champion_stats.items():
		if stat_base_key in main_meraki_stat_keys:
			our_stat_key = main_meraki_stat_keys[stat_base_key]
			if (our_stat_key !="critdmg" and our_stat_key !="crit_mod" and our_stat_key !="range"):
				for stat_key_type, stat_val in stat_base_details.items():
					if (stat_key_type in stat_val_reps):
						key_name = our_stat_key +  stat_val_reps[stat_key_type]
						new_stats[key_name] = stat_val
			else:
				new_stats[our_stat_key] = stat_base_details["flat"]

	champion_abilities = champion_data["abilities"]
	champion_name = champion_data["name"]
	champion_tooltips = []
	ability_breakdown = []
	all_attribute_names = {}
	ability_names = {}
	for skill_key in SKILL_KEYS:
		ability_names[skill_key] = {}
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
			ability_key = "1" if j == 0 else "2" # used for the data representation in our champion model
			ability_name = ability_obj["name"]
			main_dict = {main_key:[]}
			ability_effects = ability_obj["effects"]
			ability_cooldown_affected_by_cdr = False
			if ability_obj["cooldown"]:
				ability_cooldown_modifiers = ability_obj["cooldown"]["modifiers"]
				ability_cooldown_affected_by_cdr = ability_obj["cooldown"]["affectedByCdr"]
				total_cooldown_expressions = []
				for cooldown_modifier in ability_cooldown_modifiers:
					values, units = cooldown_modifier["values"], cooldown_modifier["units"]
					value_length, unit_length = len(values), len(units)
					for k, value in enumerate(values):
						cooldown_formula = str(value) + units[k]
						total_cooldown_expressions.append(cooldown_formula)
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
								if (apiname == "JarvanIV" and la_name == "armor reduction"):
									text_formula = text_formula.replace("of target's", "target")
								else:
									text_formula = text_formula.replace("of target's", "")
								text_formula = text_formula.replace("total", "")
								text_formula = re.sub(r'[ ]', '', text_formula)
								if (k==0):
									# if it's the first modifier object, we can append the expression since it will always be a value
									expressions.append(text_formula)
								else:
									# if the units list is only one, then we attach that unit to all existing expressions
									if (unit_length == 1):
										for o, existing_expression in enumerate(expressions):
											expressions[o] += "+" + text_formula
									else:
										#  we can work with champions that have the basic leveling scheme
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
				main_dict["name"] = ability_name
				if ability_obj["cooldown"]:
					main_dict["applies_cdr"] = ability_cooldown_affected_by_cdr
					main_dict["cooldown"] = total_cooldown_expressions
				else:
					main_dict["applies_cdr"] = False
					main_dict["cooldown"] = []
				ability_details.append(main_dict)
			ability_names[SKILL_KEYS[i]][ability_key] = ability_name
			if ability_key == "1":
				ability_names[SKILL_KEYS[i]]["img"] = BASE_ASSETS_PATH + "{}/{}.png".format(champion_name, ability_name)
			if (ability_obj["blurb"] is not None):
				base_champion_blurbs.append(remove_extra_whitespace(ability_obj["blurb"]))
		champion_tooltips.append("<br><br>".join(base_champion_blurbs))
		ability_breakdown.append(ability_details)
	# champion_tooltips can vary in length (eg. aphelios is 15 long due to the number of guns)
	return new_stats, champion_tooltips, ability_breakdown, ability_names, all_attribute_names

def create_new_champion(ordered_keys, champion_data):
	'''
	Order is important for easier readability and consistency
	'''
	ordered_champion = {}
	for ordered_key in ordered_keys:
		champion_data_val = champion_data.get(ordered_key)
		if (champion_data_val is not None):
			ordered_champion[ordered_key] = champion_data_val
		else:
			champion_name = champion_data.get("name")
			if ordered_key == "img":
				print("{} requires new portrait".format(champion_name))
				ordered_champion[ordered_key] = BASE_ASSETS_PATH + "{}/{}.png".format(champion_name, champion_name)
			else:
				print("Non-existent data field {} for {}".format(ordered_key, champion_name))
				ordered_champion[ordered_key] = ""
	# sort the the champion data to so that the remaining keys are in a uniform order
	sorted_champion_data = dict(sorted(champion_data.items(), key=lambda champion:champion[0]))
	for other_data in sorted_champion_data:
		if other_data not in ordered_champion:
			ordered_champion[other_data] = sorted_champion_data[other_data]
	return ordered_champion

def parse_champion_data_ddragon(apiname, champion_data=None):
	if (champion_data is None):
		file = open(os.path.join(DATA_PATH, "json_ddragon_champion_cache", "{}.json".format(apiname)), "r")
		champion_data = json.load(file)["data"][apiname]
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
					# print(champion_spell["id"], apiname, key) # print the weird spell ids
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

def scrape_assets():
	from bs4 import BeautifulSoup
	import requests, re, urllib.request, time, random
	from random import randint
	# champion-stat__skill tip > a tag > img tag src

	# mid, supp, bot, top, jng does not influence ability on getting assets
	request_url = "https://www.op.gg/champion/{}/statistics/mid"
	champion_img_url = "http://opgg-static.akamaized.net/images/lol/champion/{}.png?image=q_auto,w_120"
	with open(os.path.join(DATA_PATH, "json", "champions.json"), "r") as file:
		champions = json.load(file)
		for i, champion in enumerate(champions):
			apiname = champion["apiname"]
			champion_name = champion["name"]
			champion_assets_path = os.path.join(APP_PATH, "src", "assets", "images", "champions", champion_name)
			if not os.path.exists(champion_assets_path):
				os.mkdir(champion_assets_path)
			champion_url = request_url.format(apiname)
			response = requests.get(champion_url)
			champion_img_path = os.path.join(champion_assets_path, "{}.png".format(champion_name))
			if not os.path.exists(champion_img_path):
				urllib.request.urlretrieve(champion_img_url.format(apiname), champion_img_path)
				print("Retrieved {}'s portrait".format(champion_name))
			if response.status_code == 200:
				soup = BeautifulSoup(response.text, 'html.parser')
				div_tag = soup.find_all("div", class_="champion-stat__skill")
				for i, div in enumerate(div_tag):
					if i <=4:
						src_tag = "https:" + div.find("img")["src"].split("?")[0]
						skill_key = SKILL_KEYS[i]
						skill_name = champion[skill_key]["1"] # only interested in the first ability
						skill_img_path = os.path.join(champion_assets_path, "{}.png".format(skill_name))
						if not os.path.exists(skill_img_path):
							try:
								urllib.request.urlretrieve(src_tag, skill_img_path)
								print("Retrieved", skill_name)
							except Exception as e:
								print("Unable to retrieve {} for {}".format(skill_name, champion_name) )
				print("Finished with", champion_name, "\n")
			else:
				print("Something went wrong for", champion["name"])

	print("Finished")
	return