export interface DamageTypes {
	physicalDamage: string | number;
	magicDamage: string | number;
	trueDamage: string | number;
}

export class CalculationResults extends Object {
	private static readonly _AGRESSIVE: string = "aggressiveType";
	private static readonly _DEFENSIVE: string = "defensiveType";
	private static readonly _PHYSICAL_DAMAGE: string = "physicalDamage"; // split damage into physical, magical, and true to determine how to apply resistance stats
	private static readonly _MAGICAL_DAMAGE: string = "magicDamage";
	private static readonly _TRUE_DAMAGE: string = "trueDamage";
	autos?: DamageTypes;
	skill_i: DamageTypes;
	skill_q: DamageTypes;
	skill_w: DamageTypes;
	skill_e: DamageTypes;
	skill_r: DamageTypes;
	constructor(type: string = "aggressiveType") {
		super();
		if (type == CalculationResults._AGRESSIVE) {
			this.autos = { physicalDamage: 0, magicDamage: 0, trueDamage: 0 };
		}
		this.skill_i = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_q = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_w = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_e = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_r = { physicalDamage: "", magicDamage: "", trueDamage: "" };
	}
	static get AGGRESSIVE_TYPE() { return this._AGRESSIVE; }
	static get DEFENSIVE_TYPE() { return this._DEFENSIVE; }
	static get PHYSICAL_DAMAGE() { return this._PHYSICAL_DAMAGE; };
	static get MAGICAL_DAMAGE() { return this._MAGICAL_DAMAGE; };
	static get TRUE_DAMAGE() { return this._TRUE_DAMAGE; };
}