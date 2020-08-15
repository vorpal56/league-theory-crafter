import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';
import { Champion } from '../models/champion';

@Pipe({
	name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {
	/**
	 * @param  {Item} itemA to compare to itemB
	 * @param  {Item} itemB to compare to itemA
	 * @returns number
	 */
	byGoldAscending(itemA: Item, itemB: Item): number {
		if (itemA.gold < itemB.gold) { return -1; }
		if (itemA.gold > itemB.gold) { return 1; }
		return 0;
	}
	byGoldDescending(itemA: Item, itemB: Item): number {
		if (itemA.gold > itemB.gold) { return -1; }
		if (itemA.gold < itemB.gold) { return 1; }
		return 0;
	}
	byAlphaDescending(itemA: Item, itemB: Item) {
		if (itemA.name > itemB.name) { return -1; }
		if (itemA.name < itemB.name) { return 1; }
		return 0;
	}
	/**
	 * Item filter pipe that is called on search input
	 * @param  {any[]} items the list of all items
	 * @param  {Champion} selectedChampion the selected champion to filter items that are unobtainable
	 * @param  {string} searchText search input when typed in
	 * @param  {string} searchMode search by gamemode
	 * @param  {string} orderBy orders results by name or gold/price
	 * @param  {string} orderMode orders in ascending or descending order
	 * @returns Item
	 */
	transform(items: Item[], selectedChampion: Champion, searchText: string, searchMode: string, orderBy: string, orderMode: string): Item[] {
		if (!items) return [];
		if (!searchText && !searchMode) return items;
		let championName = selectedChampion.name;
		let championRangeType = selectedChampion["rangetype"].toLowerCase();
		searchText = searchText.toLowerCase();
		searchMode = searchMode.toLowerCase();

		items.forEach(item => {
			let itemsSearchedByMode = item.modes.toLowerCase().includes(searchMode);
			let itemsSearchedByName = item.name.toLowerCase().includes(searchText) || item.apiname.includes(searchText);
			let itemsSearchedByTag = item.tags && item.tags != "" ? item.tags.includes(searchText) : null;
			// set some intermediary conditions for granularity
			let intermediaryCondition1: boolean;
			let intermediaryCondition2: boolean;
			let finalCondition: boolean;

			// for example, check if it has tags, include it as a possible search term
			if (itemsSearchedByTag) {
				intermediaryCondition1 = (itemsSearchedByName || itemsSearchedByTag);
			} else {
				intermediaryCondition1 = itemsSearchedByName;
			}
			// fixed the logic, much more straight forward and actually makes sense
			// check if there are any restrictions on the item given the champion
			if (item.allowed_to.melee && item.allowed_to.ranged) {
				// if it's an item that's available to both, we keep it as is
				intermediaryCondition2 = intermediaryCondition1;
			} else if (item.allowed_to.melee && !item.allowed_to.ranged) {
				// if its an item that's only allowed to melees but not to ranged, make sure that the champion is also melee
				intermediaryCondition2 = intermediaryCondition1 && item.allowed_to.melee && championRangeType == "melee";
			} else if (!item.allowed_to.melee && item.allowed_to.ranged) {
				// same here for ranged
				intermediaryCondition2 = intermediaryCondition1 && item.allowed_to.ranged && championRangeType == "ranged";
			} else {
				// there must be an error with the item, it cant be restricted to both classes
				item.visible = false;
				return;
			}
			finalCondition = intermediaryCondition2 && itemsSearchedByMode;
			if (championName == "Cassiopeia") {
				item.visible = finalCondition && item.boots_ms == 0 && !item.apiname.includes("hexcore");
				return;
			} else if (championName == "Viktor") {
				item.visible = finalCondition || (finalCondition && item.apiname.includes("hexcore"));
				return;
			}
			item.visible = finalCondition && !item.apiname.includes("hexcore");
			return;
		});
		if (orderMode == "desc") {
			return orderBy == "gold" ? items.sort(this.byGoldDescending) : items.sort(this.byAlphaDescending);
		} else if (orderMode == "asc") {
			return orderBy == "gold" ? items.sort(this.byGoldAscending) : items;
		}

		// filter option to reduce the set
		// let result = items.filter(item => {
		// 	// for every item, compares the items if the search term is a tag or an item name
		// 	// make sure that it's also within the selected gamemode
		// 	let itemsSearchedByMode = item.modes.toLowerCase().includes(searchMode);
		// 	let itemsSearchedByName = item.name.toLowerCase().includes(searchText) || item.apiname.includes(searchText);
		// 	let itemsSearchedByTag = item.tags && item.tags != "" ? item.tags.includes(searchText) : null;
		// 	let itemsAllowedToMelee = item.allowed_to.melee == true && championRangeType == "melee";
		// 	let itemsAllowedToRange = item.allowed_to.ranged == true && championRangeType == "ranged";
		// 	let intermediaryCondition1: boolean;
		// 	let intermediaryCondition2: boolean;
		// 	let finalCondition: boolean;
		// 	if (itemsSearchedByTag) {
		// 		intermediaryCondition1 = (itemsSearchedByName || itemsSearchedByTag);
		// 	} else {
		// 		intermediaryCondition1 = itemsSearchedByName;
		// 	}
		// 	// honestly very confusing literally have no idea if this works or not -> need further testing
		// 	if (itemsAllowedToMelee === true && itemsAllowedToRange === true) {
		// 		intermediaryCondition2 = intermediaryCondition1;
		// 	} else if (itemsAllowedToMelee === true && itemsAllowedToRange == false) {
		// 		intermediaryCondition2 = intermediaryCondition1 && itemsAllowedToMelee;
		// 	} else if (itemsAllowedToMelee === false && itemsAllowedToRange == true) {
		// 		intermediaryCondition2 = intermediaryCondition1 && itemsAllowedToRange;
		// 	}
		// 	finalCondition = intermediaryCondition2 && itemsSearchedByMode;
		// 	if (championName == "Cassiopeia") {
		// 		return finalCondition && item.boots_ms == 0 && !item.apiname.includes("hexcore");
		// 	} else if (championName == "Viktor") {
		// 		return finalCondition || (finalCondition && item.apiname.includes("hexcore"));
		// 	}
		// 	return finalCondition && !item.apiname.includes("hexcore");
		// });
		// // order the returned items by price or alpha
		// if (orderMode == "desc") {
		// 	return orderBy == "gold" ? result.sort(this.byGoldDescending) : result.sort(this.byAlphaDescending);
		// } else if (orderMode == "asc") {
		// 	return orderBy == "gold" ? result.sort(this.byGoldAscending) : result;
		// }

	}

}
