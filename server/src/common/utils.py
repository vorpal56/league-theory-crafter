import re, os

APP_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA_PATH = os.path.join(APP_PATH, "data")

skill_keys = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"]

def get_version():
	import requests
	response = requests.get("https://ddragon.leagueoflegends.com/api/versions.json")
	return response.json()[0]

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
	# text = text.replace(r"−", "-")
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
	print(get_version())