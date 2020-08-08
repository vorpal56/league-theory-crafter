import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

	transform(items: any[], searchText: string, searchMode: string): any[] {
		if (!items) return [];
		if (!searchText && !searchMode) return items;
		searchText = searchText.toLowerCase();
		searchMode = searchMode.toLowerCase();
		return items.filter(item => {
			let itemsSearchedByMode = item.modes.toLowerCase().includes(searchMode);
			return item.name.toLowerCase().includes(searchText) && itemsSearchedByMode;
		});
	}

}
