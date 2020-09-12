interface DamageTypes {
	physicalDamage: string | number;
	magicDamage: string | number;
	trueDamage: string | number;
}

export class CalculationResults extends Object {
	private static _aggressiveType: string = "aggressiveType";
	private static _defensiveType: string = "defensiveType";
	private static _physicalDamage: string = "physicalDamage"; // split damage into physical, magical, and true to determine how to apply resistance stats
	private static _magicalDamage: string = "magicDamage";
	private static _trueDamage: string = "trueDamage";
	autos?: DamageTypes;
	skill_i: DamageTypes;
	skill_q: DamageTypes;
	skill_w: DamageTypes;
	skill_e: DamageTypes;
	skill_r: DamageTypes;
	constructor(type: string = "aggressiveType") {
		super();
		if (type == CalculationResults._aggressiveType) {
			this.autos = { physicalDamage: 0, magicDamage: 0, trueDamage: 0 };
		}
		this.skill_i = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_q = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_w = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_e = { physicalDamage: "", magicDamage: "", trueDamage: "" };
		this.skill_r = { physicalDamage: "", magicDamage: "", trueDamage: "" };
	}
	static get aggressiveType() { return this._aggressiveType; }
	static get defensiveType() { return this._defensiveType; }
	static get physicalDamage() { return this._physicalDamage; };
	static get magicalDamage() { return this._magicalDamage; };
	static get trueDamage() { return this._trueDamage; };
}