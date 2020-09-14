import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options, LabelType, TranslateFunction } from 'ng5-slider';

import { Champion } from '../models/champion';
import { Runes } from '../models/rune';
import { TargetDetails } from '../models/target';

import { ChampionService } from '../services/champion.service';
import { DamageCalculationsService } from '../services/damage-calculations.service';

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
	targetCurrentHP: number = 300;
	minTargetMaxHP: number = 400;
	targetMaxHP: number = this.minTargetMaxHP;
	targetMR: number = 30;
	targetArmor: number = 10;

	applyItemSteroids: boolean = false;
	applyAbilitySteroids: boolean = false;
	formUsage: boolean = false;

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

	setTargetMaxHP(): void {
		if (this.targetMaxHP >= this.minTargetMaxHP) {
			let targetHPOptions: Options = {
				floor: this.targetMin,
				ceil: this.targetMaxHP,
				translate: this.translateTargetHP
			};
			this.targetHPOptions = targetHPOptions;
			this.manualRefresh.emit();
			this.targetDetails.maxHP = this.targetMaxHP;
			this.emitTargetDetails();
			this.damageCalculationsService.totalChampionDamageCalculation(this.champion, this.currentTime, this.targetDetails, this.selectedRunes.modifiers);
		}
		return;
	}
	itemSteroidsChange(appliedItemSteroids: boolean) {
		this.targetDetails.applyItemSteroids = appliedItemSteroids;
		this.emitTargetDetails();
		this.damageCalculationsService.totalChampionDamageCalculation(this.champion, this.currentTime, this.targetDetails, this.selectedRunes.modifiers);
	}
	abilitySteroidsChange(abilitySteroids: boolean) {
		this.targetDetails.applyAbilitySteroids = abilitySteroids;
		this.emitTargetDetails();
		this.damageCalculationsService.totalChampionDamageCalculation(this.champion, this.currentTime, this.targetDetails, this.selectedRunes.modifiers);
	}
	formUsageChange(formUsage: boolean) {
		this.targetDetails.applyFormUsage = formUsage;
		this.emitTargetDetails();
		this.damageCalculationsService.totalChampionDamageCalculation(this.champion, this.currentTime, this.targetDetails, this.selectedRunes.modifiers);
	}
	emitTargetDetails() {
		this.targetDetailsEventEmitter.emit(this.targetDetails);
	}
	calculationTooltip(): string {
		let calculationHelpString = `Calculation is <b>only an approximation (not exact)</b> of how much damage is dealt. It uses a full rotation in the best order with a duration of 3 seconds. Abilities that do not impact damage are not included. For example minion, monster, or non-champion damage, slows, stat restores, and so on. The calculation is dependant on the following attributes. <br>`;
		let itemsHelpString = this.itemSteroidsTooltip();
		let abilitiesHelpString = this.abilitySteroidsTooltip();
		let formHelpString = this.formBuffsTooltip();
		return [calculationHelpString, itemsHelpString, abilitiesHelpString, formHelpString].join("<br>");
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
	// 9. potential damage reduced (eg. braum e, alistar r, etc.)
	// 10. a question mark near the top indicating when choosing options, what it influences and provide examples
	// 11. healing per second? that's a stat that's not available in the practice tool
	// 12. damage before and after resistances (show how much damage is reduced)

	// main thing is do we just assume a full rotation will be within 3 seconds? > some champions like akali have abilities that have a wait timer for the ult
	// can we also assume that dps is calculated by the total of 1 full rotation (1 of i, q, w, e, r and however many autos?)
	// maximize damage utilization meaning the order of champion abilities is significant eg. aatrox ult gives AD

}
