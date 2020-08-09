import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';

@Pipe({
	name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

	transform(items: any[], searchText: string, searchMode: string, orderBy: string): any[] {
		function byGold(itemA: Item, itemB: Item) {
			if (itemA.gold < itemB.gold) {
				return -1;
			}
			if (itemA.gold > itemB.gold) {
				return 1;
			}
			return 0;
		}
		if (!items) return [];
		if (!searchText && !searchMode) return items;
		searchText = searchText.toLowerCase();
		searchMode = searchMode.toLowerCase();
		let result = items.filter(item => {
			// for every item, compares the items if the search term is a tag or an item name
			// make sure that it's also within the selected gamemode
			let itemsSearchedByMode = item.modes.toLowerCase().includes(searchMode);
			let itemsSearchedByName = item.name.toLowerCase().includes(searchText);
			if (item.tags && item.tags != "") {
				return (itemsSearchedByName || item.tags.toLowerCase().includes(searchText)) && itemsSearchedByMode;
			}
			return itemsSearchedByName && itemsSearchedByMode;
		});
		// order the returned items by price or alpha
		if (orderBy == "alpha") {
			return result;
		} else if (orderBy == "gold") {
			return result.sort(byGold);
		}
	}

}
