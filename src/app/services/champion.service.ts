import { Injectable } from '@angular/core';
import { Champion } from "../models/champion";
import { Item } from "../models/item";
@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor() { }
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
	/**
	 * Method that applies the stats growth formula since per level stats do not grow linearly
	 * @param  {number} growthStatistic the growth statistic per level
	 * @param  {number} championLevel the champion level
	 * @param  {number} base? the base value of the stat
	 * @returns number
	 */
	statsGrowthFormula(growthStatistic: number, championLevel: number, base?: number
	): number {
		var value =
			growthStatistic *
			(championLevel - 1) *
			(0.7025 + 0.0175 * (championLevel - 1));
		if (base) {
			value = this.formatNPlaces(base + value, 3);
		}
		return value;
	}
	/**
	 * Method that adjusts the base stats given the champion stats
	 * @param  {Champion} selectedChampion the champion to adjust stats by
	 * @param  {number} currentLevel the current level to adjust stats by
	 * @returns void
	 */
	adjustBaseStats(selectedChampion: Champion, currentLevel: number): void {
		selectedChampion.stats.hp = this.statsGrowthFormula(selectedChampion.stats.hp_lvl, currentLevel, selectedChampion.stats.hp_base);
		selectedChampion.stats.hp5 = this.statsGrowthFormula(selectedChampion.stats.hp5_lvl, currentLevel, selectedChampion.stats.hp5_base);
		selectedChampion.stats.mp = selectedChampion.stats.mp_base ? this.statsGrowthFormula(selectedChampion.stats.mp_lvl, currentLevel, selectedChampion.stats.mp_base) : 0;
		selectedChampion.stats.mp5 = selectedChampion.stats.mp5_base ? this.statsGrowthFormula(selectedChampion.stats.mp5_lvl, currentLevel, selectedChampion.stats.mp5_base) : 0;
		selectedChampion.stats.ad = selectedChampion.stats.ad_base ? this.statsGrowthFormula(selectedChampion.stats.ad_lvl, currentLevel, selectedChampion.stats.ad_base) : 0;
		selectedChampion.stats.ap = selectedChampion.stats.ap_base ? selectedChampion.stats.ap_base : 0;
		selectedChampion.stats.arm = selectedChampion.stats.arm_base ? this.statsGrowthFormula(selectedChampion.stats.arm_lvl, currentLevel, selectedChampion.stats.arm_base) : 0;
		selectedChampion.stats.mr = selectedChampion.stats.mr_base ? this.statsGrowthFormula(selectedChampion.stats.mr_lvl, currentLevel, selectedChampion.stats.mr_base) : 0;
		selectedChampion.stats.as = selectedChampion.stats.as_base ? this.formatNPlaces(selectedChampion.stats.as_base * (1 + this.statsGrowthFormula(selectedChampion.stats.as_lvl, currentLevel)), 3) : 0;
		selectedChampion.stats.cdr = selectedChampion.stats.cdr_base ? selectedChampion.stats.cdr_base : 0;
		selectedChampion.stats.range = selectedChampion.stats.range_base ? selectedChampion.stats.range_base : 0;
		selectedChampion.stats.ms = selectedChampion.stats.ms_base ? selectedChampion.stats.ms_base : 0;
		selectedChampion.stats.crit = selectedChampion.stats.crit_base ? 100 - selectedChampion.stats.crit_base : 0;
		return;
	}
	/**
	 * Method that calls the adjustBaseStats method and adjustItemStats method
	 * @param  {Champion} selectedChampion the champion to adjust stats by
	 * @param  {number} currentLevel the current level to adjust stats by
	 * @param  {[Item*6]} selectedItems? the selected items/inventory (tuple of 6 items)
	 * @param  {Item} selectedElixir? adds an elixir to the selectedItems
	 * @returns void
	 */
	adjustBaseAndItemStats(selectedChampion: Champion, currentLevel: number, selectedItems?: [Item, Item, Item, Item, Item, Item], selectedElixir?: Item): void {
		this.adjustBaseStats(selectedChampion, currentLevel);
		if (selectedItems) {
			let selectedItemsIncludingElixir = JSON.parse(JSON.stringify(selectedItems));
			if (selectedElixir) {
				selectedItemsIncludingElixir.push(selectedElixir);
			}
			if (selectedItemsIncludingElixir) {
				this.addItemStats(selectedChampion, selectedItemsIncludingElixir);
			}
		}
		return;

	}
	/**
	 * Method that adds the items stats to the champion stats after adjustBaseStats is applied
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {[Item*6]} selectedItems the selected items/inventory (tuple of 6 items) to adjust by
	 * @returns void
	 */
	addItemStats(champion: Champion, selectedItems: [Item, Item, Item, Item, Item, Item]): void {
		//shared items are in order of which they are in the inventory
		//if i buy steraks and maw => steraks mult applies
		// console.log(selectedItems);
		let totalStatsFromItems = {};
		let multKeyValues = {
			"ad_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }],
			"ap_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }],
			"hp_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }]
		};

		let sharedItemCounts = {};
		for (let itemIndex in selectedItems) {
			let selectedItem = selectedItems[itemIndex];
			if (selectedItem.shared_item in sharedItemCounts === false) {
				sharedItemCounts[selectedItem.shared_item] = 1;
			} else {
				sharedItemCounts[selectedItem.shared_item] += 1;
			}
			for (let itemStatName in selectedItem) {
				let itemStatVal = selectedItem[itemStatName];
				if (itemStatVal != 0 && typeof (itemStatVal) !== 'string') {
					if (itemStatName.includes("mult") && sharedItemCounts[selectedItem.shared_item] <= 1) {
						if (itemStatVal["type"] == "total") {
							multKeyValues[itemStatName][0]["value"] += (itemStatVal["value"] / 100);
						} else if (itemStatVal["type"] == "bonus") {
							multKeyValues[itemStatName][1]["value"] += (itemStatVal["value"] / 100);
						}
					} else {
						if (itemStatName in totalStatsFromItems) {
							totalStatsFromItems[itemStatName] += itemStatVal;
						} else {
							totalStatsFromItems[itemStatName] = itemStatVal;
						}
					}
				}
			}
		}
		for (let key in totalStatsFromItems) {
			if (champion.resource.toUpperCase() != "MANA" && key.includes("mp")) {
				totalStatsFromItems[key] = 0;
			}
		}
		let hasTotalMultiplier: boolean = false;
		for (let key in multKeyValues) {
			let additionalMultipliers = multKeyValues[key];
			for (let additionalMultiplierObj in additionalMultipliers) {
				let additionalMultiplier = additionalMultipliers[additionalMultiplierObj];
				let additionalMultiplierType = additionalMultiplier["type"];
				let additionalMultiplierVal = additionalMultiplier["value"];
				let statKey = key.replace("_mult", "");
				if (additionalMultiplierType == "bonus" && additionalMultiplierVal != 0) {
					totalStatsFromItems[statKey] *= (1 + additionalMultiplier["value"]);
				}
				if (additionalMultiplierType == "total") {
					hasTotalMultiplier = true;
				}
			}
		}
		// are the total multipliers added including the bonus stats or just the base+item
		// console.log(champion.stats, totalStatsFromItems, multKeyValues);
		for (let key in totalStatsFromItems) {
			champion.stats[key] += totalStatsFromItems[key];
		}
		if (hasTotalMultiplier) {
			this.applyTotalMultipliers(champion, multKeyValues);
		}
		return;
	}
	/**
	 * Method that applies the total multiplers for ad, ap, and hp after items have been added
	 * @param  {Champion} champion champion to apply total multipliers towards
	 * @param  {any} multKeyValues multipliers for ad, ap, and hp with their type and value
	 * @returns void
	 */
	applyTotalMultipliers(champion: Champion, multKeyValues: any): void {
		for (let key in multKeyValues) {
			let additionalMultipliers = multKeyValues[key];
			for (let additionalMultiplierObj in additionalMultipliers) {
				let additionalMultiplier = additionalMultipliers[additionalMultiplierObj];
				let additionalMultiplierType = additionalMultiplier["type"];
				let additionalMultiplierVal = additionalMultiplier["value"];
				let statKey = key.replace("_mult", "");
				if (additionalMultiplierType == "total" && additionalMultiplierVal != 0) {
					champion.stats[statKey] *= (1 + additionalMultiplier["value"]);
				}
			}
		}
		return;
	}
}
