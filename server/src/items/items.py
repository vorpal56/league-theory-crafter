import os
import requests
import json
from pprint import PrettyPrinter
from common.utils import DATA_PATH, fix_punctuation, create_apiname, full_clean_text
from collections import OrderedDict

# stat keys is used to write the tooltip data based on the model of our data

stat_key_mapping = {
	"abilityPowerflat":"ap",
	"armorflat":"arm",
	"armorPenetrationpercent":"apen%",
	"attackDamageflat":"ad",
	"attackSpeedflat":"as",
	"criticalStrikeChanceflat":"crit",
	"healAndShieldPowerflat":"heal_shield",
	"healthpercent":"hp%",
	"healthflat":"hp",
	"healthRegenpercent":"hp5%",
	"healthRegenflat":"hp5",
	"lethalityflat":"leth",
	"lifestealpercent":"ls",
	"magicPenetrationpercent":"mpen%",
	"magicResistanceflat":"mr",
	"manaflat":"mp",
	"manaRegenpercent":"mp5%",
	"manaRegenflat":"mp5",
	"movespeedpercent":"ms%",
	"movespeedflat":"ms",
	"abilityHasteflat":"ability_haste",
	"omnivamppercent":"omnivamp",
}

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

main_meraki_stat_keys = {
		"abilityPower": "ap",
		"armor": "arm",
		"armorPenetration": "apen",
		"attackDamage": "ad",
		"attackSpeed": "as",
		"criticalStrikeChance": "crit",
		# "goldPer_10": "gp10",
		"healAndShieldPower": "heal_shield",
		"health": "hp",
		"healthRegen": "hp5",
		"lethality": "leth",
		"lifesteal": "ls", #lifesteal only applies on basics
		"magicPenetration": "mpen",
		"magicResistance": "mr",
		"mana": "mp",
		"manaRegen": "mp5",
		"movespeed": "ms",
		"abilityHaste":"ability_haste",
		"omnivamp":"omnivamp", #applies on all sources of damage (physical, magic, and true) += additively
	}
stat_val_reps = {
	"percent":"%",
	"flat": "",
	"perLevel":"_lvl",
}

# because of the new item data, our item model no longer works. This means we need to look at the data of the new items, create a model, request the items.json (cache if needed per patch), parse it and compile it to our own requirements. now interactions between items is something that we'll need to model again (such as last whisper, LDR and so on)

# items are broken down into 5 ranks: starters, basics, epics, legendaries, mythics

