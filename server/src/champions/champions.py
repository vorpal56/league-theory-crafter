import re
import os
import json
import requests
from pprint import PrettyPrinter
from common.utils import APP_PATH,DATA_PATH, SKILL_KEYS, BASE_ASSETS_PATH, remove_html_tags, remove_extra_whitespace, update_data_version, fetch_response, create_apiname

meraki_champion_cache_path = os.path.join(DATA_PATH, "json_meraki_champion_cache")
updated_champion_cache_path = os.path.join(DATA_PATH, "json_combined_champion_cache")

@fetch_response
def get_champion_data(response_body):
	return response_body

def get_max_ranks(apiname, patch_num):
	url = "https://ddragon.leagueoflegends.com/cdn/{}/data/en_US/champion/{}.json".format(patch_num, apiname)
	response = requests.get(url)
	response_body = response.json()
	champion_data = response_body["data"][apiname]
	champion_spells = champion_data["spells"]
	return [champion_spell["maxrank"] for champion_spell in champion_spells]

def compile_champion_data(use="live", extract_attributes=False):
	from deepdiff import DeepDiff
	pp = PrettyPrinter(indent=2,width=100)
	if (not os.path.exists(meraki_champion_cache_path)):
		os.mkdir(meraki_champion_cache_path)
	if (not os.path.exists(updated_champion_cache_path)):
		os.mkdir(updated_champion_cache_path)

	all_attribute_names = {}
	all_basic_champions = []
	all_champions = []

	ordered_keys = ["index", "apiname", "name", "adaptivetype", "resource", "rangetype", "img"] + [skill_key for skill_key in SKILL_KEYS]
	ordered_keys.append("stats")

	live_version = update_data_version()
	assets_changed = set()
	champion_data = get_champion_data(use=use, data_path=meraki_champion_cache_path, filename="champions.json", response_type="json", url="http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json")

	with open(os.path.join(DATA_PATH, "json", "fixed_tooltips.json"), "r") as fixed_tooltips_file:
		fixed_tooltips = json.load(fixed_tooltips_file)

	# with open(os.path.join(DATA_PATH, "json", "champions.json"), "r+") as file:

	for i, champion_details in enumerate(champion_data.values()):
		# name attr is the full actual name of the champion eg. Aurelion Sol, Cho'Gath, Dr. Mundo, Kai'Sa, etc.
		champion_name = champion_details.get("name")

		# apiname is the the apiname used in ddragon and meraki eg. AurelionSol, Chogath, DrMundo, KaiSa, RekSai, etc.
		apiname = champion_details.get("key")
		adaptive_type = "ap" if champion_details.get("adaptiveType") == "MAGIC_DAMAGE" else "ad"
		rangetype = champion_details.get("attackType").lower()
		resource = champion_details.get("resource").lower()
		if resource != "mana" and resource !="energy":
			resource = "none"
		# img paths for champions are written as the full actual name
		champion_img_path = BASE_ASSETS_PATH + "{}/{}.png".format(champion_name, champion_name)
		champion_id = champion_details.get("id")

		with open(os.path.join(updated_champion_cache_path, "{}.json".format(apiname)), "r+") as champion_json_file:
			try:
				champion_obj = json.load(champion_json_file)
				champion_json_file.seek(0)
				champion_json_file.truncate()
			except:
				champion_obj = {"index": i, "apiname":apiname, "name":champion_name, "adaptivetype": adaptive_type, "resource":resource, "rangetype":rangetype, "img":champion_img_path, "stats":{}, "id":champion_id }
				for skill_key in SKILL_KEYS:
					champion_obj[skill_key] = {}
				print(apiname, champion_name)

			basic_champion_obj = {"apiname" : apiname, "id":champion_id, "index":i,"name":champion_name}
			all_basic_champions.append(basic_champion_obj)

			champion_stats, champion_tooltips, ability_breakdown, ability_names, attribute_names = parse_champion_data_meraki(apiname, champion_details)
			max_ranks = get_max_ranks(apiname, live_version)

			if extract_attributes:
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

			for stat_name, stat_val in champion_stats.items():
				if ((stat_name in champion_obj["stats"]) or (stat_name not in champion_obj["stats"] and stat_val != 0)):
					if (champion_obj["stats"].get(stat_name) is None):
						print(apiname, "has new added stat", stat_name)
						champion_obj["stats"][stat_name] = stat_val
					else:
						current_stat_val = champion_obj["stats"][stat_name]
						if (current_stat_val != stat_val):
							print(apiname, "has updated stat", stat_name, "from", current_stat_val, "to", stat_val)
							champion_obj["stats"][stat_name] = stat_val

			for j, skill_key in enumerate(SKILL_KEYS):
				ability_name = champion_obj[skill_key].get("1")
				if ability_name is None:
					ability_name = ability_names[skill_key].get("1")
					champion_obj[skill_key]["1"] = ability_name
				if j > 0:
					champion_obj[skill_key]["maxrank"] = max_ranks[j-1]
				existing_champion_ability_assets_path = os.path.join(APP_PATH, "src", "assets", "images", "champions", champion_name, ability_name)
				if (champion_obj[skill_key].get("img") is None):
					print("added new skill ability img path")
					champion_obj[skill_key]["img"] = BASE_ASSETS_PATH + "{}/{}.png".format(champion_name, ability_name)
					assets_changed.add(apiname) # the champion didn't have a skill ability img we need to grab the assets
				for subkey in ability_names[skill_key]:
					current_skill_details = champion_obj[skill_key].get(subkey)
					new_skill_details = re.sub(r'[\:]', '', ability_names[skill_key][subkey])
					# subkeys are ["1", "img", ?"2"]
					if current_skill_details is not None:
						if (current_skill_details.lower() != new_skill_details.lower() and apiname != "Aphelios"):
							print(apiname, "has updated skill", current_skill_details, "to", new_skill_details)
							if (subkey == "img" and os.path.exists(existing_champion_ability_assets_path)):
								os.remove(existing_champion_ability_assets_path) # remove the old ability asset to the new one
							assets_changed.add(apiname) # the champion has an updated ability with new details
							# this means like a new name, or a new image, something has changed about it
							champion_obj[skill_key][subkey] = new_skill_details

				if champion_tooltips[j] == "":
					fixed_tooltip = fixed_tooltips.get("_".join([apiname, skill_key]))
					if (fixed_tooltip is not None):
						champion_obj[skill_key]["tooltip"] = fixed_tooltip
					else:
						print("\nXXXXX", apiname, "needs tooltip for", skill_key, "XXXXX\n")
				else:
					champion_obj[skill_key]["tooltip"] = champion_tooltips[j]

				# check if there has been any changes to the ability breakdown
				if (champion_obj[skill_key].get("ability_breakdown") is None):
					print(apiname, "has new ability breakdown")
					champion_obj[skill_key]["ability_breakdown"] = ability_breakdown[j]
				elif (champion_obj[skill_key]["ability_breakdown"] != ability_breakdown[j]):
					difference= DeepDiff(champion_obj[skill_key]["ability_breakdown"], ability_breakdown[j])
					print(apiname, "has changed", pp.pformat(difference.get("values_changed")))
					champion_obj[skill_key]["ability_breakdown"] = ability_breakdown[j]

			new_champion_obj = create_new_champion(ordered_keys, champion_obj)
			json.dump(new_champion_obj, champion_json_file)
			all_champions.append(new_champion_obj)

	if extract_attributes:
		sorted_attribute_names = dict(sorted(all_attribute_names.items(), key=lambda item: item[1], reverse=True))
		with open(os.path.join(DATA_PATH, "json", "filtered_attributes.json"), "w", encoding="utf-8") as attribute_names_file:
			json.dump(sorted_attribute_names, attribute_names_file)

	with open(os.path.join(updated_champion_cache_path, "champions.json"), "w") as file, \
		open(os.path.join(DATA_PATH, "json", "basic_champions.json"), "w", encoding="utf-8") as basic_champions_file:
		json.dump(all_champions, file)
		json.dump(all_basic_champions, basic_champions_file)
	return assets_changed

