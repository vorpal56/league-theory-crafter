import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Champion } from '../models/champion';
import { EMPTY_ITEM } from '../../../server/data/items';

@Injectable({
	providedIn: 'root'
})
export class ItemsService {

	constructor() { }
	/**
	 * Method that adds the items stats to the champion stats after adjustBaseStats is applied
	 * This looks at stackable item stats such as tear items, mejais, dark seal, seekers and unique passives such as fiendish, kindlegem, stinger, etc. so long as the data in the model is presented correctly (see the server/data/items.ts for the complete item set)
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {[Item*6]} selectedItems the selected items/inventory (tuple of 6 items) to adjust by
	 * @returns [object, object, string, object] total calculated stats from items, any multipliers on items, the adaptive type for runes, and item additions for post calculations
	 */
	calculateItemStats(champion: Champion, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item): [object, object, string, object] {
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
			// stackedItemCounts relates to the stackable items that have been stacked. This is to allow stacking of only 1 or multiple items when the stacakble checkbox is checked. If we only reference the sharedItemCounts, we can only select the first option instead of any other option
			let stackedItemCounts: object = {};
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
					let sharedStatKeys = {};
					if (selectedItem.shared_passives.length != 0) {
						selectedItem.shared_passives.forEach((sharedPassiveObj: any) => {
							sharedItemCounts[sharedPassiveObj.name] ? sharedItemCounts[sharedPassiveObj.name] += 1 : sharedItemCounts[sharedPassiveObj.name] = 1;
							for (let sharedKey in sharedPassiveObj) {
								if (sharedKey != "name") {
									sharedStatKeys[sharedKey] = sharedPassiveObj.name;
								}
							}
						});
					}
					for (let itemStatName in selectedItem) {
						let itemStatVal = selectedItem[itemStatName];
						let numSharedPassives = selectedItem.shared_passives.length;
						// skip any of irrelevant stat related items
						if (itemStatVal != 0 && itemStatName != "stacked" && itemStatName != "allowed_to" && itemStatName != "index" && itemStatName != "stackable" && itemStatName != "shared_item" && itemStatName != "shared_passives" && itemStatName != "visible" && typeof (itemStatVal) != "string") {
							// check if it has any multipliers
							let hasMultType = itemStatName.includes("mult");
							if (hasMultType) {
								if (numSharedPassives == 0 || numSharedPassives > 1) {
									if (itemStatVal["type"] == "total") {
										multKeyValues[itemStatName][0]["value"] += (itemStatVal["value"] / 100);
									} else if (itemStatVal["type"] == "bonus") {
										multKeyValues[itemStatName][1]["value"] += (itemStatVal["value"] / 100);
									}
								} else if (numSharedPassives == 1) {
									let sharedPassiveName = selectedItem.shared_passives[0]["name"];
									if (itemStatName in sharedStatKeys == false || sharedItemCounts[sharedPassiveName] <= 1) {
										if (itemStatVal["type"] == "total") {
											multKeyValues[itemStatName][0]["value"] += (itemStatVal["value"] / 100);
										} else if (itemStatVal["type"] == "bonus") {
											multKeyValues[itemStatName][1]["value"] += (itemStatVal["value"] / 100);
										}
									} else if (itemStatName in sharedStatKeys && itemStatVal >= totalStatsFromItems[itemStatName]) {
										if (itemStatVal["type"] == "total") {
											multKeyValues[itemStatName][0]["value"] = (itemStatVal["value"] / 100);
										} else if (itemStatVal["type"] == "bonus") {
											multKeyValues[itemStatName][1]["value"] = (itemStatVal["value"] / 100);
										}
									}
								}
								// on other stats that are not tenacity, add them since the tenacity calculation happens on the rune additions (tenacity only exists on mercs)
							} else if (hasMultType === false && itemStatName != "tenacity") {
								if (itemStatName in totalStatsFromItems) {
									if (numSharedPassives == 0) {
										// if the item is completely separate and it has no shared items, we can add every stat
										totalStatsFromItems[itemStatName] += itemStatVal;
									} else if (numSharedPassives == 1) {
										// if it has 1 shared item, we can look at it directly
										// first we need to get the shared passive name eg. fiendish
										// check if the itemstat is not in the shared stats or the number of references to the shared passive is <=1 beacuse that means we can account for it
										let sharedPassiveName = selectedItem.shared_passives[0]["name"];
										if (itemStatName in sharedStatKeys == false || sharedItemCounts[sharedPassiveName] <= 1) {
											totalStatsFromItems[itemStatName] += itemStatVal;
											// if the stat is in the shared stat and the value is larger than the current stat val, we assign the larger val
											// eg. void staff, and guinsoos
										} else if (itemStatName in sharedStatKeys && itemStatVal >= totalStatsFromItems[itemStatName]) {
											totalStatsFromItems[itemStatName] = itemStatVal;
										}
									} else if (numSharedPassives > 1) {
										for (let sharedPassiveIndex in selectedItem.shared_passives) {
											let statInKey = itemStatName in sharedStatKeys;
											if (!statInKey || sharedItemCounts[sharedStatKeys[itemStatName]] <= 1) {
												totalStatsFromItems[itemStatName] += itemStatVal;
												break;
											} else if (statInKey && itemStatVal >= totalStatsFromItems[itemStatName]) {
												totalStatsFromItems[itemStatName] = itemStatVal;
												break;
											}
										}
									}
								} else if (itemStatName in totalStatsFromItems === false) {
									if (numSharedPassives == 0) {
										totalStatsFromItems[itemStatName] = itemStatVal;
									} else if (numSharedPassives == 1) {
										let sharedPassiveName = selectedItem.shared_passives[0]["name"];
										if (itemStatName in sharedStatKeys == false || sharedItemCounts[sharedPassiveName] <= 1) {
											totalStatsFromItems[itemStatName] = itemStatVal;
										}
									} else if (numSharedPassives > 1) {
										selectedItem.shared_passives.forEach((sharedPassiveObj: any) => {
											let sharedPassiveName = sharedPassiveObj.name;
											for (let sharedPassiveStat in sharedPassiveObj) {
												if (sharedPassiveStat != "name" && sharedItemCounts[sharedPassiveName]) {
													if (sharedPassiveStat == itemStatName && sharedItemCounts[sharedPassiveName].length <= 1) {
														totalStatsFromItems[itemStatName] = itemStatVal;
														break;
													} else if (sharedPassiveStat != 'name') {
														totalStatsFromItems[itemStatName] = itemStatVal;
														break;
													}
												}
											}
										});
									}
								}
							}
						} else if (itemStatName == "stackable") {
							if (selectedItem.stackable != false && selectedItem.stacked == true) {
								// stackable items only share the first object and can be purchased multiple times.
								let sharedItemName = selectedItem.shared_item;
								if (numSharedPassives != 0) { sharedItemName = selectedItem.shared_passives[0].name; }
								sharedItemName != null && stackedItemCounts[sharedItemName] ? stackedItemCounts[sharedItemName] += 1 : stackedItemCounts[sharedItemName] = 1;
								if (selectedItem.apiname == 'rodofages' || stackedItemCounts[sharedItemName] <= 1) {
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
			console.log("Stats from items: ", totalStatsFromItems, "Shared Item Passives: ", sharedItemCounts);
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
	/**
	 * @param  {[Item*6]} selectedItems the selected items
	 * @param  {Item} selectedElixir the selected elixir
	 * @returns boolean whether its empty or not
	 */
	allSelectedItemsIsEmpty(selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item): boolean {
		for (let index in selectedItems) {
			if (selectedItems[index] != EMPTY_ITEM) { return false; }
		}
		if (selectedElixir != EMPTY_ITEM) { return false; }
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
