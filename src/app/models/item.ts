export interface Item {
	'ad': number,
	'ad_mult': { 'type': string, 'value': number; },
	'allowed_to': { 'melee': boolean, 'ranged': boolean; },
	'ap': number,
	'ap_mult': { 'type': string, 'value': number; },
	'apen%': number,
	'apiname': string,
	'arm': number,
	'as': number,
	'att_m_proc': number,
	'att_phys_proc': number,
	'boots_ms': number,
	'cdr': number,
	'crit': number,
	'critdmg': number,
	'flat_ms': number,
	'gold': number,
	'heal_shield': number,
	'hp': number,
	'hp5': number,
	'hp_mult': { 'type': string, 'value': number; },
	'img': string,
	'leth': number,
	'ls': number,
	'magic_on_hit': number,
	'modes': string,
	'mp': number,
	'mp5': number,
	'mpen': number,
	'mpen%': number,
	'mr': number,
	'ms%': number,
	'name': string,
	'phys_on_hit': number,
	'shared_item'?: string,
	'shield': number,
	'spell_m_proc': number,
	'spell_vamp': number,
	'tags': string,
	'tenacity': number;
}