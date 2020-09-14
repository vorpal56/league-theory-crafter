import { Injectable } from '@angular/core';

import { Champion } from '../models/champion';
import { Item } from '../models/item';
import { RuneModifiers, Runes } from '../models/rune';
import { TargetDetails } from '../models/target';

import { EMPTY_ITEM } from '../../../server/data/items';
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
	 * @param  {Champion} champion the champion to apply the calculations to
	 * @param  {number} currentLevel the current level selected
	 * @param  {number} currentTime the current time in game for time dependant runes and items
	 * @param  {[Item*6]} selectedItems the selected items to calculate stats
	 * @param  {Item} selectedElixir the selected elixir to calculate stats
	 * @param  {any} selectedRunes the selected runes to calculate stats
	 * @param  {RuneModifiers} runeModifiers boolean to stack all the rune choices or not (eg. legend runes) and dark harvest soul count
	 */
	applyAllComponentChanges(champion: Champion, currentTime: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, selectedRunes: Runes, targetDetails: TargetDetails) {

		this.statsService.adjustBaseStats(champion);
		let [totalStatsFromItems, multKeyValues, itemAdditions] = this.itemsService.calculateItemStats(champion, selectedItems, selectedElixir);

		champion.itemStats = totalStatsFromItems;
		this.itemsService.addItemStats(champion, multKeyValues);
		let totalStatsFromRunes = this.runesService.calculateRuneStats(champion, selectedRunes, currentTime, selectedElixir, targetDetails);
		champion.runeStats = totalStatsFromRunes;

		this.runesService.addRuneStats(champion);
		this.statsService.adjustAttackSpeed(champion, selectedRunes.modifiers.exceedsAttackSpeedLimit);
		this.preDamageCalculations(champion, itemAdditions, selectedRunes.modifiers);
		this.damageCalculationsService.totalChampionDamageCalculation(champion, currentTime, targetDetails, selectedRunes.modifiers);
		this.addPostDamageCalculationsBonusStats(champion);

		// maybe its good to share the calculated data straight into the champion obj to limit the number of input parameters
		return;
	}
	/**
	 * @param  {Champion} champion the champion to apply post calculations towards
	 * @param  {number} currentLevel the current level to apply post calculations of items or runes
	 * @param  {any} itemAdditions any additional items that are calculated post like tear items
	 * @param  {number} cdrCap cdr cap to limit the champions cdr if the cosmic insight option in runes is selected
	 */
	preDamageCalculations(champion: Champion, itemAdditions: any, runeModifiers: RuneModifiers) {
		if (champion.apiname.toLowerCase() == "yasuo") {
			champion.stats.crit *= 2;
		}
		if (itemAdditions.hexcoreItem && itemAdditions.hexcoreItem != EMPTY_ITEM) {
			champion.stats.ap += (itemAdditions.hexcoreItem.ap * (champion.currentLevel - 1));
			champion.stats.mp += (itemAdditions.hexcoreItem.mp * (champion.currentLevel - 1));
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
		champion.stats.cdr -= champion.stats.cdr > runeModifiers.cdrCap ? (champion.stats.cdr - runeModifiers.cdrCap) : 0;
		champion.stats.crit -= champion.stats.crit > 100 ? (champion.stats.crit - 100) : 0;
		return;
	}
	addPostDamageCalculationsBonusStats(champion: Champion) {
		for (let bonusAttributeKey in champion.otherSourcesStats) {
			let statVal = champion.otherSourcesStats[bonusAttributeKey];
			if (bonusAttributeKey == "flat_ms") {
				champion.stats.ms += statVal;
			} else if (bonusAttributeKey == "ms%") {
				// apply the bonus multiplier move speeds first before the flat movespeed bonuses (eg. aether wisp and mobility boots)
				champion.stats.ms += champion.stats.ms * (statVal / 100);
			} else if (bonusAttributeKey != "as") {
				champion.stats[bonusAttributeKey] += statVal;
			}
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
}
