import os
import requests
import json
import re
from collections import OrderedDict
from pprint import PrettyPrinter
from bs4 import BeautifulSoup
from common.utils import IMAGE_ASSETS_PATH, DATA_PATH, fetch_response, item_stat_key_mapping, item_tooltip_stat_keys, create_apiname, create_search_type_string, full_clean_text, fix_punctuation, fetch_asset, remove_ascii_chars

# stat keys is used to write the tooltip data based on the model of our data

stat_val_reps = {
	"percent":"%",
	"flat": "",
	"perLevel":"_lvl",
}

# because of the new item data, our item model no longer works. This means we need to look at the data of the new items, create a model, request the items.json (cache if needed per patch), parse it and compile it to our own requirements. now interactions between items is something that we'll need to model again (such as last whisper, LDR and so on)

# items are broken down into 5 ranks: starters, basics, epics, legendaries, mythics

pp = PrettyPrinter(indent=2, width=200)

@fetch_response
def get_item_groups(response_text):
	item_groups = {}
	soup = BeautifulSoup(response_text, 'html.parser')
	table = soup.find("table", class_="article-table")
	table_rows = table.find_all("tr")
	for row in table_rows:
		item_group_row = row.find_all("td")
		try:
			item_group_name = item_group_row[0].text.lower()
			if "and" in item_group_name:
				item_group_name = item_group_name.replace("and", ",")
			item_group_name = re.sub(r'[^A-Za-z0-9^,]', '', item_group_name)
			# if item_group_name == "mythiccomponent":
			# 	item_group_name = "mythic"
			item_names = item_group_row[1]
			item_group = {"name": item_group_name, "items":[]}
			for span in item_names.find_all("span", class_="item-icon"):
				item_groups[create_apiname(span.text)] = item_group_name
		except:
			continue
	return item_groups

@fetch_response
def get_item_data(response_body):
	sorted_items = OrderedDict(sorted(response_body.items(), key=lambda item: item[1]["name"])) # Sort the items just for cleanliness in the mythic section
	return sorted_items

