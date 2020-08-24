import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Champion } from '../models/champion';
import { EMPTY_ITEM } from '../../data/items';

@Injectable({
	providedIn: 'root'
})
export class ItemsService {

	constructor() { }

	/**
	 * Method that adds the items stats to the champion stats after adjustBaseStats is applied
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {number} currentLevel the current level for level dependant items
	 * @param  {[Item*6]} selectedItems the selected items/inventory (tuple of 6 items) to adjust by
	 * @returns any
	 */
	calculateItemStats(champion: Champion, currentLevel: number, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item): any {
		//shared items are in order of which they are in the inventory
		//if i buy steraks and maw => steraks mult applies

		// calculate item stats if there are atleast some items
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
				let selectedItem: Item = selectedItemsIncludingElixir[itemIndex];
				if (selectedItem.name != "Empty") {
					// add the tenacity directly (we're not gonna add steraks since its due to lifeline active items. This allows us to separate the tenacity formula dynamically into the rune/elixir calculation in the runesService and the items calc here).
					//maybe in the future i'll take a look at adding in active items -> checkbox to see what stats on all activation? individual items might be too difficult
					if (selectedItem.apiname == "mercurystreads") {
						champion.stats.tenacity = selectedItem.tenacity;
					}
					if (selectedItem.shared_item == "awe" && selectedItem.name.includes('tear') == false) {
						aweItem = selectedItem;
					}
					if (selectedItem.shared_item == "hexcore") {
						hexCoreItem = selectedItem;
					}
					if (selectedItem.shared_passives.length != 0) {
						selectedItem.shared_passives.forEach((sharedPassiveObj: any) => {
							sharedItemCounts[sharedPassiveObj.name] ? sharedItemCounts[sharedPassiveObj.name] += 1 : sharedItemCounts[sharedPassiveObj.name] = 1;
						});
					}
					for (let itemStatName in selectedItem) {
						let itemStatVal = selectedItem[itemStatName];
						// skip any of irrelevant stat related items
						if (itemStatVal != 0 && itemStatName != "stacked" && itemStatName != "allowed_to" && itemStatName != "index" && itemStatName != "stackable" && itemStatName != "shared_item" && itemStatName != "shared_passives" && itemStatName != "visible" && typeof (itemStatVal) != "string") {
							// check if it has any multipliers
							let hasMultType = itemStatName.includes("mult");
							if (hasMultType && itemStatVal.value != 0) {
								let counts;
								if (selectedItem.shared_passives.length != 0) {
									counts = this.sharedItemLimiter(selectedItem.shared_passives, sharedItemCounts);
									// limit the number of total bonuses on additional items eg. stacking abyssal mask or liandrys
									if (counts == 1) {
										if (itemStatVal["type"] == "total") {
											multKeyValues[itemStatName][0]["value"] += (itemStatVal["value"] / 100);
										} else if (itemStatVal["type"] == "bonus") {
											multKeyValues[itemStatName][1]["value"] += (itemStatVal["value"] / 100);
										}
									}
								}
								// on other stats that are not tenacity, add them since the tenacity calculation happens on the rune additions (tenacity only exists on mercs)
							} else if (hasMultType === false && itemStatName != "tenacity") {
								if (itemStatName in totalStatsFromItems) {
									if (selectedItem.shared_passives.length == 0) {
										totalStatsFromItems[itemStatName] += itemStatVal;
									} else {
										let addedStat = {};
										selectedItem.shared_passives.forEach((sharedPassiveObj: any) => {
											let dissolve = sharedPassiveObj;
											if (itemStatName in dissolve) {
												console.log(itemStatName, itemStatVal, dissolve);
											} else {
												if (addedStat[itemStatName]) {
													totalStatsFromItems[itemStatName] += itemStatVal;
												}
											}
											// for (let sharedPassiveStat in sharedPassiveObj) {
											// 	if (sharedPassiveStat != "name" && sharedItemCounts[a]) {
											// 		if (sharedPassiveStat == itemStatName && sharedItemCounts[a].length <= 1) {
											// 			if (totalStatsFromItems[itemStatName] < itemStatVal) {
											// 				totalStatsFromItems[itemStatName] = itemStatVal;
											// 			}
											// 			// console.log("added stat", sharedPassiveStat, itemStatVal);
											// 		} else if (sharedPassiveStat != 'name') {
											// 			totalStatsFromItems[itemStatName] += itemStatVal;
											// 			// console.log("this is a stat we didn't deal with", sharedPassiveStat, itemStatName, itemStatVal);
											// 		}
											// 	} else {
											// 		// console.log(sharedPassiveStat, itemStatName, itemStatVal);
											// 	}
											// }
										});
									}
									// let allowedPassives = this.sharedItemLimiter(selectedItem.shared_passives, sharedItemCounts)
									// for
									// // check if the item stat is new or not
									// if (itemStatName in selectedItem.shared_item === false) {
									// 	totalStatsFromItems[itemStatName] += itemStatVal;
									// } else {
									// 	// if the stats is a shared item stats and the new stat is bigger, assign the larger one
									// 	// eg. voidstaff and guinsoos, lastwhipser, LDR, mortal reminder, etc.
									// 	if (totalStatsFromItems[itemStatName] < itemStatVal) {
									// 		totalStatsFromItems[itemStatName] = itemStatVal;
									// 	} else {
									// 		let counts = this.sharedItemLimiter(selectedItem.shared_item, sharedItemCounts);
									// 		if (counts == 1 || totalStatsFromItems[itemStatName] < itemStatVal) {
									// 			totalStatsFromItems[itemStatName] += itemStatVal;
									// 		}
									// 		console.log(selectedItem, itemStatName, itemStatVal);
									// 	}
									// }
								} else if (itemStatName in totalStatsFromItems === false) {
									if (selectedItem.shared_passives.length == 0) {
										totalStatsFromItems[itemStatName] = itemStatVal;
									} else {
										selectedItem.shared_passives.forEach((sharedPassiveObj: any) => {
											let a = sharedPassiveObj['name'];
											for (let sharedPassiveStat in sharedPassiveObj) {
												if (sharedPassiveStat != "name" && sharedItemCounts[a]) {
													if (sharedPassiveStat == itemStatName && sharedItemCounts[a].length <= 1) {
														totalStatsFromItems[itemStatName] = itemStatVal;
														// console.log("added stat", sharedPassiveStat, itemStatVal);
													} else if (sharedPassiveStat != 'name') {
														totalStatsFromItems[itemStatName] = itemStatVal;
														// console.log("this is a stat we didn't deal with", sharedPassiveStat, itemStatName, itemStatVal);
													}
												} else {
													// console.log(sharedPassiveStat, itemStatName, itemStatVal);
												}
											}
										});
									}
									// if (itemStatName in selectedItem.shared_item === false) {
									// 	// if the stats is a shared item stat and it's new, set it to the value
									// 	totalStatsFromItems[itemStatName] = itemStatVal;
									// } else {
									// 	let counts = this.sharedItemLimiter(selectedItem.shared_item, sharedItemCounts);
									// 	// ????? changed from counts == to <=
									// 	// I actually have no clue how to go about those stats
									// 	if (counts == 1 || totalStatsFromItems[itemStatName] == 0) {
									// 		totalStatsFromItems[itemStatName] = itemStatVal;
									// 	}
									// }
								}
							}
						} else if (itemStatName == "shared_item" && itemStatVal != null) {
							// do something
						} else if (itemStatName == "stackable") {
							// check if its a stackable item -> need to relook at this very confusing
							if (selectedItem.stackable != false && selectedItem.stacked == true) {
								let counts;
								// firstly why are stackable items and shared items related?
								if (selectedItem.shared_item.name) {
									counts = this.sharedItemLimiter(selectedItem.shared_item, sharedItemCounts);
								}
								// if there is an item that is stackable and is about to be stacked, only stack one of them unless its ROA
								// the stack option only applies to the first one and not the other ones. reason is because the sharedItemCounts +=1 on sharedItemCounts at the inventory so the first one found is allowed. if there are 6 of them, the first checkbox is allowed to be stacked
								if (selectedItem.apiname == 'rodofages' || counts == 1) {
									// add the stackable stats. this is is the incremental value since we have the toggle option which switches from adding and decrementing.
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
				}
			}
			console.log(totalStatsFromItems, sharedItemCounts);
			// the total stats from items does not include energy which is only obtainable with presence of mind
			for (let key in totalStatsFromItems) {
				if (champion.resource.toLowerCase() != "mana" && key.includes("mp")) {
					totalStatsFromItems[key] = 0;
				}
			}

			// are the total multipliers added including the bonus stats or just the base+item
			// console.log(champion.stats, totalStatsFromItems, multKeyValues);

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
			let itemAdditions = { "aweItem": aweItem, "hexcoreItem": hexCoreItem };
			return [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions];
		}
		return [{}, {}, champion.stats.ad > champion.stats.ap ? "ad" : "ap", {}];
	}

	sharedItemLimiter(sharedPassivesProperty: any, sharedItemCounts: any) {
		let allowed = {};
		for (let sharedPassiveIndex in sharedPassivesProperty) {
			let sharedPassiveObj = sharedPassivesProperty[sharedPassiveIndex];
			for (let statKey in sharedPassiveObj) {

			}
			if (sharedItemCounts[sharedPassiveObj.name] <= 1 || sharedPassiveObj) {
				allowed[sharedPassiveIndex] = sharedPassiveObj;
			}
		}
		return 0;
		return allowed;
	}
	addItemStats(champion: Champion, totalStatsFromItems: any, multKeyValues: any) {
		let hasTotalMultiplier: boolean = false;
		for (let key in multKeyValues) {
			let additionalMultipliers = multKeyValues[key];
			for (let additionalMultiplierObj in additionalMultipliers) {
				let additionalMultiplier = additionalMultipliers[additionalMultiplierObj];
				let additionalMultiplierType = additionalMultiplier["type"];
				let additionalMultiplierVal = additionalMultiplier["value"];
				let statKey = key.replace("_mult", "");
				// some of the multipliers (as the name suggests are multiplicative) are dependant on total stats, some are dependant on bonus stats -> comeback to this
				if (additionalMultiplierType == "bonus" && additionalMultiplierVal != 0) {
					totalStatsFromItems[statKey] *= (1 + additionalMultiplier["value"]);
				}
				if (additionalMultiplierType == "total") {
					hasTotalMultiplier = true;
				}
			}
		}
		// add all the stats that we've computed from items. this iteration works because we call adjustBaseStats which "resets" the champion all the way to its base stat as if there were no stats to begin with and without having to keep track of a post stat calculation

		let flatMoveSpeedBonuses = 0;
		let baseBonuses = {};
		for (let key in totalStatsFromItems) {
			let statVal = totalStatsFromItems[key];
			if (key == "boots_ms" || key == "flat_ms") {
				flatMoveSpeedBonuses += statVal;
				champion.stats.ms += statVal;
			} else if (key == "ms%") {
				// apply the bonus multiplier move speeds first before the flat movespeed bonuses (eg. aether wisp and mobility boots)
				champion.stats.ms += champion.stats.ms * (statVal / 100);
			} else if (key == "mp5%" || key == "hp5%") {
				// hp5 and mp5 are only % on champion base (after SGF)
				let flatKey = key.replace("%", "");
				let bonusVal = champion.stats[flatKey] * (statVal / 100);
				baseBonuses[flatKey] ? baseBonuses[flatKey] += bonusVal : baseBonuses[flatKey] = bonusVal;
			} else if (key == "mp5" || key == "hp5") {
				// flat comes from dorans ring/shield
				baseBonuses[key] ? baseBonuses[key] += statVal : baseBonuses[key] = statVal;
			} else if (key != "as") {
				champion.stats[key] += statVal;
			}
		}
		for (let key in baseBonuses) {
			champion.stats[key] += baseBonuses[key];
		}
		// console.log(baseBonuses);
		// the move speed multiplier is not applied on base and total very confusting
		// champion.stats.ms += flatMoveSpeedBonuses;

		// the order of applying total multipliers is significant -> comeback to this
		// for example, do we apply the total multipliers before after or the same time as the overgrowth rune?
		// the multipliers availble for items are ad ap and hp which is different than conditioning rune
		// example item set is cinderhulk with overgrowth
		if (hasTotalMultiplier) {
			this.applyTotalMultipliers(champion, multKeyValues);
		}
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
					champion.stats[statKey] *= (1 + additionalMultiplierVal);
				}
			}
		}
		return;
	}
}
