import re
import os
import json
import requests
import urllib.request
from functools import wraps
from collections import OrderedDict

APP_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
FRONTEND_PATH = os.path.join(APP_PATH, "src")
BACKEND_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(BACKEND_PATH, "data")

ASSETS_PATH = os.path.join(FRONTEND_PATH, "assets")
IMAGE_ASSETS_PATH = os.path.join(ASSETS_PATH, "images")
BASE_ASSETS_PATH = "assets/images/champions/"
SKILL_KEYS = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]

def fetch_response(calling_function):
	@wraps(calling_function)
	def wrapper(*args, **kwargs):
		use = kwargs.get("use")
		data_path = kwargs.get("data_path")
		file_name = kwargs.get("filename")
		if use == "live":
			response = requests.get(kwargs.get("url"))
			if response.status_code == 200:
				if kwargs.get("response_type") == "text":
					return calling_function(response.text)
				response_body = response.json()
				if (data_path is not None):
					with open(os.path.join(data_path, file_name), "w") as json_file:
						json.dump(response_body, json_file)
		elif use == "cache":
			with open(os.path.join(data_path, file_name), "r") as json_file:
				response_body = json.load(json_file)
		return calling_function(response_body)
	return wrapper

def fetch_asset(url, full_destination_path):
	urllib.request.urlretrieve(url, full_destination_path)
	return

def parse_table(soup):
	data_contents = OrderedDict()
	for td in soup.findAll("td", {"data-name": True}):
		attributes = td.find_previous("td").text.rstrip()
		attributes = attributes.lstrip()
		values = td.text.rstrip()
		values = values.lstrip().rstrip()
		data_contents[attributes] = remove_extra_whitespace(remove_ascii_chars(values))
	return data_contents

def get_current_version():
	current_version_filename = os.path.join(DATA_PATH, "json", "version.json")
	if not os.path.exists(current_version_filename):
		return 0
	current_version_file = open(current_version_filename, "r", encoding="utf-8")
	version_obj = json.load(current_version_file)
	current_version_file.close()
	return version_obj.get("current_data_patch")

def get_live_version():
	import requests
	response = requests.get("https://ddragon.leagueoflegends.com/api/versions.json")
	return response.json()[0]

def update_data_version():
	current_version = get_current_version()
	live_version = get_live_version()
	if (current_version != live_version):
		current_version_file = open(os.path.join(DATA_PATH, "json", "version.json"), "w", encoding="utf-8")
		json.dump({"current_data_patch": live_version}, current_version_file)
		current_version_file.close()
		print("Version has been changed from {} to {}".format(current_version, live_version))
	else:
		print("Version has not changed. Still on {}".format(current_version))
	return live_version

def create_search_type_string(search_type):
	return re.sub(r'[\W\_]', ' ', search_type).title()

def create_apiname(name, as_lower=True):
	if as_lower:
		name = name.lower()
	return re.sub(r'[\W\_]', '', name)

def remove_html_tags(text, keep_breaks=True):
	# useful for parsing the tooltips from ddragon cdn
	exp = '<[^<]+?>'
	if (keep_breaks):
		replace_br_with_newline = re.sub('<br\s?\/>|<br>', r'\n', text)
		replaced_tags = re.sub(exp, '', replace_br_with_newline)
		return re.sub(r'\n', '<br>', replaced_tags)
	else:
		return re.sub(exp, '', text)

def remove_ascii_chars(text):
	text = text.replace("\u00a0", " ")
	text = text.replace("\u300c", "[")
	text = text.replace("\u300d", "]")
	text = text.replace("\u00ba", "°")
	text = text.replace("\u200b", "")  # zero width space
	text = text.replace("\u200e", "")  # left-to-right mark
	text = text.replace("\u2013", ":")  # left-to-right mark
	text = text.replace("\xa0", " ")
	text = text.replace("\uFF06", "&")
	text = text.replace(r"−", "-")
	return text

def remove_extra_whitespace(text):
	return re.sub(r' +', ' ', text)

def fix_punctuation(text):
	# some of the text has some weird things in it so we fix the punctuation
	if ("0.0%" in text):
		text = text.replace("0.0%", "0%")
	return re.sub(r'(?<=[.,])(?=[\D])', r' ', text)

def full_clean_text(text):
	return remove_ascii_chars(remove_extra_whitespace(text))

if __name__ == "__main__":
	print(get_live_version())

item_tooltip_stat_keys = {
	'ability_haste': ' Ability Haste',
	'ad': ' Attack Damage',
	'ap': ' Ability Power',
	'apen%': '% Armor Penetration',
	'arm': ' Armor',
	'as': '% Attack Speed',
	'boots_ms': ' Move Speed',
	'crit': '% Critical Hit Chance',
	'critdmg': '% Bonus Critical Damage',
	'flat_ms': ' Move Speed',
	'heal_shield': '% Bonus Healing or Shielding',
	'hp': ' Health',
	'hp5': ' Health per 5',
	'hp5%': '% Health per 5',
	'leth': ' Lethality',
	'ls': '% Lifesteal',
	'mp': ' Mana',
	'mp5':  ' Mana per 5',
	'mp5%': '% Mana per 5',
	'mpen': ' Magic Penetration',
	'mpen%': '% Magic Penetration',
	'mr': ' Magic Resistance',
	'ms': ' Move Speed',
	'ms%': '% Move Speed',
	'omnivamp': '% Omnivamp',
	'shield': ' Shield',
	'spell_vamp': '% Spell Vamp',
	'tenacity': '% Tenacity',
}

item_stat_key_mapping = {
	"abilityPowerflat":"ap",
	"armorflat":"arm",
	"armorPenetrationpercent":"apen%",
	"armorPenetrationflat": "apen%", # temp map added PR to meraki to fix
	"attackDamageflat":"ad",
	"attackSpeedflat":"as",
	"attackSpeedpercent":"as", # temp map added PR to meraki to fix
	"criticalStrikeChancepercent":"crit",
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

meraki_stat_keys = {
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