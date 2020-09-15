export class TargetDetails {
	private _targetMaxHP: number;
	private _targetCurrentHP: number;
	private _targetArmor: number;
	private _targetMR: number;
	private _itemSteroids: boolean; // part of the calculation component anyways so we'll attach it directly
	private _abilitySteroids: boolean;
	private _formUsage: boolean;
	constructor(maxHP: number, currentHP: number, armor: number, mr: number,
		applyItemSteroids: boolean, applyAbilitySteroids: boolean, formUsage: boolean) {
		this.maxHP = maxHP;
		this.currentHP = currentHP;
		this.armor = armor;
		this.mr = mr;
		this.applyItemSteroids = applyItemSteroids;
		this.applyAbilitySteroids = applyAbilitySteroids;
		this.applyFormUsage = formUsage;
	}
	get maxHP() { return this._targetMaxHP; }
	set maxHP(maxHP: number) { this._targetMaxHP = maxHP; }

	get currentHP() { return this._targetCurrentHP; }
	set currentHP(currentHP: number) { this._targetCurrentHP = currentHP; }

	get armor() { return this._targetArmor; }
	set armor(armor: number) { this._targetArmor = armor; }

	get mr() { return this._targetMR; }
	set mr(mr: number) { this._targetMR = mr; }

	get applyItemSteroids() { return this._itemSteroids; }
	set applyItemSteroids(itemSteroids: boolean) { this._itemSteroids = itemSteroids; }

	get applyAbilitySteroids() { return this._abilitySteroids; }
	set applyAbilitySteroids(abilitySteroids: boolean) { this._abilitySteroids = abilitySteroids; }

	get applyFormUsage() { return this._formUsage; }
	set applyFormUsage(formUsage: boolean) { this._formUsage = formUsage; }



}