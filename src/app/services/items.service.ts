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
				let selectedItem = selectedItemsIncludingElixir[itemIndex];
				if (selectedItem.name != "Empty") {
					// add the tenacity directly (we're not gonna add steraks since its due to lifeline active items. This allows us to separate the tenacity formula dynamically into the rune/elixir calculation in the runesService and the items calc here).
					//maybe in the future i'll take a look at adding in active items -> checkbox to see what stats on all activation? individual items might be too difficult
					if (selectedItem.apiname == "mercurystreads") {
						champion.stats.tenacity = selectedItem.tenacity;
					}
					// look at the shared items -> this generally means the passives that it shares or a unique item that doesn't add the shared item's stats
					// for example stinger shares attack speed i.e. multiple stingers stack attackspeed but not cdr
					// lost chapter items share cdr but can stack all other stats. the shared item has a boolean representing which stats are shared and which ones are not -> maybe in the future I can take a look at this and see what structure better suits this
					if (selectedItem.shared_item.name != null) {
						var passiveNames = selectedItem.shared_item.name.split(",");
						passiveNames.forEach((passiveName: string) => {
							if (passiveName in sharedItemCounts === false) {
								sharedItemCounts[passiveName] = 1;
							} else {
								sharedItemCounts[passiveName] += 1;
							}
							// some specific items have post calculations like manamune, seraphs, hexcore items, etc
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
						// skip any of irrelevant stat related items
						if (itemStatVal != 0 && itemStatName != "stacked" && itemStatName != "allowed_to" && itemStatName != "index" && itemStatName != "stackable" && itemStatName != "shared_item" && itemStatName != "visible" && typeof (itemStatVal) != "string") {
							// check if it has any multipliers
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
									// limit the number of total bonuses on additional items eg. stacking abyssal mask or liandrys
									if (counts <= passiveNames.length) {
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
									// check if the item stat is new or not
									if (itemStatName in selectedItem.shared_item === false) {
										totalStatsFromItems[itemStatName] += itemStatVal;
									} else {
										// if the stats is a shared item stats and the new stat is bigger, assign the larger one
										// eg. voidstaff and guinsoos, lastwhipser, LDR, mortal reminder, etc.
										if (totalStatsFromItems[itemStatName] < itemStatVal) {
											totalStatsFromItems[itemStatName] = itemStatVal;
										} else {
											console.log(selectedItem, itemStatName, itemStatVal);
										}
									}
								} else if (itemStatName in totalStatsFromItems === false) {
									if (itemStatName in selectedItem.shared_item === false) {
										// if the stats is a shared item stat and it's new, set it to the value
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
							// check if its a stackable item -> need to relook at this very confusing
							if (selectedItem.stackable != false && selectedItem.stacked == true) {
								let counts = 0;
								// firstly why are stackable items and shared items related?
								if (selectedItem.shared_item.name) {
									let passNames = selectedItem.shared_item.name.split(",");
									passNames.forEach((passName: string) => {
										if (sharedItemCounts[passName] <= 1) {
											counts += 1;
										}
									});
								}
								// if there is an item that is stackable and is about to be stacked, only stack one of them unless its ROA
								// the stack option only applies to the first one and not the other ones. reason is because the sharedItemCounts +=1 on iterative look at the inventory so the first one found is allowed. if there are 6 of them, the first checkbox is allowed to be stacked
								if (selectedItem.apiname == 'rodofages' || counts != 0) {
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
		for (let key in totalStatsFromItems) {
			if (key == "boots_ms" || key == "flat_ms") {
				flatMoveSpeedBonuses += totalStatsFromItems[key];
				champion.stats.ms += totalStatsFromItems[key];
			} else if (key == "ms%") {
				// apply the bonus multiplier move speeds first before the flat movespeed bonuses (eg. aether wisp and mobility boots)
				champion.stats.ms += champion.stats.ms * (totalStatsFromItems[key] / 100);
			} else if (key != "as") {
				champion.stats[key] += totalStatsFromItems[key];
			}
		}
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
