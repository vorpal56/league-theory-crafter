export class DamageTypes {
	physicalDamage: string | number;
	magicDamage: string | number;
	trueDamage: string | number;
	constructor() {
		this.physicalDamage = 0;
		this.magicDamage = 0;
		this.trueDamage = 0;

	}
}

export class CalculationResults extends Object {
	private static readonly _OFFENSIVE_TYPE: string = "offensive";
	private static readonly _DEFENSIVE_TYPE: string = "defensive";
	// split damage into physical, magical, and true to determine how to apply resistance stats
	private static readonly _PHYSICAL_DAMAGE: string = "physicalDamage";
	private static readonly _MAGIC_DAMAGE: string = "magicDamage";
	private static readonly _TRUE_DAMAGE: string = "trueDamage";
	autos?: DamageTypes;
	skill_i: DamageTypes;
	skill_q: DamageTypes;
	skill_w: DamageTypes;
	skill_e: DamageTypes;
	skill_r: DamageTypes;
	constructor(type: string = CalculationResults.OFFENSIVE_TYPE) {
		super();
		if (type == CalculationResults.OFFENSIVE_TYPE) {
			this.autos = new DamageTypes();
		}
		this.skill_i = new DamageTypes();
		this.skill_q = new DamageTypes();
		this.skill_w = new DamageTypes();
		this.skill_e = new DamageTypes();
		this.skill_r = new DamageTypes();
	}
	static get OFFENSIVE_TYPE() { return this._OFFENSIVE_TYPE; }
	static get DEFENSIVE_TYPE() { return this._DEFENSIVE_TYPE; }
	static get PHYSICAL_DAMAGE() { return this._PHYSICAL_DAMAGE; };
	static get MAGIC_DAMAGE() { return this._MAGIC_DAMAGE; };
	static get TRUE_DAMAGE() { return this._TRUE_DAMAGE; };
}