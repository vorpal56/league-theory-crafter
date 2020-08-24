import re, csv, os
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "src")
pp = PrettyPrinter(indent=2, width=100)

def separateToList(line):
	return next(csv.reader([line], delimiter=',', quotechar='"'))

def dumpItems():
	file = open(os.path.join(FILES_PATH, "crixaliz-items-sheet.csv"), "r", encoding="utf-8")
	fileHeaders = file.readline()
	headers= "name,#,gold,hp,hp5,mp,mp5,ad,AP,ARm,MR,AS,crit,cdr,LS,Leth,MPEN,boots_ms,ms%,heal_shield,phys_on_hit,magic_on_hit,att_m_proc,spell_m_proc,att_phys_proc,apen%,Mpen%,CritDMG,spell_vamp,ap_mult,ad_mult,hp_mult,tenacity,flat_ms,shield"
	keys = separateToList(headers)
	totalItems = []
	additionalKeys = ["modes", "shared_item", "img", "apiname", "tags", "allowed_to"]
	counts =0
	for i, line in enumerate(file):
		itemInfo = separateToList(line)
		name = itemInfo[0]
		upperedName = itemInfo[0].upper()
		if upperedName != "" and upperedName != "-SELECT-" and  upperedName != 'ELIXIRES' and upperedName != "PLAYER TOTAL" and upperedName !="ENEMY TOTAL":
			counts +=1
			length = len(itemInfo)
			itemStats = {}
			for j in range(length):
				statNameLowered = keys[j].lower()
				if j != 1:
					itemValue = re.sub(r'[\%\_\.]', '', itemInfo[j])
					try:
						if "mult" in statNameLowered:
							itemVal = 0 if itemValue == "" else int(itemValue)
							itemStats[statNameLowered] = {
							"type": "total", # adjust this manually on the items (there are so few items)
							"value": itemVal
							}
						else:
							# print(statNameLowered, itemValue) if statNameLowered=="upperedName" else None
							itemStats[statNameLowered] = int(itemValue)
					except:
						if itemValue == "" and statNameLowered !="upperedName":
							itemStats[statNameLowered] = 0
						else:
							itemStats[statNameLowered] = itemValue.replace("Masterwork: ", "")
			for key in additionalKeys:
				if key=="modes":
					itemStats[key]="all"
				if key == "shared_item":
					if ("ENCHANTMENT:" in upperedName):
						itemStats[key] = "enchantments" # adjust the shared item as the main parent (eg haunting shared = liandrys, liandrys shared = liandrys)
					elif upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT":
						itemStats[key] = "liandrys"
						# print(itemStats)
					elif "ABYSSAL MASK" in upperedName:
						itemStats[key] = "abyssal"
					elif "MASTERWORK" in upperedName:
						itemStats[key] = "masterwork"
					else:
						itemStats[key] = None
				if key == "tags":
					itemStats[key] = ""
				lowerLookUpName = name.lower()[:8]
				if key == "img":
					if (lowerLookUpName == "hex core"):
						itemStats[key] = "assets/images/items/" + re.sub(r'[\:\.\-]', '', name) + ".png"
					elif lowerLookUpName == "null-mag":
						itemStats[key] = "assets/images/items/Null-Magic Mantle.png"
					elif lowerLookUpName == "masterwo":
						itemStats[key] = "assets/images/items/" + re.sub(r'[0-9\:\.\-]', '', name).replace("Masterwork ", "") + ".png"
					else:
						itemStats[key] = "assets/images/items/" + re.sub(r'[0-9\:\.\-]', '', name) + ".png"
				if key =="apiname":
					if (lowerLookUpName == "hex core"):
						itemStats[key] = re.sub(r'[\' \:\.\-]', '', name.lower())
					elif (lowerLookUpName == "masterwo"):
						itemStats[key] = re.sub(r'[0-9\' \:\.\-]', '', name.lower().replace("masterwork", ""))
					else:
						itemStats[key] = re.sub(r'[0-9\' \:\.\-]', '', name.lower())
				if key =="allowed_to":
					itemStats[key] = {"ranged":True, "melee":True }
				# if (upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT"):
				# 	print(pp.pformat(itemStats))
			totalItems.append(itemStats)
			# if (upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT"):
			# 	print(itemStats)
			# 	print(totalItems[counts-1])
	itemStats = {}
	for key in keys:
		statNameLowered = key.lower()
		if statNameLowered == "name":
			itemStats[statNameLowered] = "Empty"
		elif "mult" in statNameLowered:
			itemVal = 0 if itemValue == "" else int(itemValue)
			itemStats[statNameLowered] = {
			"type": "total", # adjust this manually on the items (there are so few items)
			"value": itemVal
			}
		elif statNameLowered != "#":
			itemStats[statNameLowered] = 0
	for key in additionalKeys:
		if key == "shared_item":
			itemStats[key] = None
		elif key == "modes":
			itemStats[key] = "all"
		elif key =="allowed_to":
			itemStats[key] = {"ranged":True, "melee":True }
		else:
			itemStats[key] = ""
	file.close()
	file = open(os.path.join(FILES_PATH, "data", "items_test2.ts"), "w", encoding="utf-8")
	result = pp.pformat(totalItems)
	file.write("let None = null;\nlet True = true;\nlet False = False;\nexport const EMPTY_ITEM = " + pp.pformat(itemStats) + ";\nexport const ITEMS = " + result )
	file.close()
	return totalItems

