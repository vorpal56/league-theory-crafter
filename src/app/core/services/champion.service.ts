import { Injectable } from '@angular/core';

import { SKILL_KEYS } from 'server/data/data';

import { Champion } from '../models/champion';
import { Item, EMPTY_ITEM } from '../models/item';
import { Runes, RuneModifiers } from '../models/rune';
import { TargetDetails } from '../models/target';

import { ItemsService } from './items.service';
import { RunesService } from './runes.service';
import { StatsService } from './stats.service';
import { DamageCalculationsService } from './damage-calculations.service';

@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor(private statsService: StatsService, private itemsService: ItemsService, private runesService: RunesService, private damageCalculationsService: DamageCalculationsService) { }

	/**
	 * Method that performs all the calculations for changes in all components. This invokes calls to the stats, items and runes service
	 * The order in which calls are made are significant in making sure that calculations are as accurate as possible (given the data models)
	 * @param  {Champion} champion the champion to apply the calculations to
	 * @param  {number} currentLevel the current level selected
	 * @param  {number} currentTime the current time in game for time dependant runes and items
	 * @param  {[Item*6]} selectedItems the selected items to calculate stats
	 * @param  {Item} selectedElixir the selected elixir to calculate stats
	 * @param  {any} selectedRunes the selected runes to calculate stats
	 * @param  {RuneModifiers} runeModifiers boolean to stack all the rune choices or not (eg. legend runes) and dark harvest soul count
	 */
	applyAllComponentChanges(champion: Champion, currentTime: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, selectedRunes: Runes, targetDetails: TargetDetails) {

		// First we adjust the stats of the champion without any items
		this.statsService.adjustBaseStats(champion);
		// Then we calculate the total stats from Runes, assign and add the stats gained from Runes to the champion
		let totalStatsFromRunes = this.runesService.calculateRuneStats(champion, selectedRunes, currentTime, selectedElixir, targetDetails);
		champion.runeStats = totalStatsFromRunes;
		this.runesService.addRuneStats(champion);

		// Second we calculate the item stats. Multipliers like Rabadon's are applied on total after Rune stats have been applied
		let [totalStatsFromItems, itemAdditions] = this.itemsService.calculateItemStats(champion, selectedItems, selectedElixir);
		// Then we assign and add the stats gained from items to the champion
		champion.itemStats = totalStatsFromItems;
		this.itemsService.addItemStats(champion);

		// Third we readjust Attack Speed since Items give Attack Speed which is not in a linear fashion. This is also dependant on Rune choices like Hail of Blades and Lethal Tempo which breaks the Attack Speed limit
		this.statsService.adjustAttackSpeed(champion, selectedRunes.modifiers.exceedsAttackSpeedLimit);

		// Fourth take away/apply some additional stats from Items like Awe Items, Yasuo crit passive, and cap crit at 100
		this.preDamageCalculations(champion, itemAdditions, selectedRunes.modifiers);

		// Finally calculate the potential damage outputs from the champion under certain parameters
		this.damageCalculationsService.totalChampionDamageCalculation(champion, currentTime, targetDetails, selectedRunes);
		return;
	}
	/**
	 * @param  {Champion} champion the champion to apply post calculations towards
	 * @param  {number} currentLevel the current level to apply post calculations of items or runes
	 * @param  {any} itemAdditions any additional items that are calculated post like tear items
	 * @param  {RuneModifiers} runeModifiers rune modifiers that are applied like dark harvest stack, cosmic insight, etc.
	 */
	preDamageCalculations(champion: Champion, itemAdditions: any, runeModifiers: RuneModifiers) {
		if (champion.apiname.toLowerCase() == "yasuo") {
			champion.stats.crit *= 2;
		}
		if (itemAdditions.aweItem && itemAdditions.aweItem != EMPTY_ITEM && champion.resource.toLowerCase() == "mana") {
			if (itemAdditions.aweItem.apiname == "manamune" || itemAdditions.aweItem.apiname == "muramana") {
				champion.stats.ad += (champion.stats.mp * 0.02);
			} else if (itemAdditions.aweItem.apiname == "archangelsstaff") {
				champion.stats.ap += (champion.stats.mp * 0.01);
			} else if (itemAdditions.aweItem.apiname == "seraphsembrace") {
				champion.stats.ap += (champion.stats.mp * 0.03);
			}
		}
		champion.stats.crit -= champion.stats.crit > 100 ? (champion.stats.crit - 100) : 0;
		return;
	}
	resetAbilities(champion: Champion) {
		SKILL_KEYS.forEach((skillKey: string) => {
			champion[skillKey]["rank"] = 0;
			champion[skillKey]["canLevelUp"] = true;
			champion[skillKey]["canLevelDown"] = false;
		});
		if (this.hasUltLevel1(champion)) {
			champion[SKILL_KEYS[4]]["rank"] = 1;
		} else if (this.championIsAphelios(champion)) {
			champion[SKILL_KEYS[4]]["rank"] = this.maxUltPoints(champion);
		}
		champion.totalAbilityRanks = 0;
		return;
	}
	maxUltPoints(champion: Champion): number {
		let maxPoints = champion["skill_r"]["maxrank"];
		let apiname = champion.apiname.toLowerCase();
		if (apiname != "udyr") {
			if (champion.currentLevel < 6) { return maxPoints - 3; }
			else if (champion.currentLevel < 11) { return maxPoints - 2; }
			else if (champion.currentLevel < 16) { return maxPoints - 1; }
			else { return maxPoints; }
		} else {
			return maxPoints;
		}
	}
	hasUltLevel1(champion: Champion): boolean {
		let apiname = champion.apiname.toLowerCase();
		if (apiname == "elise" || apiname == "jayce" || apiname == "karma" || apiname == "nidalee") {
			return true;
		}
		return false;
	}
	championIsTransformer(champion: Champion): boolean {
		let apiname = champion.apiname.toLowerCase();
		if (apiname == "elise" || apiname == "jayce" || apiname == "kayn" || apiname == "nidalee" || apiname == "shyvana") {
			return true;
		}
		return false;
	}
	championIsAphelios(champion: Champion): boolean {
		return champion.apiname.toLowerCase() == "aphelios";
	}
	/**
	 * Method that formats the number to n places
	 * Might not be as useful with DecimalPipe when interpolating
	 * @param  {number} num the number to format
	 * @param  {number} n? the number of places to format to
	 * @returns number
	 */
	formatNPlaces(num: number, n?: number): number {
		let exponent: number = n ? 10 ** n : 100;
		var value = Number(
			Math.round((num + Number.EPSILON) * exponent) /
			Number(exponent.toFixed(n))
		);
		return value;
	}
	isBetween(value: number, min: number, max: number): boolean {
		return value != null && value >= min && value <= max;
	}
	boundErrorMessage(min: number, max: number) {
		return `Between [${min}, ${max}]`;
	}
}
