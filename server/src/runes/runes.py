import re
import os
import json
import requests
from pprint import PrettyPrinter
from common.utils import DATA_PATH, remove_html_tags, full_clean_text
from bs4 import BeautifulSoup

def clean_tooltip(text):
	return full_clean_text(remove_html_tags(text, keep_breaks=False))

def get_rune_tooltips():
	with open(os.path.join(DATA_PATH, "json", 'runes.json'), "r+") as file:
		all_runes = json.load(file)
		file.seek(0)
		for rune_tree in all_runes:
			for slot_type, runes_in_slot in rune_tree["runes"][0].items():
				for i, rune in enumerate(runes_in_slot):
					rune_name = rune["name"]
					cleaned_name = re.sub(r'[ ]', '_',  rune_name)
					url = "https://leagueoflegends.fandom.com/wiki/{}".format(cleaned_name)
					response = requests.get(url)
					if response.status_code==200:
						soup = BeautifulSoup(response.text, 'html.parser')
						try:
							if (slot_type == "slot2" and rune_tree["path_name"]=="Domination"):
								raw_data = soup.find_all("div", class_="pi-data-value pi-font")
								join_data = [rune_name]
								if (i==0):
									end_range = len(raw_data)-3
								else:
									end_range = len(raw_data)-2
								for k in range(0, end_range):
									join_data.append(clean_tooltip(raw_data[k].text))
								rune["tooltip"] = "<br><br>".join(join_data)
							else:
								raw_data = soup.find("div", class_="pi-data-value pi-font").text
								cleaned_tooltip =  clean_tooltip(raw_data)
								rune["tooltip"] = "<br><br>".join([rune_name, cleaned_tooltip])
						except Exception as e:
							url += "_(Rune)"
							response = requests.get(url)
							if response.status_code == 200:
								soup = BeautifulSoup(response.text, 'html.parser')
								raw_data = soup.find("div", class_="pi-data-value pi-font").text
								cleaned_tooltip = clean_tooltip(raw_data)
								rune["tooltip"] = "<br><br>".join([rune_name, cleaned_tooltip])
							else:
								print("failed to parse", rune_name, cleaned_tooltip)
					else:
						print("failed to get", rune_name)
		file.truncate()
		json.dump(all_runes, file)
	return

def store_runes():
	with open(os.path.join(DATA_PATH, "json", 'runes.json'), "w") as file:
		json.dump(runes, file)
	return