def countChamps():
	new_list = []
	for i, item in enumerate(CHAMPIONS):
		item["index"] = i
		new_list.append(item)

	file = open(os.path.join(FILES_PATH, "data", "data_test.ts"), "w", encoding="utf-8")
	file.write("export const CHAMPIONS = " + pp.pformat(new_list))
	file.close()

def scrape_op():
	from bs4 import BeautifulSoup
	import requests, re, urllib.request, time, random
	from random import randint
	# champion-stat__skill tip > a tag > img tag src

	# mid, supp, bot, top, jng does not influence ability on getting assets
	request_url = "https://www.op.gg/champion/{}/statistics/mid"
	champs = []
	for ci, champion in enumerate(CHAMPIONS):
		champion_path = os.path.join(FILES_PATH, 'assets', 'images', 'champions', champion["name"])
		if not os.path.exists(champion_path):
			os.mkdir(champion_path)
		champion_url = request_url.format(champion["apiname"])
		response = requests.get(champion_url)
		# we get request limited after about 500 or so requests to their cdn or so
		time.sleep(randint(1, 5))
		base_assets_path = "/".join(["assets", "images", "champions", champion["name"]])
		if response.status_code == 200:
			soup = BeautifulSoup(response.text, 'html.parser')
			div_tag = soup.find_all("div", class_="champion-stat__skill")

			for i, div in enumerate(div_tag):
				src_tag = "https:" + div.find("img")["src"].split("?")[0]
				if i == 0:
					skill_name =  "skill_i"
				elif i == 1:
					skill_name =  "skill_q"
				elif i ==2:
					skill_name = "skill_w"
				elif i == 3:
					skill_name = "skill_e"
				elif i == 4:
					skill_name = "skill_r"
				img_path = os.path.join(champion_path, champion[skill_name]["1"] +".png")
				if not os.path.exists(img_path):
					urllib.request.urlretrieve(src_tag, img_path)
					print("Retrieved", skill_name)
			print("Finished with", champion["name"], "\n")
		else:
			print("Something went wrong for", champion["name"])

		champion["img"] = base_assets_path + "/" + champion["name"] + ".png"
		champion["index"] = int(ci)
		champion["apiname"] = champion["apiname"].lower()
		champs.append(champion)
	file = open(os.path.join(FILES_PATH, "data", "new_data.ts"), "w", encoding="utf-8")
	file.write(pp.pformat(champs))
	file.close()
	print("Finished")
	return