# def parse_champion_data_meraki(champion_data)-> [{"main":[{"attribute", "expressions"}, {"attribute", "expressions"}], "form":[]}, {"main":[], "form":[]}]:
def parse_champion_data_meraki(apiname, champion_data):
	"""Parses the champion data from the Meraki CDN
	This is the main way of updating data (dependant on this)

	Args:
			apiname (str): apiname of the champion data for the purpose of data checking
			champion_data (dict): the champion data obtained from the response body

	Returns:
			tuple:
			(
				new_stats (list): the new stats of a champion from patch notes modeled in the application
				champion_tooltips (list): tooltips grabbed using the "blurb" key in the champion data,
				ability_breakdown (list): the ability breakdown for the champion which consists of ability cooldowns and damage formulas that modeled in the application,
				ability_names (list): the ability names that were extracted from the champion data which is used for reassigning ability names if changed,
				all_attribute_names (list): the list of attribute names that are relevant and that are changed from patch to patch. can be used to assess the most frequent attribute names and outliers
			)
	"""
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
		"attackSpeedRatio": "as_ratio"
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
			our_stat_key = main_meraki_stat_keys.get(stat_base_key)
			if (our_stat_key !="range" and our_stat_key != "as_ratio"):
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
		for x, ability_obj in enumerate(champion_ability):
			# there are multiple ability objs since transformers can switch between abilities
			# we'll dictate it into 2 separate objs for form and main
			main_key = "main" if x == 0 else "form"
			ability_key = "1" if x == 0 else "2" # used for the data representation in our champion model
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
			if (ability_obj["blurb"] is not None):
				base_champion_blurbs.append(remove_extra_whitespace(ability_obj["blurb"]))
		champion_tooltips.append("<br><br>".join(base_champion_blurbs))
		ability_breakdown.append(ability_details)
	# champion_tooltips can vary in length (eg. aphelios is 15 long due to the number of guns)
	return new_stats, champion_tooltips, ability_breakdown, ability_names, all_attribute_names

