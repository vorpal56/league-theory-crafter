export interface Champion {
	apiname: string;
	name: string;
	img?: string;
	resource?: string;
	stats: {
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
		range_base?: number;
		range_lvl?: number;

		ms?: number;
		ms_base?: number;
		ms_lvl?: number;

		crit?: number;
		crit_base?: number;
		crit_lvl?: number;
	};
	skill_i?: any;
	skill_q?: any;
	skill_q_max_level?: number;
	skill_w?: any;
	skill_w_max_level?: number;
	skill_e?: any;
	skill_e_max_level?: number;
	skill_r?: any;
	skill_r_max_level?: number;
}
