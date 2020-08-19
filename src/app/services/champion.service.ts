import { Injectable } from '@angular/core';
import { ItemsService } from './items.service';
import { RunesService } from './runes.service';
import { StatsService } from './stats.service';
import { Item } from '../models/item';
import { Champion } from '../models/champion';

@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor(private statsService: StatsService, private itemsService: ItemsService, private runesService: RunesService) { }

	applyAllComponentChanges(selectedChampion: Champion, currentLevel: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, selectedRunes: any, stackAllRunes: boolean) {
		this.statsService.adjustBaseStats(selectedChampion, currentLevel);
		let [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions] = this.itemsService.calculateItemStats(selectedChampion, currentLevel, selectedItems, selectedElixir);
		this.itemsService.addItemStats(selectedChampion, totalStatsFromItems, multKeyValues, adaptiveType);

		let [totalStatsFromRunes, cdrCap] = this.runesService.calculateRuneStats(selectedRunes, selectedChampion, currentLevel, totalStatsFromItems, adaptiveType, selectedElixir, stackAllRunes);
		this.runesService.addRuneStats(selectedChampion, totalStatsFromRunes);

		this.statsService.adjustAttackSpeed(selectedChampion, currentLevel, totalStatsFromItems, totalStatsFromRunes);

		this.postCalculations(selectedChampion, currentLevel, itemAdditions, cdrCap);
	}
	postCalculations(champion: Champion, currentLevel: number, itemAdditions: any, cdrCap) {
		if (champion.apiname == "yasuo") {
			champion.stats.crit *= 2;
		}
		if (itemAdditions.hexCoreItem) {
			champion.stats.ap += (itemAdditions.hexCoreItem.ap * (currentLevel - 1));
			champion.stats.mp += (itemAdditions.hexCoreItem.mp * (currentLevel - 1));
		}
		if (itemAdditions.aweItem && champion.resource.toLowerCase() == "mana") {
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
