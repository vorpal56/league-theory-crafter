import re
import os
import json
import requests
from collections import OrderedDict
from pprint import PrettyPrinter
from common.utils import DATA_PATH, remove_html_tags, full_clean_text, parse_table
from bs4 import BeautifulSoup

pp = PrettyPrinter(indent=2, width=200)

def clean_tooltip(text):
	return full_clean_text(remove_html_tags(text, keep_breaks=False))

def get_rune_tooltips():
	float_exp = r'(\d+(?:\.\d+)?)'
	sub_pattern_exp = f"{float_exp}%? - ?{float_exp}%? \(based on level\)"
	full_pattern_exp = f"{sub_pattern_exp}[\(+ A-Za-z0-9\)%]+(?:bonus)"
	with open(os.path.join(DATA_PATH, "json", 'runes.json'), "r+") as file:
		all_runes = json.load(file)
		file.seek(0)
		for rune_tree in all_runes:
			for slot_type, runes_in_slot in rune_tree["runes"][0].items():
				for i, rune in enumerate(runes_in_slot):
					rune_name = rune["name"]
					rune_apiname = rune["apiname"]
					cleaned_name = re.sub(r'[ ]', '_',  rune_name)
					url = f"https://leagueoflegends.fandom.com/wiki/Template:Rune_data_{cleaned_name}"
					response = requests.get(url)
					if response.status_code==200:
						soup = BeautifulSoup(response.text, 'html.parser')
						rune_data = parse_table(soup)
						tooltip_data = [rune_name]
						for data_field, data_val in rune_data.items():
							if data_field.startswith("description"):
								if data_val != "" and "Gain Legend stacks" not in data_val:
									tooltip_data.append(clean_tooltip(data_val))
									match = re.search(full_pattern_exp, data_val, re.IGNORECASE)
									full_match_string = None
									if match is not None:
										full_match_string = match.group()
										formula_bounds = match.groups()
										lower_bound, upper_bound = float(formula_bounds[0]), float(formula_bounds[1])
										if rune_apiname == "conqueror":
											lower_bound *= (1/0.6) # We are adding the AP expression as since we can easily divide by 0.6 for AD version
											upper_bound *= (1/0.6)
										m = (upper_bound - lower_bound) / 17
										b = lower_bound - m
										string_base_formula = f"{str(round(b, 5))}+{str(round(m, 5))}*currentLevel"
									else:
										string_base_formula = ""
									if string_base_formula != "":
										print(rune_apiname, full_match_string, string_base_formula)
										rune["string_base_formula"] = string_base_formula
						rune["tooltip"] = "<br><br>".join(tooltip_data)
					else:
						print("failed to get", rune_name)
		file.truncate()
		json.dump(all_runes, file)
	return

def store_runes():
	with open(os.path.join(DATA_PATH, "json", 'runes.json'), "w") as file:
		json.dump(runes, file)
	return
