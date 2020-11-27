import { Injectable } from '@angular/core';

import { Champion } from '../models/champion';
import { Item, EMPTY_ITEM } from '../models/item';

@Injectable({
	providedIn: 'root'
})
export class ItemsService {

	constructor() { }
	/**
	 * Method that adds the items stats to the champion stats after adjustBaseStats is applied
	 * This looks at stackable item stats such as tear items, mejais, dark seal, seekers and unique passives such as fiendish, kindlegem, stinger, etc. so long as the data in the model is presented correctly (see the server/data/items.ts for the complete item set)
	 *
	 * With the introduction of item changes in Preseason 2021, the way items are calculated will be differnt. We will readjust the Item model
	 * according to the new items and figure out the logic behind it. Details of this are laid out in the README
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {[Item*6]} selectedItems the selected items/inventory (tuple of 6 items) to adjust by
	 * @returns [object, object, string, object] total calculated stats from items, any multipliers on items, the adaptive type for runes, and item additions for post calculations
	 */
	calculateItemStats(champion: Champion, selectedItems: [Item, Item, Item, Item, Item, Item], selectedElixir: Item): [object, object] {
		//shared items are in order of which they are in the inventory
		//if i buy steraks and maw => steraks mult applies

		// calculate item stats if there are atleast some items
		if (!this.allSelectedItemsIsEmpty(selectedItems, selectedElixir)) {
			let selectedItemsIncludingElixir = JSON.parse(JSON.stringify(selectedItems));
			if (selectedElixir != EMPTY_ITEM) {
				selectedItemsIncludingElixir.push(selectedElixir);
			}
			let totalStatsFromItems: object = {};

			let sharedItemCounts: object = {};
			let uniquePassives: object = {};
			// stackedItemCounts relates to the stackable items that have been stacked. This is to allow stacking of only 1 or multiple items when the stacakble checkbox is checked. If we only reference the sharedItemCounts, we can only select the first option instead of any other option
			let mythicEffects = {};
			let legendaryItemCount = 0;
			let stackedItemCounts: object = {};
			let aweItem: Item = EMPTY_ITEM;
			for (let itemIndex in selectedItemsIncludingElixir) {
				let selectedItem: Item = selectedItemsIncludingElixir[itemIndex];
				if (selectedItem.name != "Empty") {
					// add the tenacity directly (we're not gonna add steraks since its due to lifeline active items. This allows us to separate the tenacity formula dynamically into the rune/elixir calculation in the runesService and the items calc here).
					//maybe in the future i'll take a look at adding in active items -> checkbox to see what stats on all activation? individual items might be too difficult
					if (selectedItem.apiname == "mercurystreads") {
						champion.stats.tenacity = selectedItem.stats.tenacity;
					}
					if (selectedItem.item_group == "manacharge" && selectedItem.name.includes("tear") == false) {
						aweItem = selectedItem;
					}
					if (selectedItem.rank == "legendary") { legendaryItemCount += 1; }
					selectedItem.passives.forEach((passiveObj: any) => {
						let passiveStats = passiveObj.stats;
						let passiveName = passiveObj.name;
						let appliesToMythic = passiveObj.mythic;
						if (passiveObj.unique) {
							if (passiveName in uniquePassives === false) {
								uniquePassives[passiveName] = [1, [passiveObj]];
								if (appliesToMythic) { mythicEffects[passiveName] = passiveStats; }
							} else {
								uniquePassives[passiveName][0] += 1;
								uniquePassives[passiveName][1].push(passiveObj);
								if (appliesToMythic) {
									for (let passiveItemStatName in passiveStats) {
										let passiveItemStatVal = passiveStats[passiveItemStatName];
										passiveItemStatName in mythicEffects[passiveName][passiveItemStatName] ? mythicEffects[passiveName][passiveItemStatName] += passiveItemStatVal : mythicEffects[passiveName][passiveItemStatName] = passiveItemStatVal;
									}
								}
							}
							if (passiveName in stackedItemCounts === false && appliesToMythic === false) {
								if (selectedItem.stacked == true && selectedItem.stackable == passiveName) {
									stackedItemCounts[passiveName] = 1;
									// you can find the references in items.py for stackable_items (key=apiname, value=stackable passive name)
									if (selectedItem.stackable == "deathwalker" || selectedItem.stackable == "dread") {
										let maxStackCount = selectedItem.stackable == "deathwalker" ? 25 : 10;
										for (let stackablePassiveStatName in passiveStats) {
											let stackableStatVal = passiveStats[stackablePassiveStatName];
											if (stackablePassiveStatName == "ap") {
												stackableStatVal *= maxStackCount;
											}
											stackablePassiveStatName in totalStatsFromItems ? totalStatsFromItems[stackablePassiveStatName] += stackableStatVal : totalStatsFromItems[stackablePassiveStatName] = stackableStatVal;
										}
									} else if (selectedItem.stackable == "mana charge") {
										let stackablePassiveStatVal = passiveStats["mp"];
										"mp" in totalStatsFromItems ? totalStatsFromItems["mp"] += stackablePassiveStatVal : totalStatsFromItems["mp"] = stackablePassiveStatVal;
									} else if (selectedItem.stackable == "witch's path") {
										let stackablePassiveStatVal = passiveStats["arm"];
										"arm" in totalStatsFromItems ? totalStatsFromItems["arm"] += stackablePassiveStatVal : totalStatsFromItems["arm"] = stackablePassiveStatVal;
									}
								}
							}
						} else {
							for (let itemPassiveStatName in passiveStats) {
								let itemPassiveStatVal = passiveStats[itemPassiveStatName];
								itemPassiveStatName in totalStatsFromItems ? totalStatsFromItems[itemPassiveStatName] += itemPassiveStatVal : totalStatsFromItems[itemPassiveStatName] = itemPassiveStatVal;
							}
						}
					});
					for (let itemStatName in selectedItem.stats) {
						let itemStatVal = selectedItem.stats[itemStatName];
						if (itemStatName != "tenacity") {
							itemStatName in totalStatsFromItems ? totalStatsFromItems[itemStatName] += itemStatVal : totalStatsFromItems[itemStatName] = itemStatVal;
						}
					}
				}
			}
			for (let uniquePassiveName in uniquePassives) {
				let uniquePassiveVal: [number, object] = uniquePassives[uniquePassiveName];
				let uniqueMaxVals: object = {};
				let passiveObj: object = uniquePassiveVal[1];
				let passiveStats: any = passiveObj["stats"];
				if (passiveObj["mythic"] === false) {
					passiveStats.forEach((passiveStatDetails: object) => {
						for (let itemPassiveStatName in passiveStatDetails) {
							let itemPassiveStatVal = passiveStatDetails[itemPassiveStatName];
							if (itemPassiveStatName in uniqueMaxVals && uniqueMaxVals[itemPassiveStatName] < itemPassiveStatVal) {
								uniqueMaxVals[itemPassiveStatName] = itemPassiveStatVal;
							} else if (itemPassiveStatName in uniqueMaxVals === false) {
								uniqueMaxVals[itemPassiveStatName] = itemPassiveStatVal;
							}
						}
					});
					for (let itemStatName in uniqueMaxVals) {
						let itemStatVal = uniqueMaxVals[itemStatName];
						itemStatName in totalStatsFromItems ? totalStatsFromItems[itemStatName] += itemStatVal : totalStatsFromItems[itemStatName] = itemStatVal;
					}
				}
			}
			for (let mythicPassiveName in mythicEffects) {
				let mythicPassiveStats = mythicEffects[mythicPassiveName];
				for (let mythicPassiveStatName in mythicPassiveStats) {
					let mythicPassiveStatVal = mythicPassiveStats[mythicPassiveStatName] * legendaryItemCount;
					mythicPassiveStatName in totalStatsFromItems ? totalStatsFromItems[mythicPassiveStatName] += mythicPassiveStatVal : totalStatsFromItems[mythicPassiveStatName] = mythicPassiveStatVal;
				}
			}
			console.log("Stats from items: ", totalStatsFromItems, "Shared Item Passives: ", sharedItemCounts);
			// the total stats from items does not include energy which is only obtainable with presence of mind
			for (let key in totalStatsFromItems) {
				if (champion.resource.toLowerCase() != "mana" && (key == "mp" || key == "mp5" || key == "mp5%")) {
					totalStatsFromItems[key] = 0;
				}
			}

			let adaptiveType: string;
			let totalApFromItems = totalStatsFromItems["ap"];
			let totalAdFromItems = totalStatsFromItems["ad"];
			if (totalAdFromItems == totalApFromItems) {
				adaptiveType = champion.mainAdaptiveType;
			} else if (totalAdFromItems == undefined && totalApFromItems) {
				adaptiveType = "ap";
			} else if (totalAdFromItems && totalApFromItems == undefined) {
				adaptiveType = "ad";
			} else {
				adaptiveType = totalAdFromItems > totalApFromItems ? "ad" : "ap";
			}
			champion.adaptiveType = adaptiveType;
			let itemAdditions = { "aweItem": aweItem };
			return [totalStatsFromItems, itemAdditions];
		}
		champion.adaptiveType = champion.mainAdaptiveType;
		return [{}, {}];
	}
	addItemStats(champion: Champion) {
		// add all the stats that we've computed from items. this iteration works because we call adjustBaseStats which "resets" the champion all the way to its base stat as if there were no stats to begin with and without having to keep track of a post stat calculation

		let flatMoveSpeedBonuses = 0;
		let baseBonuses = {};
		for (let key in champion.itemStats) {
			let statVal = champion.itemStats[key];
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
		// the move speed multiplier is not applied on base and total very confusting
		// champion.stats.ms += flatMoveSpeedBonuses;
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
	hasItem(selectedItems: [Item, Item, Item, Item, Item, Item], apiname: string): boolean {
		for (let index in selectedItems) {
			let selectedItem = selectedItems[index];
			if (selectedItem.apiname == apiname) { return true; }
		}
		return false;
	}
}