def compile_new_item_data(using="meraki", use="live"):
	item_cache_path = os.path.join(DATA_PATH, "json_meraki_item_cache", "preseason_11")
	if not os.path.exists(item_cache_path):
		os.mkdir(item_cache_path)

	if use == "live":
		url = "http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json"
		response = requests.get(url)
		if response.status_code == 200:
			response_body = response.json()
			response_body = OrderedDict(sorted(response_body.items(), key=lambda item: item[1]["name"])) # sort by the name of the item, and not the id. This is significant because on the initial render of the contents is by alpha, meaning that the registered contents has to be sorted by alpha
			with open(os.path.join(item_cache_path, "items.json"), "w") as items_json_file:
				json.dump(response_body, items_json_file)
		else:
			print("cant get meraki items.json")
			return

	elif use == "cache":
		print("using cache")
		with open(os.path.join(item_cache_path, "items.json"), "r") as items_json_file:
			response_body = json.load(items_json_file)

	pp = PrettyPrinter(indent=2, width=200)
	boots_id = "1001"
	builds_into = set(response_body.get(boots_id).get("buildsInto"))
	items = []
	with open(os.path.join(item_cache_path, "updated_items_merkai.ts"), "w", encoding="utf-8") as ts_file:
		for i, (item_id, item_details) in enumerate(response_body.items()):
			int_item_id = int(item_id)
			name = item_details.get("name")
			apiname = create_apiname(name)
			# some items don't have any stat bonuses like refillable potion, corrupting, kalista spear, etc. so we don't add them to our item set
			# some items that we want to include (elixirs and boots) apparently have no effects so we need to extend the condition
			if not item_details.get("removed") and (item_details.get("noEffects") is False or "elixir" in apiname or "boots" in apiname):
				# not sure how to deal with passive stats yet, I'll need an example of it
				stats = item_details.get("stats")
				passives = item_details.get("passives")
				try:
					rank = item_details.get("rank")[0].lower()
				except Exception as e:
					rank = 'basic'
				item_info = OrderedDict([
					('name', name),
					('allowed_to', { 'melee': True, 'ranged': True}),
					('apiname', apiname),
					('img', item_details.get("icon")), # hotlink the` item to ddragon and have them handle it or cache on our own server?
					('id', item_id),
					('index', i),
					# ('modes', 'all,sr'), # we can generate a set of items that are in different modes. for now, we'll use all and sr. is this really important? I don't think it provides any value
					('rank', rank),
					('tags', ",".join([nickname.lower() for nickname in item_details.get("nicknames")])),
					('visible', True),
					('stackable', False),
					('stacked', False),
					('gold', item_details.get("shop").get("prices").get("total")),
					('passives', []),
					('stats', {}),
				])
				for stat_parent_key, stat_parent_details in stats.items():
					for stat_child_key, stat_val in stat_parent_details.items():
						full_stat_key = stat_parent_key + stat_child_key
						if stat_val != 0 and full_stat_key in stat_key_mapping: # remove data redundancy
							item_info["stats"][stat_key_mapping.get(full_stat_key)] = int(stat_val)
				# passive stats are really weird, sometimes it's not included into the dataset, so we'll need to figure out how we're going to handle this on a patch by patch basis (especially during the early stages of preseason)
				for passive in passives:
					passive_name = passive.get("name")
					if passive_name is None:
						continue # if there is no passive name, then the assumption is there are no important stat related details
					applies_to_mythic = passive.get("mythic")
					passive_details = OrderedDict([
						('mythic',applies_to_mythic),
						('name',passive_name.lower()),
						('stats', {}),
						('unique',passive.get("unique")),
					])
					passive_stats = passive.get("stats")
					for stat_parent_key, stat_parent_details in passive_stats.items():
						if type(stat_parent_details) == dict:
							for stat_child_key, stat_val in stat_parent_details.items():
								full_stat_key = stat_parent_key + stat_child_key
								if stat_val != 0 and full_stat_key in stat_key_mapping:
									passive_details["stats"][stat_key_mapping.get(full_stat_key)] = int(stat_val)
						else:
							# some passive stat objects have values as floats and not dicts (eg. abyssal mask)? really weird
							for stat_val_rep_key, stat_val_rep_val in stat_val_reps.items():
								full_stat_key = stat_parent_key + stat_val_rep_key
								if stat_parent_details !=0 and full_stat_key in stat_key_mapping:
									passive_details["stats"][stat_key_mapping.get(full_stat_key)] = int(stat_val)
					item_info["passives"].append(dict(passive_details))
				meraki_tooltip = base_item_stats_tooltip(item_info)
				passives_tooltip = effects_tooltip(passives)
				actives_tooltip = effects_tooltip(item_details.get("active"), effect_type="a")

				item_info["tooltip"] = full_clean_text(meraki_tooltip + passives_tooltip + actives_tooltip)

				item_info = dict(sorted(item_info.items(), key=lambda item: item[0]))
				if int_item_id in builds_into:
					item_info["tags"] += "boots" if item_info["tags"] == "" else ",boots"

				item_json_file = open(os.path.join(item_cache_path, "_".join([apiname, item_id]) + ".json"), "w", encoding="utf-8")
				json.dump(item_info, item_json_file)
				item_json_file.close()
				items.append(item_info)
		ts_file.write("let False = false;\nlet True=true;\nlet None=null;\nexport const ITEMS = " + str(items))
	return

def compile_item_data(using="meraki", use="live"):
	"""DEPRECATED. Used during <=S10. Use compile_new_item_data function

	Args:
			using (str, optional): [description]. Defaults to "meraki".
			use (str, optional): [description]. Defaults to "live".
	"""
	# I think we need to manually update data for every patch since the way we represent our data is different than the model that we have. not quite sure. with the new preason 2021, we can reflect the data according to the new item model and adjust the code as needed. For the time being, we update the data manually
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
			meraki_tooltip = base_item_stats_tooltip(item_info)
			passives_tooltip = effects_tooltip(response_body.get("passives"))
			actives_tooltip = effects_tooltip(response_body.get("actives"), effect_type="a")
			item["tooltip"] = meraki_tooltip + passives_tooltip + actives_tooltip
		file.truncate()
		json.dump(items, file)
		# pp = PrettyPrinter(indent=2, width=900)
		ts_file.write("let False = false;\nlet True=true;\nlet None=null;\nexport const ITEMS = " + str(items))
	return

def effects_tooltip(effects, effect_type="p"):
	string_iter = []
	for effect in effects:
		effect_name = effect.get("name")
		effect_str = ""
		if (effect.get("unique")):
			effect_str += "UNIQUE Passive - " if effect_type == "p" else "UNIQUE Active - "
		if (effect_name is not None):
			effect_str += effect_name + ": "
		effect_str += effect.get("effects")
		string_iter.append(fix_punctuation(effect_str))
	if len(string_iter) != 0:
		return "<br><br>" + "<br><br>".join(string_iter)
	return ""

def base_item_stats_tooltip(item):
	return item["name"] + "<br><br>" + "Cost: " + str(item["gold"]) + "<br>" + "<br>".join(["+" + str(stat_val) + stat_keys[stat_name] for stat_name, stat_val in item.items() if (stat_val != 0 and stat_name in stat_keys)])
