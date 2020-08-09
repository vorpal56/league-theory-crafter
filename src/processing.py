import re, csv, os
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "src")

def separateToList(line):
	return next(csv.reader([line], delimiter=',', quotechar='"'))

def dumpItems(): 
	file = open(os.path.join(FILES_PATH, "crixaliz-items-sheet.csv"), "r", encoding="utf-8")
	fileHeaders = file.readline()
	headers= "name,#,gold,hp,hp5,mp,mp5,ad,AP,ARm,MR,AS,crit,cdr,LS,Leth,MPEN,boots_ms,ms%,heal_shield,phys_on_hit,magic_on_hit,att_m_proc,spell_m_proc,att_phys_proc,apen%,Mpen%,CritDMG,spell_vamp,ap_mult,ad_mult,hp_mult,tenacity,flat_ms,shield,trash1,trash2,Icon"
	keys = separateToList(headers)
	totalItems = []
	for i, line in enumerate(file):
		itemInfo = separateToList(line)
		name = itemInfo[0]
		upperedName = itemInfo[0].upper()
		if upperedName != "" and upperedName != "-SELECT-" and  upperedName != 'ELIXIRES' and upperedName != "PLAYER TOTAL" and upperedName !="ENEMY TOTAL":
			length = len(itemInfo)
			itemStats = {}
			for j in range(length):
				statNameLowered = keys[j].lower()
				if j != 1 and j!= length-3 and j != length-2 and j!= length-1 and j!= length:
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
			itemStats["modes"]="all"
			if ("ENCHANTMENT:" in upperedName):
				itemStats["shared_item"] = "enchantments" # adjust the shared item as the main parent (eg haunting shared = liandrys, liandrys shared = liandrys)
			elif upperedName == "HAUNTING GUISE" or upperedName == "LIANDRY'S TORMENT":
				itemStats["shared_item"] = "liandrys"
			elif "ABYSSAL MASK" in upperedName:
				itemStats["shared_item"] = "abyssal"
			elif "MASTERWORK" in upperedName:
				itemStats["shared_item"] = "masterwork"
			else:
				itemStats["shared_item"] = None
			if (name.lower()[:8] == "hex core"): 
				itemStats["img"] = "assets/images/items/" + re.sub(r'[\:\.\-]', '', name) + ".png"
				itemStats["apiname"] = re.sub(r'[\' \:\.\-]', '', name.lower())
				print(re.sub(r'[\' \:\.\-]', '', name.lower()))
			elif (name.lower()[:5] == "null-"):
				itemStats["img"] = "assets/images/items/Null-Magic Mantle.png"
				itemStats["apiname"] = re.sub(r'[\' \:\.\-]', '', name.lower())
			elif (name.lower()[:10] == "masterwork"): 
				# print(re.sub(r'[0-9\:\.\-]', '', name).replace("Masterwork ", ""))
				itemStats["img"] = "assets/images/items/" + re.sub(r'[0-9\:\.\-]', '', name).replace("Masterwork ", "") + ".png"
				itemStats["apiname"] = re.sub(r'[0-9\' \:\.\-]', '', name.lower().replace("masterwork", ""))
			else:
				itemStats["img"] = "assets/images/items/" + re.sub(r'[0-9\:\.\-]', '', name) + ".png"
				itemStats["apiname"] = re.sub(r'[0-9\' \:\.\-]', '', name.lower())
			itemStats["tags"] = ""
			totalItems.append(itemStats)

	file.close()
	file = open(os.path.join(FILES_PATH, "app", "items_test.ts"), "w", encoding="utf-8")
	pp = PrettyPrinter(indent=2)
	result = pp.pformat(totalItems)
	file.write("let None = null;\nexport const ITEMS = " + result)
	file.close()
	# for item in totalItems:
	# 	print(item["name"])
	return totalItems
if __name__ == '__main__':
	items = dumpItems()