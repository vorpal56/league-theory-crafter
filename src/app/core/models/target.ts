export class TargetDetails {
	private _targetLevel: number;
	private _targetMaxHP: number;
	private _targetCurrentHP: number;
	private _targetArmor: number;
	private _targetMR: number;
	private _itemSteroids: boolean; // part of the calculation component anyways so we'll attach it directly
	private _abilitySteroids: boolean;
	private _formUsage: boolean;
	private _abilityResistShred: object;
	private _targetArmorAfter: number;
	private _targetMRAfter: number;
	constructor(level: number, maxHP: number, currentHP: number, armor: number, mr: number,
		applyItemSteroids: boolean, applyAbilitySteroids: boolean, formUsage: boolean) {
		this.level = level;
		this.maxHP = maxHP;
		this.currentHP = currentHP;
		this.armor = armor;
		this.mr = mr;
		this.applyItemSteroids = applyItemSteroids;
		this.applyAbilitySteroids = applyAbilitySteroids;
		this.applyFormUsage = formUsage;
		this.abilityResistShred = {};
	}

	get level() { return this._targetLevel; }
	set level(level: number) { this._targetLevel = level; }

	get maxHP() { return this._targetMaxHP; }
	set maxHP(maxHP: number) { this._targetMaxHP = maxHP; }

	get currentHP() { return this._targetCurrentHP; }
	set currentHP(currentHP: number) { this._targetCurrentHP = currentHP; }

	get armor() { return this._targetArmor; }
	set armor(armor: number) { this._targetArmor = armor; }

	get armorAfter() { return this._targetArmorAfter; }
	set armorAfter(armor: number) { this._targetArmorAfter = armor; }

	get mr() { return this._targetMR; }
	set mr(mr: number) { this._targetMR = mr; }

	get mrAfter() { return this._targetMRAfter; }
	set mrAfter(mr: number) { this._targetMRAfter = mr; }

	get abilityResistShred() { return this._abilityResistShred; }
	set abilityResistShred(abilityResistShred: object) { this._abilityResistShred = abilityResistShred; }

	get applyItemSteroids() { return this._itemSteroids; }
	set applyItemSteroids(itemSteroids: boolean) { this._itemSteroids = itemSteroids; }

	get applyAbilitySteroids() { return this._abilitySteroids; }
	set applyAbilitySteroids(abilitySteroids: boolean) { this._abilitySteroids = abilitySteroids; }

	get applyFormUsage() { return this._formUsage; }
	set applyFormUsage(formUsage: boolean) { this._formUsage = formUsage; }
}