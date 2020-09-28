import { Pipe, PipeTransform } from "@angular/core";

import { Champion } from 'src/app/core/models/champion';
import { Item } from 'src/app/core/models/item';

@Pipe({
	name: "itemFilter",
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
	byAlphaAscending(itemA: Item, itemB: Item) {
		if (itemA.name < itemB.name) { return -1; }
		if (itemA.name > itemB.name) { return 1; }
		return 0;
	}
	byAlphaDescending(itemA: Item, itemB: Item) {
		if (itemA.name > itemB.name) { return -1; }
		if (itemA.name < itemB.name) { return 1; }
		return 0;
	}
	/**
	 * Item filter pipe that is called on search input
	 * @param  {Item[]} items the list of all items
	 * @param  {Champion} champion the selected champion to filter items that are unobtainable
	 * @param  {string} searchText search input when typed in
	 * @param  {string} searchMode search by gamemode
	 * @param  {string} orderBy orders results by name or gold/price
	 * @param  {string} orderMode orders in ascending or descending order
	 * @returns Item[]
	 */
	transform(items: Item[], champion: Champion, searchText: string, searchMode: string, orderBy: string, orderMode: string): Item[] {
		if (!items) return [];
		// check if there is a selected champion from oninit in champion component
		if (!champion) return items;
		let apiname = champion.apiname.toLowerCase();
		let championRangeType = champion["rangetype"].toLowerCase();
		searchText = searchText.toLowerCase();
		searchMode = searchMode.toLowerCase();

		// if we want to remove items from the list that do not match the details, we can use the filter function
		// and change the return value from nothing to the conditional expression and call the sort on the results array
		// let results = items.filter(item => {
		items.forEach((item: Item) => {
			let itemsSearchedByMode = item.modes.toLowerCase().includes(searchMode);
			let itemsSearchedByName = item.name.toLowerCase().includes(searchText) || item.apiname.includes(searchText);
			let itemsSearchedByTag = item.tags && item.tags != "" ? item.tags.includes(searchText) : null;
			// set some intermediary conditions for granularity
			let intermediaryCondition1: boolean;
			let intermediaryCondition2: boolean;
			let finalCondition: boolean;

			// for example, check if it has tags, include it as a possible search term
			intermediaryCondition1 = itemsSearchedByTag ? itemsSearchedByName || itemsSearchedByTag : itemsSearchedByName;
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
				// there must be an error with the item, it cant be restricted to both classes so we skip the item
				item.visible = false;
				return;
			}
			finalCondition = intermediaryCondition2 && itemsSearchedByMode;
			if (apiname == "cassiopeia") {
				item.visible = finalCondition && item.boots_ms == 0 && !item.apiname.includes("hexcore");
				// return finalCondition && item.boots_ms == 0 && !item.apiname.includes("hexcore");
				return;
			} else if (apiname == "viktor") {
				item.visible = finalCondition || (finalCondition && item.apiname.includes("hexcore"));
				// return finalCondition || (finalCondition && item.apiname.includes("hexcore"));
				return;
			}
			item.visible = finalCondition && !item.apiname.includes("hexcore");
			// return finalCondition && !item.apiname.includes("hexcore");
			return;
		});
		if (orderMode == "desc") {
			return orderBy == "gold" ? items.sort(this.byGoldDescending) : items.sort(this.byAlphaDescending);
		} else if (orderMode == "asc") {
			return orderBy == "gold" ? items.sort(this.byGoldAscending) : items.sort(this.byAlphaAscending);
		}
		// if (orderMode == "desc") {
		// 	return orderBy == "gold" ? results.sort(this.byGoldDescending) : results.sort(this.byAlphaDescending);
		// } else if (orderMode == "asc") {
		// 	return orderBy == "gold" ? results.sort(this.byGoldAscending) : results.sort(this.byAlphaAscending);
		// }
	}
}
