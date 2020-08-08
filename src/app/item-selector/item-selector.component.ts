import { Component, OnInit, Input } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from "../models/champion";
import { GAMEMODES } from ".././data";
import { ITEMS } from ".././items";

@Component({
	selector: 'item-selector',
	templateUrl: './item-selector.component.html',
	styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
	}
	items = ITEMS;
	gamemodes = GAMEMODES;
	searchText: string = "";
	searchMode: string = "all";
	@Input('selectedChampion') champion: Champion;
	selectedItems: any[] = [];

	addItem(itemDetails) {
		if (this.selectedItems.length < 6) {
			this.selectedItems.push(itemDetails);
			this.championService.addItemStats(this.champion, this.selectedItems);
		}
	}
	removeItem(itemDetails, index) {
		this.selectedItems.splice(index, 1);
	}
	selectedItemsIsEmpty() {
		return this.selectedItems.length > 0 ? true : false;
	}
	clearSelectedItems() {
		this.selectedItems = [];
	}

}

