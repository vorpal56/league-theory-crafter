import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from "../models/champion";
import { Item } from "../models/item";
import { GAMEMODES, ORDERBY, ORDERMODES } from ".././data";
import { ITEMS, EMPTY_ITEM } from ".././items";
import { HashLocationStrategy } from '@angular/common';

@Component({
	selector: 'item-selector',
	templateUrl: './item-selector.component.html',
	styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
		// this.addItem(ITEMS[83]);
	}

	items = ITEMS;
	gamemodes = GAMEMODES;
	ordersBy = ORDERBY;
	orderModes = ORDERMODES;
	searchText: string = "x";
	searchMode: string = "all";
	orderBy: string = this.ordersBy[0].orderByValue;
	orderMode: string = this.orderModes[0].orderModeValue;
	@Input('selectedChampion') champion: Champion;
	@Input('currentLevel') currentLevel: number;
	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	selectedItems: [Item, Item, Item, Item, Item, Item] = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
	selectedElixir: Item = EMPTY_ITEM;
	selectedItemsRestrictions = { "hasGoldOrJg": false, "hasBoots": false, "hasTear": false, "hasMejaisSeaL": false, "masterworkItems": [EMPTY_ITEM, EMPTY_ITEM] };
	numberOfEquippableItems = 0;

	/**
	 * Method that determines if the item is allowed given the champion and item restrictions
	 * @param  {Item} itemDetails item info to test validity
	 * @returns boolean
	 */
	isItemAllowed(itemDetails: Item): boolean {
		if (this.selectedItemsRestrictions.hasGoldOrJg == true && itemDetails.shared_item.name == "goldjg") {
			return false;
		}
		if (this.selectedItemsRestrictions.hasMejaisSeaL == true && itemDetails.shared_item.name == "dread") {
			return false;
		}
		if (this.selectedItemsRestrictions.hasBoots == true && itemDetails.boots_ms) {
			return false;
		}
		if (this.selectedItemsRestrictions.hasTear == true && itemDetails.tags.includes("tear")) {
			return false;
		}
		if (itemDetails.apiname.includes("masterwork")) {
			let occupiedSlots = 0;
			for (let masterworkIndex in this.selectedItemsRestrictions.masterworkItems) {
				let masterworkItem = this.selectedItemsRestrictions.masterworkItems[masterworkIndex];
				if (masterworkItem == itemDetails) {
					return false;
				} else if (masterworkItem != EMPTY_ITEM) {
					occupiedSlots += 1;
				}
			}
			if (this.champion.name == "Ornn") {
				if (occupiedSlots == 2) {
					return false;
				}
			} else {
				if (occupiedSlots == 1) {
					return false;
				}
			}
		}
		return this.numberOfEquippableItems != 6;
	}
	removeElixir() {
		this.selectedElixir = EMPTY_ITEM;
		this.emitSelectedItems();
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}
	addElixir(selectedElixir: Item) {
		if (this.currentLevel >= 9) {
			this.selectedElixir = selectedElixir;
			this.emitSelectedItems();
			this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
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
			if (itemDetails.shared_item.name == "goldjg") {
				this.selectedItemsRestrictions.hasGoldOrJg = true;
			}
			if (itemDetails.shared_item.name == "dread") {
				this.selectedItemsRestrictions.hasMejaisSeaL = true;
			}
			if (itemDetails.boots_ms != 0) {
				this.selectedItemsRestrictions.hasBoots = true;
			}
			if (itemDetails.tags.includes("tear")) {
				this.selectedItemsRestrictions.hasTear = true;
			}
			// go through the items and change the first empty item to the selected item -> break afterwards
			for (let itemIndex in this.selectedItems) {
				if (this.selectedItems[itemIndex] == EMPTY_ITEM) {
					this.selectedItems[itemIndex] = itemDetails;
					// check if the item we're adding is an ornn item and there's an open space -> break after finding
					if (itemDetails.apiname.includes("masterwork")) {
						for (let masterworkIndex in this.selectedItemsRestrictions.masterworkItems) {
							let masterworkItem = this.selectedItemsRestrictions.masterworkItems[masterworkIndex];
							if (masterworkItem == EMPTY_ITEM) {
								this.selectedItemsRestrictions.masterworkItems[masterworkIndex] = itemDetails;
								break;
							}
						}
					}
					break;
				}
			}
			this.numberOfEquippableItems += 1;
			this.emitSelectedItems();
			this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
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
	removeItem(itemDetails: Item, index?: number): void {
		if (itemDetails.shared_item.name == "goldjg") {
			this.selectedItemsRestrictions.hasGoldOrJg = false;
		}
		if (itemDetails.shared_item.name == "dread") {
			this.selectedItemsRestrictions.hasMejaisSeaL = false;
			itemDetails.stacked = false;
		}
		if (itemDetails.boots_ms != 0) {
			this.selectedItemsRestrictions.hasBoots = false;
		}
		if (itemDetails.tags.includes("tear")) {
			this.selectedItemsRestrictions.hasTear = false;
		} else {
			// replace the item at index with an empty item
			this.selectedItems.splice(index, 1, EMPTY_ITEM);
			// replace the item in the masterworkItems as well
			if (itemDetails.apiname.includes("masterwork")) {
				for (let masterworkIndex in this.selectedItemsRestrictions.masterworkItems) {
					let masterworkItem = this.selectedItemsRestrictions.masterworkItems[masterworkIndex];
					if (masterworkItem == itemDetails) {
						this.selectedItemsRestrictions.masterworkItems.splice(Number(masterworkIndex), 1, EMPTY_ITEM);
						break;
					}
				}
			}
		}
		this.numberOfEquippableItems -= 1;
		this.emitSelectedItems();
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		return;
	}
	selectedSlotIsStackable(itemDetails: Item): boolean {
		return itemDetails.stackable;
	}
	/**
	 * Method to check if the selected slot is free
	 * @param  {Item} itemDetails item to test validity
	 * @returns boolean
	 */
	selectedSlotIsFree(itemDetails: Item): boolean {
		return itemDetails == EMPTY_ITEM ? true : false;
	}
	/**
	 * Method to check if the selected slot is free and apply certain returned class
	 * @param  {Item} itemDetails item to test validity
	 * @returns string
	 */
	selectedSlotIsFreeClass(itemDetails: Item): string {
		return itemDetails == EMPTY_ITEM ? "empty-slot-padding" : "";
	}
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
	 * Method that clears all the selected items including potions (sets them to EMPTY_ITEM)
	 * adjusts base and item stats afterwards
	 * @returns void
	 */
	clearSelectedItems(): void {
		this.selectedItems = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
		this.selectedElixir = EMPTY_ITEM;
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		return;
	}
	/**
	 * Method that removes any invalid items depending on the selected champion restrictions including boots, hexcore items, ornn items, etc.
	 * Called by parent component on (change)
	 * @param  {Champion} selectedChampion the champion that was changed into -> previous selected champion is on this.champion when called -> model doesn't update immediately?
	 * @param  {number} currentLevel the level that was changed into -> previous selected level is on this.currentLevel when called -> model doesn't update immediately?
	 * @returns void
	 */
	removeInvalidItemsBasedOnChampion(selectedChampion: Champion, currentLevel: number): void {
		this.selectedItems.forEach((item, index) => {
			let championRangeType = selectedChampion["rangetype"].toLowerCase();
			if (selectedChampion.name == "Cassiopeia" && item.boots_ms != 0) {
				this.removeItem(item, index);
			} else if (selectedChampion.name != "Viktor" && item.apiname.includes("hexcore")) {
				this.removeItem(item, index);
			} else if (item.allowed_to.melee && !item.allowed_to.ranged && championRangeType == "ranged") {
				this.removeItem(item, index);
			} else if (item.allowed_to.ranged && !item.allowed_to.melee && championRangeType == "melee") {
				this.removeItem(item, index);
			} else if (item.apiname.includes("masterwork") && selectedChampion.name != "Ornn") {
				let occupiedSlots = 0;
				// look at this logic again and see if there is a logically better way of doing this
				// remove any ornn items that can't be held in the inventory on switching champs
				// ornn can hold 2, others can hold only 1
				for (let masterworkIndex in this.selectedItemsRestrictions.masterworkItems) {
					let masterworkItem = this.selectedItemsRestrictions.masterworkItems[masterworkIndex];
					if (masterworkItem != EMPTY_ITEM) {
						occupiedSlots += 1;
					}
				}
				if (occupiedSlots > 1) {
					this.removeItem(item, index);
				}
			}
		});
		this.emitSelectedItems();
		this.championService.adjustBaseAndItemStats(selectedChampion, currentLevel, this.selectedItems, this.selectedElixir);
		return;
	}
	/**
	 * Method that removes elixir slot if the champion level is below the required level
	 * Called by parent component on (change)
	 * @param  {number} currentLevel the level that was changed into -> previous selected level is on this.currentLevel when called -> model doesn't update immediately?
	 * @returns void
	 */
	removeInvalidElixirBasedOnLevel(currentLevel: number): void {
		if (currentLevel < 9) {
			this.selectedElixir = EMPTY_ITEM;
		}
	}
	/**
	 * Method that emits the selected items 
	 * Called on parent component on ngAfterViewInit
	 * @returns void
	 */
	emitSelectedItems(): void {
		this.selectedItemsEmitter.emit(this.selectedItems);
		this.selectedElixirEmitter.emit(this.selectedElixir);
		return;
	}
	setStackedSelectedItem(isStacked: boolean, index: number): void {
		if (isStacked == true && this.selectedItems[index].apiname == "manamune") {
			this.selectedItems[index] = ITEMS[89];
		} else if (isStacked == true && this.selectedItems[index].apiname == "archangelsstaff") {
			this.selectedItems[index] = ITEMS[120];
		} else {
			this.selectedItems[index].stacked = isStacked;
		}
		// console.log("index to update", index, this.selectedItems, this.selectedItems[index], this.selectedItems[index].stacked, this.selectedItems[0].stacked);
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
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
	allowedToBeStacked(itemDetails: Item): boolean {
		for (let i in this.selectedItems) {
			let item = this.selectedItems[i];
			// console.log(item.stacked, itemDetails.stackable);
			if (item == EMPTY_ITEM) {
				return false;
			}
			console.log(item == itemDetails);
			if (item == itemDetails && itemDetails.stackable && item.stackable) {
				return false;
			}
		}
		return true;
	}
}

