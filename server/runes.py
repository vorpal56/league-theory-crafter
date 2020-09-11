import re, os, json, requests
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "server")
DATA_PATH = os.path.join(FILES_PATH, "data")

false = False
true = True

def get_rune_tooltips():
	import requests, re
	from bs4 import BeautifulSoup

	with open(os.path.join(DATA_PATH, "json", 'runes.json'), "r+") as file:
		runes = json.load(file)
		for rune in runes:
			url = "gang"

	return

def store_runes():
	with open(os.path.join(DATA_PATH, "json", 'runes.json'), "w") as file:
		json.dump(runes, file)
	return

if __name__ == "__main__":
	get_rune_tooltips()
	pass