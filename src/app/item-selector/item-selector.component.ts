import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from "../models/champion";
import { Item } from "../models/item";
import { GAMEMODES, ORDERBY } from ".././data";
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
	ordersBy = ORDERBY;
	searchText: string = "cinderhulk";
	searchMode: string = "all";
	orderBy: string = this.ordersBy[0].orderByValue;
	@Input('selectedChampion') champion: Champion;
	@Input('currentLevel') currentLevel: number;
	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<Array<Item>>();
	selectedItems: Array<Item> = [];
	selectedElixir: Item = null;
	selectedItemsRestrictions = { "hasGoldOrJg": false, "hasBoots": false };

	isItemAllowed(selectedItem: Item) {
		if (this.selectedItemsRestrictions.hasGoldOrJg == true && selectedItem.shared_item == "enchantments") {
			return false;
		}
		if (this.selectedItemsRestrictions.hasBoots == true && selectedItem.boots_ms) {
			return false;
		}
		return true;
	}
	replaceElixir(selectedElixir: Item) {
		console.log("here you would replace", selectedElixir);
	}
	addItem(itemDetails: Item) {
		if (this.selectedItems.length < 6 && this.isItemAllowed(itemDetails)) {
			if (itemDetails.shared_item == "enchantments") {
				this.selectedItemsRestrictions.hasGoldOrJg = true;
			}
			if (itemDetails.boots_ms != 0) {
				this.selectedItemsRestrictions.hasBoots = true;
			}
			if (itemDetails.name.toLowerCase().includes("elixir")) {
				this.selectedElixir = itemDetails;
			} else {
				this.selectedItems.push(itemDetails);
			}

			this.selectedItemsEmitter.emit(this.selectedItems);
			this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
		}
	}
	removeItem(itemDetails: Item, index: number) {
		if (itemDetails.shared_item == "enchantments") {
			this.selectedItemsRestrictions.hasGoldOrJg = false;
		}
		if (itemDetails.boots_ms != 0) {
			this.selectedItemsRestrictions.hasBoots = false;
		}
		if (itemDetails.name.toLowerCase().includes("elixir")) {
			this.selectedElixir = null;
		} else {
			this.selectedItems.splice(index, 1);
		}
		this.selectedItemsEmitter.emit(this.selectedItems);
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
	}

	selectedItemsIsEmpty() {
		return this.selectedItems.length > 0 ? true : false;
	}
	clearSelectedItems() {
		this.selectedItems = [];
		this.selectedElixir = null;
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}

}

