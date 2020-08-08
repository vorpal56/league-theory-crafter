import re, csv, os
from pprint import PrettyPrinter
APP_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES_PATH = os.path.join(APP_PATH, "src")

def separateToList(line):
	return next(csv.reader([line], delimiter=',', quotechar='"'))

def dumpItems(): 
	file = open(os.path.join(FILES_PATH, "crixaliz-items-sheet.csv"), "r", encoding="utf-8")
	fileHeaders = file.readline()
	headers= "name,#,gold,hp,hp5,mp,mp5,ad,AP,ARm,MR,AS,crit,cdr,LS,Leth,MPEN,shoe_ms,ms%,heal_shield,phys_on_hit,magic_on_hit,att_m_proc,spell_m_proc,att_phys_proc,apen%,Mpen%,CritDMG,spell_vamp,ap_mult,ad_mult,hp_mult,tenacity,flat_ms,shield,trash1,trash2,Icon"
	keys = separateToList(headers)
	totalItems = []
	for i, line in enumerate(file):
		itemInfo = separateToList(line)
		name = itemInfo[0].upper()
		if name != "" and name != "-SELECT-" and  name != 'ELIXIRES' and name != "PLAYER TOTAL" and name !="ENEMY TOTAL":
			length = len(itemInfo)
			itemStats = {}
			for j in range(length):
				if j != 1 and j!= length-3 and j != length-2 and j!= length-1 and j!= length:
					itemValue = re.sub(r'[\%\_\.]', '', itemInfo[j])
					try:
						itemStats[keys[j].lower()] = int(itemValue)
					except:
						if itemValue == "" and keys[j] !="name":
							itemStats[keys[j].lower()] = 0
						else:
							if (re.sub(r'[ ]', '', itemValue.lower()) == "bfsword"):
								itemStats[keys[j].lower()] = "BF Sword"
							else:
								itemStats[keys[j].lower()] = itemValue
			itemStats["modes"]="all"
			totalItems.append(itemStats)

	file.close()
	file = open(os.path.join(FILES_PATH, "app", "items.ts"), "w", encoding="utf-8")
	pp = PrettyPrinter(indent=2)
	file.write("export const ITEMS = " + pp.pformat(totalItems))
	file.close()
	return totalItems
if __name__ == '__main__':
	items = dumpItems()