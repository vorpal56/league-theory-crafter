import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from "../models/champion";
import { Item } from "../models/item";
import { GAMEMODES, ORDERBY } from ".././data";
import { ITEMS, EMPTY_ITEM } from ".././items";

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
	searchText: string = "";
	searchMode: string = "all";
	orderBy: string = this.ordersBy[0].orderByValue;
	@Input('selectedChampion') champion: Champion;
	@Input('currentLevel') currentLevel: number;
	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	selectedItems: [Item, Item, Item, Item, Item, Item] = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
	selectedElixir: Item = EMPTY_ITEM;
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
	addItem(itemDetails: Item) {
		if (this.isItemAllowed(itemDetails)) {
			if (itemDetails.shared_item == "enchantments") {
				this.selectedItemsRestrictions.hasGoldOrJg = true;
			}
			if (itemDetails.boots_ms != 0) {
				this.selectedItemsRestrictions.hasBoots = true;
			}
			if (itemDetails.name.toLowerCase().includes("elixir")) {
				this.selectedElixir = itemDetails;
			} else {
				for (let itemIndex in this.selectedItems) {
					if (this.selectedItems[itemIndex].name == "Empty") {
						this.selectedItems[itemIndex] = itemDetails;
						break;
					}
				}
			}
			this.selectedItemsEmitter.emit(this.selectedItems);
			this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
		}
	}
	removeItem(itemDetails: Item, index?: number) {
		if (itemDetails.shared_item == "enchantments") {
			this.selectedItemsRestrictions.hasGoldOrJg = false;
		}
		if (itemDetails.boots_ms != 0) {
			this.selectedItemsRestrictions.hasBoots = false;
		}
		if (itemDetails.name.toLowerCase().includes("elixir")) {
			this.selectedElixir = EMPTY_ITEM;
		} else {
			this.selectedItems.splice(index, 1, EMPTY_ITEM);
		}
		this.selectedItemsEmitter.emit(this.selectedItems);
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
	}
	selectedSlotIsFree(itemDetails: Item) {
		return itemDetails.name == "Empty" ? true : false;
	}
	selectedSlotIsFreeClass(itemDetails: Item) {
		return itemDetails.name == "Empty" ? "empty-padding" : "";
	}
	selectedItemsIsEmpty() {
		let isEmpty = true;
		for (let itemIndex in this.selectedItems) {
			if (this.selectedItems[itemIndex].name != "Empty") {
				return false;
			}
		}
		if (this.selectedElixir == EMPTY_ITEM) {
			return false;
		}
		return isEmpty;
	}
	clearSelectedItems() {
		this.selectedItems = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
		this.selectedElixir = EMPTY_ITEM;
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}

}