RUNES = [{
	"runes":
		[{
			"keystones": [{
				"name": "Press the Attack",
				"img": "assets/images/runes/Precision/Press the Attack.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Lethal Tempo",
				"img": "assets/images/runes/Precision/Lethal Tempo.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Fleet Footwork",
				"img": "assets/images/runes/Precision/Fleet Footwork.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Conqueror",
				"img": "assets/images/runes/Precision/Conqueror.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			}],
			"slot1": [{
				"name": "Overheal",
				"img": "assets/images/runes/Precision/Overheal.png",
				"active": False,
				"keyslot": "slot1",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
				"index": 0,
			},
			{
				"name": "Triumph",
				"img": "assets/images/runes/Precision/Triumph.png",
				"active": False,
				"keyslot": "slot1",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
				"index": 1,
			},
			{
				"name": "Presence of Mind",
				"img": "assets/images/runes/Precision/Presence of Mind.png",
				"active": False,
				"keyslot": "slot1",
				"stats": {
					"mp": 0
				},
				"stackable": { "mp": 500 },
				"stacked": False,
				"index": 2,
			}],
			"slot2": [{
				"name": "Legend: Alacrity",
				"img": "assets/images/runes/Precision/Legend Alacrity.png",
				"active": False,
				"keyslot": "slot2",
				"stats": {
					"as": 3,
				},
				"stackable": { "as": 15 },
				"stacked": False,
				"index": 0,
			},
			{
				"name": "Legend: Tenacity",
				"img": "assets/images/runes/Precision/Legend Tenacity.png",
				"active": False,
				"keyslot": "slot2",
				"stats": {
					"tenacity": 5,
				},
				"stackable": { "tenacity": 25 },
				"stacked": False,
				"index": 1,
			},
			{
				"name": "Legend: Bloodline",
				"img": "assets/images/runes/Precision/Legend Bloodline.png",
				"active": False,
				"keyslot": "slot2",
				"stats": {
					"ls": 0
				},
				"stackable": { "as": 12 },
				"stacked": False,
				"index": 2,
			}],
			"slot3": [{
				"name": "Coup de Grace",
				"img": "assets/images/runes/Precision/Coup de Grace.png",
				"active": False,
				"keyslot": "slot3",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
				"index": 0,
			},
			{
				"name": "Cut Down",
				"img": "assets/images/runes/Precision/Cut Down.png",
				"active": False,
				"keyslot": "slot3",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
				"index": 1,
			},
			{
				"name": "Last Stand",
				"img": "assets/images/runes/Precision/Last Stand.png",
				"active": False,
				"keyslot": "slot3",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
				"index": 2,
			}],
		}],
	"path_name": "Precision",
	"img": "assets/images/runes/Precision/Precision.png",
	"active_primary": False,
	"active_secondary": False,
}, {
	"runes": [{
		"keystones": [
			{
				"name": "Electrocute",
				"img": "assets/images/runes/Domination/Electrocute.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Predator",
				"img": "assets/images/runes/Domination/Predator.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Dark Harvest",
				"img": "assets/images/runes/Domination/Dark Harvest.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Hail of Blades",
				"img": "assets/images/runes/Domination/Hail of Blades.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			}],
		"slot1": [{
			"name": "Cheap Shot",
			"img": "assets/images/runes/Domination/Cheap Shot.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Taste of Blood",
			"img": "assets/images/runes/Domination/Taste of Blood.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Sudden Impact",
			"img": "assets/images/runes/Domination/Sudden Impact.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],
		"slot2": [{
			"name": "Zombie Ward",
			"img": "assets/images/runes/Domination/Zombie Ward.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": { "ad": 18, "ap": 30, },
			"stacked": False,
			"type": "adaptive",
			"index": 0,
		},
		{
			"name": "Ghost Poro",
			"img": "assets/images/runes/Domination/Ghost Poro.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": { "ad": 18, "ap": 30, },
			"stacked": False,
			"type": "adaptive",
			"index": 1,
		},
		{
			"name": "Eyeball Collection",
			"img": "assets/images/runes/Domination/Eyeball Collection.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": { "ad": 18, "ap": 30, },
			"stacked": False,
			"type": "adaptive",
			"index": 2,
		}],
		"slot3": [{
			"name": "Ravenous Hunter",
			"img": "assets/images/runes/Domination/Ravenous Hunter.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {
				"ls": 1.5,
				"spell_vamp": 1.5,
			},
			"stackable": { "ls": 12.5, "spell_vamp": 12.5, },
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Ingenious Hunter",
			"img": "assets/images/runes/Domination/Ingenious Hunter.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Relentless Hunter",
			"img": "assets/images/runes/Domination/Relentless Hunter.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		},
		{
			"name": "Ultimate Hunter",
			"img": "assets/images/runes/Domination/Ultimate Hunter.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 3,
		}],

	}],
	"path_name": "Domination",
	"img": "assets/images/runes/Domination/Domination.png",
	"active_primary": False,
	"active_secondary": False,
}, {
	"runes": [{
		"keystones": [
			{
				"name": "Summon Aery",
				"img": "assets/images/runes/Sorcery/Summon Aery.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Arcane Comet",
				"img": "assets/images/runes/Sorcery/Arcane Comet.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Phase Rush",
				"img": "assets/images/runes/Sorcery/Phase Rush.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			}],
		"slot1": [{
			"name": "Nullifying Orb",
			"img": "assets/images/runes/Sorcery/Nullifying Orb.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Manaflow Band",
			"img": "assets/images/runes/Sorcery/Manaflow Band.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {
				"mp": 0,
			},
			"stackable": { "mp": 250 },
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Nimbus Cloak",
			"img": "assets/images/runes/Sorcery/Nimbus Cloak.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],
		"slot2": [{
			"name": "Transcendence",
			"img": "assets/images/runes/Sorcery/Transcendence.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Celerity",
			"img": "assets/images/runes/Sorcery/Celerity.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Absolute Focus",
			"img": "assets/images/runes/Sorcery/Absolute Focus.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {
				"ad": 1.8,
				"ap": 3,
			},
			"stackable": { "ad_lvl": 0.953, "ap_lvl": 1.588 },
			"stacked": False,
			"type": "adaptive",
			"index": 2,
		}],
		"slot3": [{
			"name": "Scorch",
			"img": "assets/images/runes/Sorcery/Scorch.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Waterwalking",
			"img": "assets/images/runes/Sorcery/Waterwalking.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Gathering Storm",
			"img": "assets/images/runes/Sorcery/Gathering Storm.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"type": "adaptive",
			"index": 2
		}],

	}],
	"path_name": "Sorcery",
	"img": "assets/images/runes/Sorcery/Sorcery.png",
	"active_primary": False,
	"active_secondary": False,
}, {
	"runes": [{
		"keystones": [
			{
				"name": "Grasp of the Undying",
				"img": "assets/images/runes/Resolve/Grasp of the Undying.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Aftershock",
				"img": "assets/images/runes/Resolve/Aftershock.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Guardian",
				"img": "assets/images/runes/Resolve/Guardian.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},],
		"slot1": [{
			"name": "Demolish",
			"img": "assets/images/runes/Resolve/Demolish.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Font of Life",
			"img": "assets/images/runes/Resolve/Font of Life.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Shield Bash",
			"img": "assets/images/runes/Resolve/Shield Bash.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],
		"slot2": [{
			"name": "Conditioning",
			"img": "assets/images/runes/Resolve/Conditioning.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Second Wind",
			"img": "assets/images/runes/Resolve/Second Wind.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Bone Plating",
			"img": "assets/images/runes/Resolve/Bone Plating.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],
		"slot3": [{
			"name": "Overgrowth",
			"img": "assets/images/runes/Resolve/Overgrowth.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Revitalize",
			"img": "assets/images/runes/Resolve/Revitalize.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Unflinching",
			"img": "assets/images/runes/Resolve/Unflinching.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {
				"tenacity": 10,
			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],

	}],
	"path_name": "Resolve",
	"img": "assets/images/runes/Resolve/Resolve.png",
	"active_primary": False,
	"active_secondary": False,
}, {
	"runes": [{
		"keystones": [
			{
				"name": "Glacial Augment",
				"img": "assets/images/runes/Inspiration/Glacial Augment.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Unsealed Spellbook",
				"img": "assets/images/runes/Inspiration/Unsealed Spellbook.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},
			{
				"name": "Prototype: Omnistone",
				"img": "assets/images/runes/Inspiration/Prototype Omnistone.png",
				"active": False,
				"keyslot": "keystones",
				"stats": {

				},
				"stackable": {},
				"stacked": False,
			},],
		"slot1": [{
			"name": "Hextech Flashtraption",
			"img": "assets/images/runes/Inspiration/Hextech Flashtraption.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Magical Footwear",
			"img": "assets/images/runes/Inspiration/Magical Footwear.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Perfect Timing",
			"img": "assets/images/runes/Inspiration/Perfect Timing.png",
			"active": False,
			"keyslot": "slot1",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],
		"slot2": [{
			"name": "Future's Market",
			"img": "assets/images/runes/Inspiration/Future's Market.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Minion Dematerializer",
			"img": "assets/images/runes/Inspiration/Minion Dematerializer.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Biscuit Delivery",
			"img": "assets/images/runes/Inspiration/Biscuit Delivery.png",
			"active": False,
			"keyslot": "slot2",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],
		"slot3": [{
			"name": "Cosmic Insight",
			"img": "assets/images/runes/Inspiration/Cosmic Insight.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 0,
		},
		{
			"name": "Approach Velocity",
			"img": "assets/images/runes/Inspiration/Approach Velocity.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 1,
		},
		{
			"name": "Time Warp Tonic",
			"img": "assets/images/runes/Inspiration/Time Warp Tonic.png",
			"active": False,
			"keyslot": "slot3",
			"stats": {

			},
			"stackable": {},
			"stacked": False,
			"index": 2,
		}],

	}],
	"path_name": "Inspiration",
	"img": "assets/images/runes/Inspiration/Inspiration.png",
	"active_primary": False,
	"active_secondary": False,
}]
def add_apiname_field_runes():
	for obj in RUNES:
		for slot in obj["runes"]:
			for a in slot:
				for rune_obj in slot[a]:
					# print(rune_obj, "\n")
					val = re.sub(r"[\:\'\-\ ]", '', rune_obj["name"]).lower()
					# print(val, re.sub(r"[\:\'\-\ ]", '', rune_obj["name"]), re.sub(r"", '', rune_obj["name"]))
					rune_obj["apiname"] = val
	file = open(os.path.join(FILES_PATH, "data", "new_runes.ts"), "w", encoding="utf-8")
	file.write(pp.pformat(RUNES))
	file.close()
	return
def fix_order():
	sorted_items_by_name = sorted(items, key=lambda item:item["name"])
	for i, item in enumerate(sorted_items_by_name):
		item["index"] = i
	file = open(os.path.join(FILES_PATH, "data", "sorted_items.ts"), "w", encoding="utf-8")
	file.write(pp.pformat(sorted_items_by_name))
	file.close()
	# print(pp.pformat(b))
	return
if __name__ == '__main__':
	# fix_order()
	# add_apiname_field_runes()
	# scrape_op()
	# items = dumpItems()
	# countChamps()
	pass