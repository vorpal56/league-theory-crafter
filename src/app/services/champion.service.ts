import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { RunesService } from './runes.service';
import { StatsService } from './stats.service';
import { Item } from '../models/item';
import { Champion } from '../models/champion';
import { EMPTY_ITEM } from 'src/data/items';

@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor(private statsService: StatsService, private itemsService: ItemsService, private runesService: RunesService) { }

	applyAllComponentChanges(selectedChampion: Champion, currentLevel: number, currentTime: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, selectedRunes: any, stackAllRunes: boolean) {
		this.statsService.adjustBaseStats(selectedChampion, currentLevel);
		let [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions] = this.itemsService.calculateItemStats(selectedChampion, currentLevel, selectedItems, selectedElixir);
		this.itemsService.addItemStats(selectedChampion, totalStatsFromItems, multKeyValues);

		let [totalStatsFromRunes, cdrCap] = this.runesService.calculateRuneStats(selectedRunes, selectedChampion, currentLevel, totalStatsFromItems, adaptiveType, selectedElixir, stackAllRunes, currentTime);
		this.runesService.addRuneStats(selectedChampion, totalStatsFromRunes);

		this.statsService.adjustAttackSpeed(selectedChampion, currentLevel, totalStatsFromItems, totalStatsFromRunes);
		this.postCalculations(selectedChampion, currentLevel, itemAdditions, cdrCap);
	}
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
	}
}