def compile_new_item_data(using="meraki", use="live"):
	pp = PrettyPrinter(indent=2, width=200)
	item_cache_path = os.path.join(DATA_PATH, "json_meraki_item_cache", "preseason_11")
	if not os.path.exists(item_cache_path):
		os.makedir(item_cache_path)
	item_data = get_item_data(use=use, data_path=item_cache_path, filename="items.json", url="http://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json", response_type="json")
	item_groups = get_item_groups(use="live", url="https://leagueoflegends.fandom.com/wiki/Item_group", response_type="text")

	ornn_items_cache_path = os.path.join(DATA_PATH, "json_meraki_item_cache", "ornn_items") # the files need to be updated manually currently (nov 28, PR going to be made by dryancd for ornn items)
	for full_filename in os.listdir(ornn_items_cache_path):
		if os.path.isfile(os.path.join(ornn_items_cache_path, full_filename)):
			filename = os.path.splitext(full_filename)[0]
			item_apiname, item_id = filename.split("_")
			with open(os.path.join(DATA_PATH, "json_meraki_item_cache", "ornn_items", full_filename), "r") as ornn_file:
				ornn_item_data = json.load(ornn_file)
				name = ornn_item_data.get("name")
				image_name = re.sub(r"[^A-Za-z0-9^, ]", '', name)
				image_name = re.sub(r"\ ", '-', image_name).lower()
				url = "https://www.mobafire.com/images/item/{}.gif".format(image_name)
				item_image_path = os.path.join(IMAGE_ASSETS_PATH, "items", "{}.png".format(name))
				if not os.path.exists(item_image_path):
					try:
						fetch_asset(url, item_image_path)
					except Exception as e:
						print(e, image_name, url)
						continue
				ornn_item_data["icon"] = "assets/images/items/{}.png".format(name)
				ornn_item_data["nicknames"] = ["masterwork", "ornn", "forge"]
				item_data[item_id] = ornn_item_data
				item_groups[item_apiname] = "mythic"

	boots_id = "1001"
	builds_into = set(item_data.get(boots_id).get("buildsInto"))

	items = []
	existing_items = set() # duplicate items in different gamemodes, can't differentiate them
	item_search_types = {} # dropdown selector in UI for filteirng items by type

	stackable_items = {
		"archangelsstaff": "mana charge",
		"darkseal": "dread",
		"manamune": "mana charge",
		"mejaissoulstealer": "deathwalker",
		"seekersarmguard": "witch's path",
		"tearofthegoddess": "mana charge"
	}

	# this will always overwrite items that have
	index = 0
	for i, (item_id, item_details) in enumerate(item_data.items()):
		int_item_id = int(item_id)
		name = item_details.get("name")
		apiname = create_apiname(name)
		# some items don't have any stat bonuses like refillable potion, corrupting, kalista spear, etc. so we don't add them to our item set
		# some items that we want to include (elixirs and boots) apparently have no effects so we need to extend the condition
		#2422 is magical footwear which we'll account for in the runes component
		if not item_details.get("removed") and apiname not in existing_items and item_id != "2422" and (item_details.get("noEffects") is False or "elixir" in apiname or "boots" in apiname):
			# not sure how to deal with passive stats yet, I'll need an example of it
			existing_items.add(apiname)
			stats = item_details.get("stats")
			passives = item_details.get("passives")
			try:
				rank = item_details.get("rank")[0].lower()
			except Exception as e:
				rank = 'basic'
			shop = item_details.get("shop")
			shop_search_types = []
			for search_type in shop.get("tags"):
				key = search_type # change the key type so when we apply the item filter pipe, and we check, for example, armor, we don't check armor_penetration, just armor since the filter pipe does .includes(search_type)
				if search_type == "ARMOR_PENETRATION":
					key = "APEN"
				elif search_type == "MANA_REGEN":
					key = "MP5"
				elif search_type == "HEALTH_REGEN":
					key = "HP5"
				elif search_type == "DAMAGE":
					key = "ATTACK DAMAGE"
					search_type = key
				shop_search_types.append(key.lower())
				item_search_types[key] = create_search_type_string(search_type)
			item_info = OrderedDict([
				('name', name),
				('allowed_to', { 'melee': True, 'ranged': True}),
				('apiname', apiname),
				('img', item_details.get("icon")), # hotlink the` item to ddragon and have them handle it or cache on our own server?
				('id', item_id),
				('index', index),
				('rank', rank),
				('tags', ",".join([nickname.lower() for nickname in item_details.get("nicknames")])),
				('search_types', ",".join(shop_search_types)),
				('visible', True),
				('stackable', stackable_items.get(apiname) if apiname in stackable_items else False), # stackable is a set of stats that increase the existing base stats
				('stacked', False),
				('gold', shop.get("prices").get("total")),
				('passives', []),
				('stats', {}),
				('item_group', item_groups.get(apiname))
			])
			index += 1
			for stat_parent_key, stat_parent_details in stats.items():
				for stat_child_key, stat_val in stat_parent_details.items():
					full_stat_key = stat_parent_key + stat_child_key
					if stat_val != 0 and full_stat_key in item_stat_key_mapping: # remove data redundancy
						item_info["stats"][item_stat_key_mapping.get(full_stat_key)] = int(stat_val)
			if apiname == "mercurystreads":
				item_info["stats"]["tenacity"] = 30 # mercury treads don't have tenacity in data object
			# passive stats are really weird, sometimes it's not included into the dataset, so we'll need to figure out how we're going to handle this on a patch by patch basis (especially during the early stages of preseason)
			for passive in passives:
				passive_name = passive.get("name")
				effect_description = passive.get("effects")
				if passive_name is None:
					lower_passive_name = passive_name
					if "lethality" not in effect_description.lower():
						# print(item_id, apiname)
						continue
				else:
					lower_passive_name = passive_name.lower()
				applies_to_mythic = passive.get("mythic")
				passive_details = OrderedDict([
					('mythic', applies_to_mythic),
					('name', lower_passive_name),
					('stats', {}),
					('unique', passive.get("unique")),
				])
				if lower_passive_name == "mana charge":
					# these values are hardcoded right now... should be dynamic on patches. how do I do this?
					passive_details["stats"]["mp"] = 450
				elif lower_passive_name == "witch's path":
					passive_details["stats"]["arm"] = 30
				passive_stats = passive.get("stats")
				for stat_parent_key, stat_parent_details in passive_stats.items():
					if type(stat_parent_details) == dict:
						for stat_child_key, stat_val in stat_parent_details.items():
							full_stat_key = stat_parent_key + stat_child_key
							if stat_val != 0 and full_stat_key in item_stat_key_mapping:
								passive_details["stats"][item_stat_key_mapping.get(full_stat_key)] = int(stat_val)
					else:
						# some passive stat objects have values as floats and not dicts (eg. abyssal mask)? really weird
						for stat_val_rep_key, stat_val_rep_val in stat_val_reps.items():
							full_stat_key = stat_parent_key + stat_val_rep_key
							if stat_parent_details !=0 and full_stat_key in item_stat_key_mapping:
								passive_details["stats"][item_stat_key_mapping.get(full_stat_key)] = int(stat_val)
				item_info["passives"].append(dict(passive_details))
			meraki_tooltip = base_item_stats_tooltip(item_info)
			passives_tooltip = effects_tooltip(passives)
			actives_tooltip = effects_tooltip(item_details.get("active"), effect_type="a")

			item_info["tooltip"] = full_clean_text(meraki_tooltip + passives_tooltip + actives_tooltip)

			item_info = dict(sorted(item_info.items(), key=lambda item: item[0]))
			if (int_item_id in builds_into or item_id == boots_id) and "boots" not in item_info["tags"]:
				item_info["tags"] += "boots" if item_info["tags"] == "" else ",boots"

			item_json_file = open(os.path.join(item_cache_path, "_".join([apiname, item_id]) + ".json"), "w", encoding="utf-8")
			json.dump(item_info, item_json_file)
			item_json_file.close()
			items.append(item_info)
	a = [{"label": "All", "value": ""}]
	k = []
	for key, value in item_search_types.items():
		b = {"label": value, "value": key}
		k.append(b)
	k = sorted(k, key = lambda item: item["label"])
	# pp.pprint(a+k)

	with open(os.path.join(item_cache_path, "updated_items_merkai.ts"), "w", encoding="utf-8") as ts_file:
		ts_file.write("let False = false;\nlet True=true;\nlet None=null;\nexport const ITEMS = " + str(items))
	return

def effects_tooltip(effects, effect_type="p"):
	string_iter = []
	for effect in effects:
		effect_name = effect.get("name")
		effect_str = ""
		if (effect.get("unique")):
			effect_str += "UNIQUE Passive" if effect_type == "p" else "UNIQUE Active"
		if (effect_name is not None and effect_name != "Passive"):
			effect_str += " - " + effect_name + ": "
		elif (effect_name == "Passive"): # effect_name is None is leth items so far
			effect_str += ": "
		effect_str += effect.get("effects")
		string_iter.append(remove_ascii_chars(fix_punctuation(effect_str)))
	if len(string_iter) != 0:
		return "<br><br>" + "<br><br>".join(string_iter)
	return ""

def base_item_stats_tooltip(item):
	sorted_stats = dict(sorted(item["stats"].items(), key=lambda item: item[0]))
	return item["name"] + "<br><br>" + "Cost: " + str(item["gold"]) + "<br>" + "<br>".join(["+" + str(stat_val) + item_tooltip_stat_keys[stat_name] for stat_name, stat_val in sorted_stats.items() if (stat_val != 0 and stat_name in item_tooltip_stat_keys)])