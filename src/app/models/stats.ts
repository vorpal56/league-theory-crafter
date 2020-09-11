export interface ChampionStats {
	hp?: number;
	hp_base?: number;
	hp_lvl?: number;
	hp5?: number;
	hp5_base?: number;
	hp5_lvl?: number;

	mp?: number;
	mp_base?: number;
	mp_lvl?: number;
	mp5?: number;
	mp5_base?: number;
	mp5_lvl?: number;

	ad?: number;
	ad_base?: number;
	ad_lvl?: number;

	ap?: number;
	ap_base?: number;

	arm?: number;
	arm_base?: number;
	arm_lvl?: number;

	mr?: number;
	mr_base?: number;
	mr_lvl?: number;

	as?: number;
	as_base?: number;
	as_lvl?: number;

	cdr?: number;
	cdr_base?: number;
	cdr_lvl?: number;

	range?: number;
	range_lvl?: number;

	ms?: number;
	ms_base?: number;
	ms_lvl?: number;

	crit?: number;
	crit_base?: number;
	crit_lvl?: number;
	critdmg?: number,

	ls?: number,
	spell_vamp?: number,

	leth?: number,
	'apen%'?: number,

	mpen?: number,
	'mpen%'?: number,

	tenacity?: number,
	heal_shield?: number;
}