def create_new_champion(ordered_keys, champion_data):
	"""Creates a new champion object in a particular order

	Args:
			ordered_keys (list): list of ordered keys we want to sort the champion_data by
				any keys unlisted will be sorted alphabetically
			champion_data (dict): champion data object passed after compiling all their relevant information

	Returns:
			ordered_champion (dict): champion data ordered passed by ordered_keys
	"""
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

def scrape_assets(assets_changed):
	"""Scrapes the assets from OP.GG. It's much easier to do it this way
	Args:
			assets_changed (set): (key=apiname) sends requests to the details
	"""
	if (len(assets_changed)) == 0:
		print("No champion has assets changed")
		return
	from bs4 import BeautifulSoup
	import urllib.request
	# champion-stat__skill tip > a tag > img tag src

	# mid, supp, bot, top, jng does not influence ability on getting assets
	request_url = "https://www.op.gg/champion/{}/statistics/mid"
	champion_img_url = "http://opgg-static.akamaized.net/images/lol/champion/{}.png?image=q_auto,w_120"
	with open(os.path.join(updated_champion_cache_path, "champions.json"), "r") as file:
		champions = json.load(file)
	for champion in champions:
		apiname = champion.get("apiname")
		if apiname in assets_changed:
			champion_name = champion.get("name")
			champion_assets_path = os.path.join(APP_PATH, "src", "assets", "images", "champions", champion_name)
			if not os.path.exists(champion_assets_path):
				os.mkdir(champion_assets_path)
			champion_url = request_url.format(apiname)
			champion_img_path = os.path.join(champion_assets_path, "{}.png".format(champion_name))
			if not os.path.exists(champion_img_path):
				urllib.request.urlretrieve(champion_img_url.format(apiname), champion_img_path)
				print("Retrieved {}'s portrait".format(champion_name))

			response = requests.get(champion_url)
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
				print("Finished with", champion_name)
			else:
				print("Something went wrong for", champion_name)
	return