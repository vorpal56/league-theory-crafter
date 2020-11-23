export interface Item {
	'ad_mult'?: { 'type': string, 'value': number; },
	'allowed_to': { 'melee': boolean, 'ranged': boolean; },
	'ap_mult'?: { 'type': string, 'value': number, },
	'apiname': string,
	'gold': number,
	'hp_mult'?: { 'type': string, 'value': number; },
	'id': string,
	'img': string,
	'index': number,
	'item_group'?: string,
	'name': string,
	'passives'?: any,
	'rank'?: string,
	'search_types': string,
	'shared_item'?: any,
	'shared_passives'?: any,
	'stats': {
		'ability_haste'?: number,
		'ad'?: number,
		'ap'?: number,
		'apen%'?: number,
		'arm'?: number,
		'as'?: number,
		'att_m_proc'?: number,
		'att_phys_proc'?: number,
		'boots_ms'?: number,
		'cdr'?: number,
		'crit'?: number,
		'critdmg'?: number,
		'heal_shield'?: number,
		'hp'?: number,
		'hp5'?: number,
		'hp5%'?: number,
		'leth'?: number,
		'ls'?: number,
		'magic_on_hit'?: number,
		'mp'?: number,
		'mp5'?: number,
		'mp5%'?: number,
		'mpen'?: number,
		'mpen%'?: number,
		'mr'?: number,
		'ms'?: number,
		'ms%'?: number,
		'phys_on_hit'?: number,
		'shield'?: number,
		'spell_m_proc'?: any, // type string is not assignable to number?
		'spell_vamp'?: number,
		'tenacity'?: number,
	};
	'stacked'?: boolean,
	'stackable'?: any,
	'tags': string,
	'tooltip'?: string,
	'visible': boolean,
}

export const EMPTY_ITEM: Item = {
	'allowed_to': { 'melee': true, 'ranged': true },
	'apiname': 'empty',
	'gold': 0,
	'id': '0000',
	'img': '',
	'index': 0,
	'name': 'Empty',
	'rank': '',
	'search_types': '',
	'shared_item': null,
	'shared_passives': [],
	'stackable': false,
	'stacked': false,
	'stats': {
		'ability_haste': 0,
		'ad': 0,
		'ap': 0,
		'apen%': 0,
		'arm': 0,
		'as': 0,
		'att_m_proc': 0,
		'att_phys_proc': 0,
		'boots_ms': 0,
		'cdr': 0,
		'crit': 0,
		'critdmg': 0,
		'heal_shield': 0,
		'hp': 0,
		'hp5': 0,
		'hp5%': 0,
		'leth': 0,
		'ls': 0,
		'magic_on_hit': 0,
		'mp': 0,
		'mp5': 0,
		'mp5%': 0,
		'mpen': 0,
		'mpen%': 0,
		'mr': 0,
		'ms': 0,
		'ms%': 0,
		'phys_on_hit': 0,
		'shield': 0,
		'spell_m_proc': 0, // type string is not assignable to 0
		'spell_vamp': 0,
		'tenacity': 0,
	},
	'tags': '',
	'visible': true,
};

export interface ItemRestrictions {
	"hasGoldOrJg": boolean,
	"hasBoots": boolean,
	"hasTear": boolean,
	"masterworkItems": [Item, Item],
}