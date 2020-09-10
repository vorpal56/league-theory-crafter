import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { RunesService } from './runes.service';
import { StatsService } from './stats.service';
import { Item } from '../models/item';
import { Champion } from '../models/champion';
import { RuneModifiers } from '../models/rune';
import { EMPTY_ITEM } from '../../../server/data/items';
import { DamageCalculationsService } from './damage-calculations.service';

@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor(private statsService: StatsService, private itemsService: ItemsService, private runesService: RunesService, private damageCalculationsService: DamageCalculationsService) { }

	/**
	 * Method that performs all the calculations for changes in all components. This invokes calls to the stats, items and runes service
	 * @param  {Champion} selectedChampion the champion to apply the calculations to
	 * @param  {number} currentLevel the current level selected
	 * @param  {number} currentTime the current time in game for time dependant runes and items
	 * @param  {[Item*6]} selectedItems the selected items to calculate stats
	 * @param  {Item} selectedElixir the selected elixir to calculate stats
	 * @param  {any} selectedRunes the selected runes to calculate stats
	 * @param  {RuneModifiers} runeModifiers boolean to stack all the rune choices or not (eg. legend runes) and dark harvest soul count
	 */
	applyAllComponentChanges(champion: Champion, currentLevel: number, currentTime: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, selectedRunes: any, runeModifiers: RuneModifiers) {
		this.statsService.adjustBaseStats(champion, currentLevel);
		let [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions] = this.itemsService.calculateItemStats(champion, selectedItems, selectedElixir);

		champion.item_stats = totalStatsFromItems;
		this.itemsService.addItemStats(champion, multKeyValues);
		let [totalStatsFromRunes, cdrCap] = this.runesService.calculateRuneStats(selectedRunes, champion, currentLevel, adaptiveType, selectedElixir, runeModifiers, currentTime);
		champion.rune_stats = totalStatsFromRunes;

		this.runesService.addRuneStats(champion);
		this.statsService.adjustAttackSpeed(champion, currentLevel);
		this.postCalculations(champion, currentLevel, itemAdditions, cdrCap);

		// maybe its good to share the calculated data straight into the champion obj to limit the number of input parameters
		return;
	}
	/**
	 * @param  {Champion} champion the champion to apply post calculations towards
	 * @param  {number} currentLevel the current level to apply post calculations of items or runes
	 * @param  {any} itemAdditions any additional items that are calculated post like tear items
	 * @param  {number} cdrCap cdr cap to limit the champions cdr if the cosmic insight option in runes is selected
	 */
	postCalculations(champion: Champion, currentLevel: number, itemAdditions: any, cdrCap: number) {
		if (champion.apiname.toLowerCase() == "yasuo") {
			champion.stats.crit *= 2;
		}
		if (itemAdditions.hexcoreItem && itemAdditions.hexcoreItem != EMPTY_ITEM) {
			champion.stats.ap += (itemAdditions.hexcoreItem.ap * (currentLevel - 1));
			champion.stats.mp += (itemAdditions.hexcoreItem.mp * (currentLevel - 1));
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
		champion.stats.cdr -= champion.stats.cdr > cdrCap ? (champion.stats.cdr - cdrCap) : 0;
		champion.stats.crit -= champion.stats.crit > 100 ? (champion.stats.crit - 100) : 0;
		return;
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
