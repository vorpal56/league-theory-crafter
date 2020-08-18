import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Champion } from "../models/champion";
import { Item, ItemRestrictions } from "../models/item";
import { GAMEMODES, ORDERBY, ORDERMODES } from ".././data";
import { ITEMS, EMPTY_ITEM } from ".././items";
import { ItemsService } from '../services/items.service';
import { StatsService } from '../services/stats.service';

@Component({
	selector: 'item-selector',
	templateUrl: './item-selector.component.html',
	styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

	constructor(private itemsService: ItemsService, private statsService: StatsService) { }

	ngOnInit(): void {
		// this.addItem(ITEMS[83]);
	}

	items = ITEMS;
	gamemodes = GAMEMODES;
	ordersBy = ORDERBY;
	orderModes = ORDERMODES;
	searchText: string = "";
	searchMode: string = "all";
	orderBy: string = this.ordersBy[0].orderByValue;
	orderMode: string = this.orderModes[0].orderModeValue;

	@Input('selectedChampion') champion: Champion;
	@Input('currentLevel') currentLevel: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("itemRestrictions") selectedItemRestrictions: ItemRestrictions;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;
	@Input("selectedPage") selectedPage: string;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('itemRestrictions') selectedItemRestrictionsEmitter = new EventEmitter<ItemRestrictions>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();


	/**
	 * Method that determines if the item is allowed given the champion and item restrictions
	 * @param  {Item} itemDetails item info to test validity
	 * @returns boolean
	 */
	isItemAllowed(itemDetails: Item): boolean {
		if (itemDetails.visible == false) {
			// can't add items that are 'invisible'
			return false;
		}
		if (this.selectedItemRestrictions.hasHexcore == true && itemDetails.shared_item.name == "hexcore") {
			return false;
		}
		if (this.selectedItemRestrictions.hasGoldOrJg == true && itemDetails.shared_item.name == "goldjg") {
			return false;
		}
		if (this.selectedItemRestrictions.hasSealOrMejais == true && itemDetails.shared_item.name == "dread") {
			return false;
		}
		if (this.selectedItemRestrictions.hasBoots == true && itemDetails.boots_ms) {
			return false;
		}
		if (this.selectedItemRestrictions.hasTear == true && itemDetails.tags.includes("tear")) {
			return false;
		}
		if (itemDetails.apiname.includes("masterwork")) {
			let occupiedSlots = 0;
			for (let masterworkIndex in this.selectedItemRestrictions.masterworkItems) {
				let masterworkItem = this.selectedItemRestrictions.masterworkItems[masterworkIndex];
				if (masterworkItem == itemDetails) {
					return false;
				} else if (masterworkItem != EMPTY_ITEM) {
					occupiedSlots += 1;
				}
			}
			if (this.champion.name == "Ornn" && occupiedSlots == 2) {
				return false;
			} else if (this.champion.name != "Ornn" && occupiedSlots == 1) {
				return false;
			}
		}
		return this.numberOfEquippedItems != 6;
	}

	addElixir(selectedElixir: Item) {
		if (this.currentLevel >= 9) {
			this.selectedElixir = selectedElixir;
			console.log("added elixir");
			this.emitSelectedItems();
			this.statsService.adjustBaseStats(this.champion, this.currentLevel);
			this.itemsService.addItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		} else {
			alert("need to be lvl 9 or more");
		}
	}
	/**
	 * Method that adds the item so long as its allowed to
	 * Called on (click) for searchable items
	 * @param  {Item} itemDetails item info to add in items
	 * @returns void
	 */
	addItem(itemDetails: Item): void {
		if (itemDetails.name.toLowerCase().includes("elixir") && itemDetails != this.selectedElixir) {
			this.addElixir(itemDetails);
		} else if (this.isItemAllowed(itemDetails) && itemDetails != this.selectedElixir) {
			if (itemDetails.shared_item.name == "hexcore") {
				this.selectedItemRestrictions.hasHexcore = true;
			}
			if (itemDetails.shared_item.name == "goldjg") {
				this.selectedItemRestrictions.hasGoldOrJg = true;
			}
			if (itemDetails.shared_item.name == "dread") {
				this.selectedItemRestrictions.hasSealOrMejais = true;
			}
			if (itemDetails.boots_ms != 0) {
				this.selectedItemRestrictions.hasBoots = true;
			}
			if (itemDetails.tags.includes("tear")) {
				this.selectedItemRestrictions.hasTear = true;
			}
			// go through the items and change the first empty item to the selected item -> break afterwards
			for (let itemIndex in this.selectedItems) {
				if (this.selectedItems[itemIndex] == EMPTY_ITEM) {
					this.selectedItems[itemIndex] = itemDetails;
					// check if the item we're adding is an ornn item and there's an open space -> break after finding
					if (itemDetails.apiname.includes("masterwork")) {
						for (let masterworkIndex in this.selectedItemRestrictions.masterworkItems) {
							let masterworkItem = this.selectedItemRestrictions.masterworkItems[masterworkIndex];
							if (masterworkItem == EMPTY_ITEM) {
								this.selectedItemRestrictions.masterworkItems[masterworkIndex] = itemDetails;
								break;
							}
						}
					}
					break;
				}
			}
			this.numberOfEquippedItems += 1;
			this.emitSelectedItems();
			this.statsService.adjustBaseStats(this.champion, this.currentLevel);
			this.itemsService.addItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		}
		return;
	}
	/**
	 * Method that removes the item from the inventory
	 * Called on (click) on the item inventory
	 * @param  {Item} itemDetails item info to remove from the inventory
	 * @param  {number} index? the index passed to replace the item with and EMPTY_ITEM
	 * @returns void
	 */
	/**
	 * Method that checks if all items are empty
	 * @returns boolean
	 */
	selectedItemsIsEmpty(): boolean {
		let isEmpty = true;
		for (let itemIndex in this.selectedItems) {
			if (this.selectedItems[itemIndex] != EMPTY_ITEM) {
				return false;
			}
		}
		if (this.selectedElixir != EMPTY_ITEM) {
			return false;
		}
		return isEmpty;
	}
	/**
	 * Method that emits the selected items
	 * Called on parent component on ngAfterViewInit
	 * @returns void
	 */
	emitSelectedItems(): void {
		this.selectedItemsEmitter.emit(this.selectedItems);
		this.selectedElixirEmitter.emit(this.selectedElixir);
		this.selectedItemRestrictionsEmitter.emit(this.selectedItemRestrictions);
		// console.log("emitting number of equipped items on adding", this.selectedItems);
		this.numberOfEquippedItemsEmitter.emit(this.numberOfEquippedItems);
		return;
	}

	isInventoryFull() {
		let count = 0;
		for (let i in this.selectedItems) {
			if (this.selectedItems[i] != EMPTY_ITEM) {
				count += 1;
			}
		}
		return count == this.selectedItems.length;
	}

	switchToRunesPage() {
		this.selectedPageEmitter.emit("runes");
	}

	isVisible(itemDetails: Item) {
		return itemDetails.visible ? 'visible-item' : 'invisible-item';
	}
}

