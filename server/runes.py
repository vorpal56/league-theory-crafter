import re, os, json
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(FILES_PATH, "data")

false = False
true = True
def remove_html_tags(text, keep_breaks=True):
	# useful for parsing the tooltips from ddragon cdn
	exp = '<[^<]+?>'
	if (keep_breaks):
		replace_br_with_newline = re.sub('<br\s?\/>|<br>', r'\n', text)
		replaced_tags = re.sub(exp, '', replace_br_with_newline)
		return re.sub(r'\n', '<br>', replaced_tags)
	else:
		return re.sub(exp, '', text)

def clean_tooltip(text):
	return re.sub(r' +', ' ', re.sub(r'[−]', '-', remove_html_tags(text, False))).replace(u"\u00A0", " ")

def get_rune_tooltips():
	import requests
	from bs4 import BeautifulSoup

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

if __name__ == "__main__":
	get_rune_tooltips()
	pass