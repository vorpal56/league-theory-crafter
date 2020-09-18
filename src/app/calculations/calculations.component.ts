import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options, LabelType, TranslateFunction } from '@m0t0r/ngx-slider';

import { Champion } from '../models/champion';
import { Runes } from '../models/rune';
import { TargetDetails } from '../models/target';
import { CalculationResults, DamageTypes } from '../models/calculations';

import { ChampionService } from '../services/champion.service';
import { DamageCalculationsService } from '../services/damage-calculations.service';
import { DAMAGE_TYPE_MAPPING, LEVELS, ROTATION_DURATION } from 'server/data/data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'calculations',
	templateUrl: './calculations.component.html',
	styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

	@Input('champion') champion: Champion;
	@Input('currentTime') currentTime: number;
	@Input('selectedRunes') selectedRunes: Runes;

	@Output('manualRefresh') manualRefresh = new EventEmitter<void>();
	@Output('targetDetails') targetDetailsEventEmitter = new EventEmitter<TargetDetails>();

	targetMin: number = 0;
	readonly targetMaxResist: number = 10000;
	targetCurrentHP: number = 300;
	readonly minTargetMaxHP: number = 400;
	readonly maxTargetMaxHP: number = 30000;
	targetMaxHP: number = this.minTargetMaxHP;
	targetMR: number = 30;
	targetArmor: number = 10;
	levels = LEVELS;
	targetLevel: number = this.levels[0].levelValue;

	applyItemSteroids: boolean = false;
	applyAbilitySteroids: boolean = false;
	formUsage: boolean = false;

	PHYSICAL_DAMAGE = DamageTypes.PHYSICAL_DAMAGE;
	MAGIC_DAMAGE = DamageTypes.MAGIC_DAMAGE;
	TRUE_DAMAGE = DamageTypes.TRUE_DAMAGE;
	AFTER = "After";
	BEFORE = "Before";

	translateTargetHP: TranslateFunction = (value: number, label: LabelType): string => {
		switch (label) {
			case LabelType.Floor: return 'Min HP: ' + value;
			case LabelType.Ceil: return 'Max HP: ' + value;
			default: return 'Current HP: ' + value;
		}
	};

	targetHPOptions: Options = {
		floor: this.targetMin,
		ceil: this.targetMaxHP,
		translate: this.translateTargetHP
	};

	targetDetails: TargetDetails = new TargetDetails(
		this.targetMaxHP, this.targetCurrentHP, this.targetArmor, this.targetMR,
		this.applyItemSteroids, this.applyAbilitySteroids, this.formUsage
	);

	constructor(private championService: ChampionService, private damageCalculationsService: DamageCalculationsService) { }

	ngOnInit(): void { this.emitTargetDetails(); }

	updateMaxHP(): void {
		if (this.targetMaxHP >= this.minTargetMaxHP && this.targetMaxHP <= this.maxTargetMaxHP) {
			let targetHPOptions: Options = {
				floor: this.targetMin,
				ceil: this.targetMaxHP,
				translate: this.translateTargetHP
			};
			this.targetHPOptions = targetHPOptions;
			this.manualRefresh.emit();
			this.targetDetails.maxHP = this.targetMaxHP;
			this.emitTargetDetails();
			this.updateCalculation();
		}
		return;
	}
	updateCurrentHP() {
		this.targetDetails.currentHP = this.targetCurrentHP;
		this.updateCalculation();
	}
	updateArmor() {
		if (this.targetArmor >= this.targetMin && this.targetArmor <= this.targetMaxResist) {
			this.targetDetails.armor = this.targetArmor;
			this.updateCalculation();
		}
	}
	updateMR() {
		if (this.targetMR >= this.targetMin && this.targetMR <= this.targetMaxResist) {
			this.targetDetails.mr = this.targetMR;
			this.updateCalculation();
		}
	}
	itemSteroidsChange(appliedItemSteroids: boolean) {
		this.targetDetails.applyItemSteroids = appliedItemSteroids;
		this.emitTargetDetails();
		this.updateCalculation();
	}
	abilitySteroidsChange(abilitySteroids: boolean) {
		this.targetDetails.applyAbilitySteroids = abilitySteroids;
		this.emitTargetDetails();
		this.updateCalculation();
	}
	formUsageChange(formUsage: boolean) {
		this.targetDetails.applyFormUsage = formUsage;
		this.emitTargetDetails();
		this.updateCalculation();
	}
	updateCalculation() {
		this.damageCalculationsService.totalChampionDamageCalculation(this.champion, this.currentTime, this.targetDetails, this.selectedRunes);
	}
	emitTargetDetails() {
		this.targetDetailsEventEmitter.emit(this.targetDetails);
	}
	boundError(value: number, min: number, max: number): boolean {
		return !this.championService.isBetween(value, min, max);
	}
	boundErrorMessage(min: number, max: number) {
		return this.championService.boundErrorMessage(min, max);
	}
	totalDPS(partialKeyName: string) {
		let total = 0;
		let damageTypes: DamageTypes = new DamageTypes();
		let keyName = `damage${partialKeyName}Resistances`;
		for (let damageFrom in this.champion[keyName]) {
			if (damageFrom.charAt(0) != "_") {
				for (let damageType in damageTypes) {
					if (damageType.charAt(0) != "_") {
						let damageVal = this.champion[keyName][damageFrom][damageType];
						total += damageVal;
					}
				}
			}
		}
		return total / ROTATION_DURATION;
	}
	damageValue(partialKeyName: string, damageType: string) {
		let total = 0;
		let keyName = `damage${partialKeyName}Resistances`;
		for (let damageFrom in this.champion[keyName]) {
			if (damageFrom.charAt(0) != "_") {
				let damageVal = this.champion[keyName][damageFrom][damageType];
				total += damageVal;
			}
		}
		return total;
	}
	damageTooltip(partialKeyName: string, damageType: string) {
		let expressionStringList = [DAMAGE_TYPE_MAPPING[damageType] + " Distribution<br>"];
		let keyName = `damage${partialKeyName}Resistances`;
		for (let damageFrom in this.champion[keyName]) {
			if (damageFrom.charAt(0) != "_") {
				let damageVal = this.championService.formatNPlaces(this.champion[keyName][damageFrom][damageType]);
				if (damageFrom == "autos") {
					expressionStringList.push("Auto Attacks: " + damageVal);
				} else if (damageFrom == "runeDamage") {
					expressionStringList.push("Rune Damage: " + damageVal);
				} else {
					expressionStringList.push(this.champion[damageFrom][1] + ": " + damageVal);
				}
			}
		}
		return expressionStringList.join("<br>");
	}
	damageReduction(damageType: string) {
		let total = 0;
		for (let damageFrom in this.champion.damageReductions) {
			if (damageFrom.charAt(0) != "_") {
				let damageReduced = this.champion.damageReductions[damageFrom][damageType] * 100;
				total += damageReduced;
			}
		}
		return total;
	}
	calculationTooltip(): string {
		return `Calculation is <b>only an approximation (not exact) of how much damage is dealt and distributed</b> (physical, magical, and true). It uses a full rotation (applying modifiers whenever certain abilities are leveled) over a duration of 3 seconds. Abilities that <b>do not impact damage are not included</b>. For example minion, monster, or non-champion damage, slows, stat restores, and so on.`;
	}
	targetTooltip(): string {
		let targetTooltip = `The calculation is dependant on the following attributes: <br>`;
		let itemsHelpString = this.itemSteroidsTooltip();
		let abilitiesHelpString = this.abilitySteroidsTooltip();
		let formHelpString = this.formBuffsTooltip();
		return [targetTooltip, itemsHelpString, abilitiesHelpString, formHelpString].join("<br>");
	}
	itemSteroidsTooltip(): string {
		return `<b>Item Steroids</b> provides bonuses to damage depending on item choices. These include:
		<ul class="numbered-tooltip">
			<li>Blade of the Ruined King (average)</li>
			<li>Muramana</li>
			<li>Guinsoo's Rageblade</li>
			<li>Black Cleaver</li>
			<li>Sheen/Lichbane/Trinity Force</li>
		</ul>
		`;
	}
	abilitySteroidsTooltip(): string {
		return `<b>Ability Steroids</b> are ones that provide damage bonuses if abilities are cast under certain circumstances. For example:
		<ul class="innate-tooltip pad-bottom">
			<li>Aatrox's Darkin Blade (hitting the center)</li>
			<li>Ahri's Charm, hitting all orbs of Fox Fire</li>
			<li>Nidalee's max range Javelin Toss and Prowl-Enhanced Cougar damage</li>
		</ul>
		This is not an extensive list as there are many potential bonuses.
		<br>
		`;
	}
	formBuffsTooltip(): string {
		return `<b>Include Forms</b> apply bonuses for champions that can transform. These champions include:
		<ul class="numbered-tooltip">
			<li>Elise (Human and Spider form)</li>
			<li>Jayce (Cannon and Hammer form)</li>
			<li>Kayn (default is Red/Rhaast form, selection uses Blue/Shadow Assassin form.)</li>
			<li>Nidalee (Human and Cougar form)</li>
			<li>Shyvana (default is Human form, selection uses Dragon form)</li>
		</ul>`;
	}
	// all damage calculations are floored not rounded (eg. nidalee 2 longswords, 81 ad, cougar q does )

	// there are a few things that I'd like to include in the calculation:
	// DONE 1. 2 separate sliders for resistances (armour and mr) -> switched to 2 input fields with min reqs
	// DONE 2. checkbox to apply ability and item steroids (external buffs including ardent, items including blade and muramana)
	// DONE 3. inputs for a targets max hp and current hp (either 2 input fields or a dual slider (ng5 slider) -> 1 left for current and right for max with ceil/floor inputs) -> switched to 1 slider with floor 0, ceil max, and range current
	// 4. maximum gold generated given current time (relative to perfect cs)
	// DONE 5. checkbox for champions that have different forms (considered as transformer) eg. jayce, nidalee, kayn (starts as red), shyvana, etc.
	// 6. how do I account for champion specific things? (attached yuumi, kayn transformations, aphelios guns, sylas stealing literally everyone's ult (rotations are different depending on the ult))
	// 7. and then the approximated DPS (which is probably going to be very off, but will do my best to figure it out)
	// 8. DONE split dps into physical, true, and magic damage?
	// 9. DONE potential damage reduced (eg. braum e, alistar r, etc.)
	// 10. DONE a question mark near the top indicating when choosing options, what it influences and provide examples
	// 11. healing per second? that's a stat that's not available in the practice tool
	// 12. DONE damage before and after resistances (show how much damage is reduced)

	// main thing is do we just assume a full rotation will be within 3 seconds? > some champions like akali have abilities that have a wait timer for the ult
	// can we also assume that dps is calculated by the total of 1 full rotation (1 of i, q, w, e, r and however many autos?)
	// maximize damage utilization meaning the order of champion abilities is significant eg. aatrox ult gives AD

}
