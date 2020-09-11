interface DamageTypes {
	physicalDamage: string | number;
	magicDamage: string | number;
	trueDamage: string | number;
}

export class CalculationResults {
	skill_i: DamageTypes;
	skill_q: DamageTypes;
	skill_w: DamageTypes;
	skill_e: DamageTypes;
	skill_r: DamageTypes;
	constructor() {
		this.skill_i = { "physicalDamage": "", "magicDamage": "", "trueDamage": "" };
		this.skill_q = { "physicalDamage": "", "magicDamage": "", "trueDamage": "" };
		this.skill_w = { "physicalDamage": "", "magicDamage": "", "trueDamage": "" };
		this.skill_e = { "physicalDamage": "", "magicDamage": "", "trueDamage": "" };
		this.skill_r = { "physicalDamage": "", "magicDamage": "", "trueDamage": "" };
	}
}