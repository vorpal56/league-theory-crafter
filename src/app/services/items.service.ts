import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Champion } from '../models/champion';
import { EMPTY_ITEM } from '../items';

@Injectable({
	providedIn: 'root'
})
export class ItemsService {

	constructor() { }

	/**
	 * Method that adds the items stats to the champion stats after adjustBaseStats is applied
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {[Item*6]} selectedItems the selected items/inventory (tuple of 6 items) to adjust by
	 * @returns any
	 */
	addItemStats(champion: Champion, currentLevel: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item, currentTime?: number): any {
		//shared items are in order of which they are in the inventory
		//if i buy steraks and maw => steraks mult applies
		// console.log(selectedItems);
		if (!this.allSelectedItemsIsEmpty(selectedItems, selectedElixir)) {
			let selectedItemsIncludingElixir = JSON.parse(JSON.stringify(selectedItems));
			if (selectedElixir != EMPTY_ITEM) {
				selectedItemsIncludingElixir.push(selectedElixir);
			}
			let totalStatsFromItems: object = {};
			let multKeyValues: object = {
				"ad_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }],
				"ap_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }],
				"hp_mult": [{ "type": "total", "value": 0 }, { "type": "bonus", "value": 0 }]
			};

			let sharedItemCounts: object = {};
			let aweItem: Item = EMPTY_ITEM;
			let hexCoreItem: Item = EMPTY_ITEM;
			for (let itemIndex in selectedItemsIncludingElixir) {
				let selectedItem = selectedItemsIncludingElixir[itemIndex];
				if (selectedItem.name != "Empty") {
					if (selectedItem.apiname == "mercurystreads") {
						champion.stats.tenacity = selectedItem.tenacity;
					}
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
							} else if (hasMultType === false && itemStatName != "tenacity") {
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
			console.log(totalStatsFromItems, sharedItemCounts, champion.stats.tenacity);
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
			return [totalStatsFromItems, adaptiveType];
		}
		return [{}, champion.stats.ad > champion.stats.ap ? "ad" : "ap"];
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
