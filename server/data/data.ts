import { DamageTypes } from 'src/app/core/models/calculations';
export const GAMEMODES = [
	{ "label": "All", "value": "all" },
	{ "label": "Summoners Rift", "value": "sr" },
	// { "label": "Howling Abyss", "value": "aram" },
	// { "label": "Featured Exclusives", "value": "fgm" }
];
export const ITEM_ORDER = [
	{ 'label': 'Starter 🡒 Mythic', 'value': 's-m' },
	{ 'label': 'Mythic 🡒 Starter', 'value': 'm-s' },
];
export const SEARCH_TYPES = [
	{ 'label': 'All', 'value': '' },
	{ 'label': 'Ability Haste', 'value': 'ABILITY_HASTE' },
	{ 'label': 'Ability Power', 'value': 'ABILITY_POWER' },
	{ 'label': 'Armor', 'value': 'ARMOR' },
	{ 'label': 'Armor Penetration', 'value': 'APEN' },
	{ 'label': 'Attack Damage', 'value': 'ATTACK DAMAGE' },
	{ 'label': 'Attack Speed', 'value': 'ATTACK_SPEED' },
	{ 'label': 'Boots', 'value': 'BOOTS' },
	{ 'label': 'Consumable', 'value': 'CONSUMABLE' },
	{ 'label': 'Critical Strike', 'value': 'CRITICAL_STRIKE' },
	{ 'label': 'Gold Income', 'value': 'GOLD_INCOME' },
	{ 'label': 'Health', 'value': 'HEALTH' },
	{ 'label': 'Health Regen', 'value': 'HP5' },
	{ 'label': 'Jungling', 'value': 'JUNGLING' },
	{ 'label': 'Laning', 'value': 'LANING' },
	{ 'label': 'Lethality', 'value': 'LETHALITY' },
	{ 'label': 'Life Steal', 'value': 'LIFE_STEAL' },
	{ 'label': 'Magic Penetration', 'value': 'MAGIC_PENETRATION' },
	{ 'label': 'Magic Resist', 'value': 'MAGIC_RESIST' },
	{ 'label': 'Mana', 'value': 'MANA' },
	{ 'label': 'Mana Regen', 'value': 'MP5' },
	{ 'label': 'Movement', 'value': 'MOVEMENT' },
	{ 'label': 'Omnivamp', 'value': 'OMNIVAMP' },
	{ 'label': 'Other Movement Items', 'value': 'OTHER_MOVEMENT_ITEMS' },
	{ 'label': 'Physical Vamp', 'value': 'PHYSICAL_VAMP' }
];
export const SKILL_KEYS = ["skill_i", "skill_q", "skill_w", "skill_e", "skill_r"];
export const ROTATION_DURATION = 3;
export const DAMAGE_TYPE_MAPPING = {};
DAMAGE_TYPE_MAPPING[DamageTypes.PHYSICAL_DAMAGE] = "Physical Damage";
DAMAGE_TYPE_MAPPING[DamageTypes.MAGIC_DAMAGE] = "Magic Damage";
DAMAGE_TYPE_MAPPING[DamageTypes.TRUE_DAMAGE] = "True Damage";
export const STAT_KEYS = {
	'ad': ' Attack Damage',
	'ap': ' Ability Power',
	'apen%': '% Armor Penetration',
	'arm': ' Armor',
	'as': ' Attack Speed',
	'boots_ms': ' Move Speed',
	'cdr': '% Cooldown Reduction',
	'crit': '% Critical Hit Chance',
	'critdmg': '% Bonus Critical Damage',
	'flat_ms': ' Move Speed',
	'heal_shield': '% Bonus Healing or Shielding',
	'hp': ' Health',
	'hp5': ' Health per 5',
	'hp5%': '% Heatlh per 5',
	'leth': ' Lethality',
	'ls': '% Lifesteal',
	'mp': ' Mana',
	'mp5': ' Mana per 5',
	'mp5%': '% Mana per 5',
	'mpen': ' Magic Penetration',
	'mpen%': '% Magic Penetration',
	'mr': ' Magic Resistance',
	'ms': ' Move Speed',
	'ms%': '% Move Speed',
	'range': ' Range',
	'shield': ' Shield',
	'spell_vamp': '% Spell Vamp',
	'tenacity': '% Tenacity',
};
export const ORDERBY = [
	{ "label": "A-Z", "value": "alpha" },
	{ "label": "Gold", "value": "gold" }
];
export const ORDERMODES = [
	{ "label": "Ascending", "value": "asc" },
	{ "label": "Descending", "value": "desc" }
];
export const LEVELS = [
	{ "label": "Level 1", "value": 1 },
	{ "label": "Level 2", "value": 2 },
	{ "label": "Level 3", "value": 3 },
	{ "label": "Level 4", "value": 4 },
	{ "label": "Level 5", "value": 5 },
	{ "label": "Level 6", "value": 6 },
	{ "label": "Level 7", "value": 7 },
	{ "label": "Level 8", "value": 8 },
	{ "label": "Level 9", "value": 9 },
	{ "label": "Level 10", "value": 10 },
	{ "label": "Level 11", "value": 11 },
	{ "label": "Level 12", "value": 12 },
	{ "label": "Level 13", "value": 13 },
	{ "label": "Level 14", "value": 14 },
	{ "label": "Level 15", "value": 15 },
	{ "label": "Level 16", "value": 16 },
	{ "label": "Level 17", "value": 17 },
	{ "label": "Level 18", "value": 18 },
];
export const TIMES = [
	{ "label": "1 min", "value": 1 },
	{ "label": "10 mins", "value": 10 },
	{ "label": "20 mins", "value": 20 },
	{ "label": "30 mins", "value": 30 },
	{ "label": "40 mins", "value": 40 },
	{ "label": "50 mins", "value": 50 },
	{ "label": "60 mins", "value": 60 },
	{ "label": "70 mins", "value": 70 },
	{ "label": "80 mins", "value": 80 },
	{ "label": "90 mins", "value": 90 },
	{ "label": "100 mins", "value": 100 },
];