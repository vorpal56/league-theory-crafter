import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { RunesService } from './runes.service';
import { StatsService } from './stats.service';
import { Item } from '../models/item';
import { Champion } from '../models/champion';
import { EMPTY_ITEM } from '../../../server/data/items';

@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor(private statsService: StatsService, private itemsService: ItemsService, private runesService: RunesService) { }

	/**
	 * Method that performs all the calculations for changes in all components. This invokes calls to the stats, items and runes service
	 * @param  {Champion} selectedChampion the champion to apply the calculations to
	 * @param  {number} currentLevel the current level selected
	 * @param  {number} currentTime the current time in game for time dependant runes and items
	 * @param  {[Item*6]} selectedItems the selected items to calculate stats
	 * @param  {Item} selectedElixir the selected elixir to calculate stats
	 * @param  {any} selectedRunes the selected runes to calculate stats
	 * @param  {boolean} stackAllRunes boolean to stack all the rune choices or not (eg. legend runes)
	 */
	applyAllComponentChanges(selectedChampion: Champion, currentLevel: number, currentTime: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, selectedRunes: any, stackAllRunes: boolean) {
		this.statsService.adjustBaseStats(selectedChampion, currentLevel);
		let [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions] = this.itemsService.calculateItemStats(selectedChampion, selectedItems, selectedElixir);
		this.itemsService.addItemStats(selectedChampion, totalStatsFromItems, multKeyValues);

		let [totalStatsFromRunes, cdrCap] = this.runesService.calculateRuneStats(selectedRunes, selectedChampion, currentLevel, totalStatsFromItems, adaptiveType, selectedElixir, stackAllRunes, currentTime);
		this.runesService.addRuneStats(selectedChampion, totalStatsFromRunes);

		this.statsService.adjustAttackSpeed(selectedChampion, currentLevel, totalStatsFromItems, totalStatsFromRunes);
		this.postCalculations(selectedChampion, currentLevel, itemAdditions, cdrCap);
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
		if (champion.apiname == "yasuo") {
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
	damageReduction(champion: Champion, statName: string): number {
		let championDef = champion.stats[statName];
		if (championDef >= 0) {
			return 100 / (100 + championDef);
		} else {
			return 2 - (100 / (100 - championDef));
		}
	}
	effectiveHealth(champion: Champion, statName: string): number {
		return (1 + champion.stats[statName] / 100) * champion.stats.hp;
	}
	magicPenetration(champion: Champion) {
		// Magic resistance reduction, flat. (Wit's End, Baron Debuff while fighting it) -> wits end passive was removed and baron is interesting... maybe we can add that as a target
		// Magic resistance reduction, percentage. (Insert Champion Abilities here) eg. trundle subjugate
		// Magic penetration, percentage. (Void Staff)
		// Magic penetration, flat. (Sorcerer's Shoes, Morellonomicon, oblivion orb)
	}
	armorPenetration(champion: Champion, targetLevel: number, targetArmour: number) {

		// 1. Armor reduction, flat (baron)
		// 2. Armor reduction, percentage (subjugate)
		// 3. Armor penetration, percentage
		// 4. Lethality

		let percentAPen = targetArmour * champion.stats["apen%"] / 100;
		// lethality scales depending on the targets level. the higher the targets level, the more vaulable lethality is
		let currentFlatArmorPenetration = champion.stats.leth * (0.6 + 0.4 * targetLevel / 18);
		let total = currentFlatArmorPenetration + percentAPen;
		// total = total > targetArmour ? targetArmour : total;
		return total;

	}
}
