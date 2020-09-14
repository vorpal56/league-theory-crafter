import { CalculationResults } from './calculations';

export class TargetDetails {
	private _targetMaxHP: number;
	private _targetCurrentHP: number;
	private _targetArmor: number;
	private _targetMR: number;
	private _itemSteroids: boolean; // part of the calculation component anyways so we'll attach it directly
	private _abilitySteroids: boolean;
	private _formUsage: boolean;
	private _damageBeforeResistances: CalculationResults;
	private _damageAfterResistances: CalculationResults;
	private _damageReductionResults: CalculationResults;
	constructor(maxHP: number, currentHP: number, armor: number, mr: number,
		applyItemSteroids: boolean, applyAbilitySteroids: boolean, formUsage: boolean) {
		this.maxHP = maxHP;
		this.currentHP = currentHP;
		this.armor = armor;
		this.mr = mr;
		this.applyItemSteroids = applyItemSteroids;
		this.applyAbilitySteroids = applyAbilitySteroids;
		this.applyFormUsage = formUsage;
		// this.damageBeforeResistances = new CalculationResults();
		// this.damageReductionResults = new CalculationResults(CalculationResults.DEFENSIVE_TYPE);
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

	get damageBeforeResistances() { return this._damageBeforeResistances; }
	set damageBeforeResistances(damageBeforeResistances: CalculationResults) { this._damageBeforeResistances = damageBeforeResistances; }
	get damageAfterResistances() { return this._damageAfterResistances; }
	set damageAfterResistances(damageAfterResistances: CalculationResults) { this._damageAfterResistances = damageAfterResistances; }

	get damageReductionResults() { return this._damageReductionResults; }
	set damageReductionResults(damageReductionResults: CalculationResults) { this._damageReductionResults = damageReductionResults; }

}