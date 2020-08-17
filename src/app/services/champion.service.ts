import { Injectable } from '@angular/core';
import { Champion } from "../models/champion";
import { Item } from "../models/item";
import { EMPTY_ITEM } from '../items';
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
	statsGrowthFormula(growthStatistic: number, championLevel: number, base?: number): number {
		var value =
			growthStatistic *
			(championLevel - 1) *
			(0.7025 + 0.0175 * (championLevel - 1));
		if (base) {
			value = this.formatNPlaces(base + value, 3);
		}
		return value;
	}
	damageReduction(champion: Champion, statName: string) {
		let championDef = champion.stats[statName];
		if (championDef >= 0) {
			return 100 / (100 + championDef);
		} else {
			return 2 - (100 / (100 - championDef));
		}
	}
	effectiveHealth(champion: Champion, statName: string) {
		return (1 + champion.stats[statName] / 100) * champion.stats.hp;
	}
	magicPenetration(champion: Champion) {
		// Magic resistance reduction, flat. (Wit's End, Baron Debuff while fighting it) -> wits end passive was removed and baron is interesting... maybe we can add that as a target
		// Magic resistance reduction, percentage. (Insert Champion Abilities here) eg. trundle subjugate
		// Magic penetration, percentage. (Void Staff)
		// Magic penetration, flat. (Sorcerer's Shoes, Morellonomicon, oblivion orb)
	}
	gatheringStormRune(adaptiveType: string, currentTime: number) {
		let x = 1 + 1 * currentTime;
		return adaptiveType == "ad" ? 4.8 * x * (x - 1) * 0.5 : 8 * x * (x - 1) * 0.5;
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
		selectedChampion.stats.as = selectedChampion.stats.as_base ? selectedChampion.stats.as_base * (1 + this.statsGrowthFormula(selectedChampion.stats.as_lvl, currentLevel) / 100) : 0;
		selectedChampion.stats.cdr = selectedChampion.stats.cdr_base ? selectedChampion.stats.cdr_base : 0;
		selectedChampion.stats.ms = selectedChampion.stats.ms_base ? selectedChampion.stats.ms_base : 0;
		selectedChampion.stats.crit = selectedChampion.stats.crit_base ? 100 - selectedChampion.stats.crit_base : 0;
		selectedChampion.stats.critdmg = 0;
		selectedChampion.stats.ls = 0;
		selectedChampion.stats.spell_vamp = 0;
		selectedChampion.stats.apen = 0;
		selectedChampion.stats["apen%"] = 0;
		selectedChampion.stats.mpen = 0;
		selectedChampion.stats["mpen%"] = 0;
		selectedChampion.stats.tenacity = 0;
		selectedChampion.stats.heal_shield = 0;
		if (selectedChampion.apiname == "tristana") {
			selectedChampion.stats.range = 525 + 8 * (currentLevel - 1);
		}
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
	adjustBaseAndItemStats(selectedChampion: Champion, currentLevel: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, currentTime?: number): void {
		this.adjustBaseStats(selectedChampion, currentLevel);
		if (!this.allSelectedItemsIsEmpty(selectedItems, selectedElixir)) {
			if (selectedItems != undefined || selectedItems != null) {
				let selectedItemsIncludingElixir = JSON.parse(JSON.stringify(selectedItems));
				if (selectedElixir != EMPTY_ITEM) {
					selectedItemsIncludingElixir.push(selectedElixir);
				}
				this.addItemStats(selectedChampion, selectedItemsIncludingElixir, currentLevel);
			}
		}
		return;

	}
	/**
	 * Method that adds the items stats to the champion stats after adjustBaseStats is applied
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {[Item*6]} selectedItems the selected items/inventory (tuple of 6 items) to adjust by
	 * @returns any
	 */
	addItemStats(champion: Champion, selectedItems: [Item, Item, Item, Item, Item, Item], currentLevel: number, currentTime?: number): any {
		//shared items are in order of which they are in the inventory
		//if i buy steraks and maw => steraks mult applies
		// console.log(selectedItems);
		let totalStatsFromItems: object = {};
		let multKeyValues: object = {
			"ad_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }],
			"ap_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }],
			"hp_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }]
		};

		let sharedItemCounts: object = {};
		let aweItem: Item = EMPTY_ITEM;
		let hexCoreItem: Item = EMPTY_ITEM;
		for (let itemIndex in selectedItems) {
			let selectedItem = selectedItems[itemIndex];
			if (selectedItem.name != "Empty") {
				if (selectedItem.shared_item.name != null) {
					var passiveNames = selectedItem.shared_item.name.split(",");
					passiveNames.forEach((passiveName: string) => {
						if (passiveName in sharedItemCounts === false) {
							sharedItemCounts[passiveName] = 1;
						} else {
							sharedItemCounts[passiveName] += 1;
						}
						if (passiveName == "awe" && selectedItem.name.includes("tear") === false) {
							aweItem = selectedItem;
						}
						if (passiveName == "hexcore") {
							hexCoreItem = selectedItem;
						}
					});
				}
				for (let itemStatName in selectedItem) {
					let itemStatVal = selectedItem[itemStatName];
					if (itemStatVal != 0 && itemStatName != "stacked" && itemStatName != "allowed_to" && itemStatName != "index" && itemStatName != "stackable" && itemStatName != "shared_item" && itemStatName != "visible" && typeof (itemStatVal) != "string") {
						let hasMultType = itemStatName.includes("mult");
						if (hasMultType && itemStatVal.value != 0) {
							let counts = 0;
							if (selectedItem.shared_item.name != null) {
								passiveNames = selectedItem.shared_item.name.split(",");
								passiveNames.forEach((passiveName: string) => {
									if (sharedItemCounts[passiveName] <= 1) {
										counts += 1;
									}
								});
								if (counts <= passiveNames.length) {
									if (itemStatVal["type"] == "total") {
										multKeyValues[itemStatName][0]["value"] += (itemStatVal["value"] / 100);
									} else if (itemStatVal["type"] == "bonus") {
										multKeyValues[itemStatName][1]["value"] += (itemStatVal["value"] / 100);
									}
								}
							}
						} else if (hasMultType === false) {
							if (itemStatName in totalStatsFromItems) {
								if (itemStatName in selectedItem.shared_item === false) {
									totalStatsFromItems[itemStatName] += itemStatVal;
								} else {
									if (totalStatsFromItems[itemStatName] < itemStatVal) {
										totalStatsFromItems[itemStatName] = itemStatVal;
									} else {
										console.log(selectedItem, itemStatName, itemStatVal);
									}
								}
							} else if (itemStatName in totalStatsFromItems === false) {
								if (itemStatName in selectedItem.shared_item === false) {
									totalStatsFromItems[itemStatName] = itemStatVal;
								} else {
									let counts = 0;
									passiveNames = selectedItem.shared_item.name.split(",");
									passiveNames.forEach((passiveName: string) => {
										if (sharedItemCounts[passiveName] <= 1) {
											counts += 1;
										}
									});
									// ????? changed from counts == to <=
									// I actually have no clue how to go about those stats
									if (counts <= passiveNames.length) {
										totalStatsFromItems[itemStatName] = itemStatVal;
									}

								}
							}
						}
					} else if (itemStatName == "shared_item" && itemStatVal != null) {
						// do something
					} else if (itemStatName == "stackable") {
						// console.log(selectedItem.stackable != false, selectedItem.stacked == true, sharedItemCounts[selectedItem.shared_item.name] <= 1);
						if (selectedItem.stackable != false && selectedItem.stacked == true) {
							let passNames = selectedItem.shared_item.name.split(",");
							let counts = 0;
							passNames.forEach((passName: string) => {
								if (sharedItemCounts[passName] <= 1) {
									counts += 1;
								}
							});
							if (counts <= passNames.length) {
								for (let stackedItemStatKey in selectedItem.stackable) {
									if (stackedItemStatKey != "name") {
										if (stackedItemStatKey in totalStatsFromItems) {
											totalStatsFromItems[stackedItemStatKey] += selectedItem.stackable[stackedItemStatKey];
										} else {
											totalStatsFromItems[stackedItemStatKey] = selectedItem.stackable[stackedItemStatKey];
										}
									}
								}
							}
						}
					}
				}
			} else {
				// console.log(itemIndex, selectedItem);
			}
		}
		console.log(totalStatsFromItems, sharedItemCounts);
		// the total stats from items does not include energy which is only obtainable with presence of mind
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
		// this iteration works because we call adjustBaseStats which "resets" the champion all the way to its base stat as if there were no stats to begin with

		let adaptiveType: string;
		let totalApFromItems = totalStatsFromItems["ap"];
		let totalAdFromItems = totalStatsFromItems["ad"];
		if (totalAdFromItems == undefined && totalApFromItems == undefined) {
			adaptiveType = champion.stats.ad > champion.stats.ap ? "ad" : "ap";
		} else if (totalAdFromItems == undefined && totalApFromItems) {
			adaptiveType = "ap";
		} else if (totalAdFromItems && totalApFromItems == undefined) {
			adaptiveType = "ad";
		} else {
			adaptiveType = totalAdFromItems > totalApFromItems ? "ad" : "ap";
		}

		for (let key in totalStatsFromItems) {
			if (key == "boots_ms" || key == "flat_ms") {
				champion.stats.ms += totalStatsFromItems[key];
			} else {
				champion.stats[key] += totalStatsFromItems[key];
			}
		}
		// this.addRuneStats(adaptiveType); // is this added before or after item stats?
		if (hasTotalMultiplier) {
			this.applyTotalMultipliers(champion, multKeyValues);
		}
		return totalStatsFromItems;
	}
	addRuneStats(runes: any, champion: Champion, currentLevel: number, totalStatsFromItems: object, adaptiveType: string, currentTime?: number) {
		let totalStatsFromRunes = {};
		runes.forEach((rune: any) => {
			if (rune.name == "Gathering Storm") {
				let gatheringStormTotal = this.gatheringStormRune(adaptiveType, currentTime);
				totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += gatheringStormTotal : totalStatsFromRunes = gatheringStormTotal;
				// champion.stats[adaptiveType] += this.gatheringStormRune(adaptiveType, currentTime);
			} else if (rune.name == "Transcendence") {
				let additionalCdr: number = 0;
				if (currentLevel >= 10) {
					additionalCdr += 10;
					// champion.stats.cdr += 10
					totalStatsFromRunes["cdr"] ? totalStatsFromRunes["cdr"] += additionalCdr : totalStatsFromRunes = additionalCdr;
				}
				// let additionalCdr :number  = champion.stats.cdr > 40 ? champion.stats.cdr - 40 : 0;
				additionalCdr += totalStatsFromItems["cdr"] && totalStatsFromItems["cdr"] > 40 ? totalStatsFromItems["cdr"] - 40 : 0;
				champion.stats[adaptiveType] += adaptiveType == "ad" ? 1.2 * additionalCdr : 2 * additionalCdr;
			} else {

			}

		});
		return totalStatsFromRunes;
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
	allSelectedItemsIsEmpty(selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item) {
		for (let index in selectedItems) {
			if (selectedItems[index] != EMPTY_ITEM) {
				return false;
			}
		}
		if (selectedElixir != EMPTY_ITEM) {
			return false;
		}
		return true;
	}
	postCalculations(champion: Champion, currentLevel: number, itemAdditions: any) {
		if (champion.apiname == "yasuo") {
			champion.stats.crit *= 2;
		}
		if (itemAdditions.hexCoreItem) {
			champion.stats.ap += (itemAdditions.hexCoreItem.ap * (currentLevel - 1));
			champion.stats.mp += (itemAdditions.hexCoreItem.mp * (currentLevel - 1));
		}
		if (itemAdditions.aweItem) {
			if (itemAdditions.aweItem.apiname == "manamune" || itemAdditions.aweItem.apiname == "muramana") {
				champion.stats.ad += (champion.stats.mp * 0.02);
			} else if (itemAdditions.aweItem.apiname == "archangelsstaff") {
				champion.stats.ap += (champion.stats.mp * 0.01);
			} else if (itemAdditions.aweItem.apiname == "seraphsembrace") {
				champion.stats.ap += (champion.stats.mp * 0.03);
			}
		}

		if (champion.stats.cdr > 40) {
			champion.stats.cdr -= (champion.stats.cdr - 40);
		}
		if (champion.stats.crit > 100) {
			champion.stats.crit -= (champion.stats.crit - 100);
		}
	}
}
