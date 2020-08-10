import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from "../models/champion";
import { Item } from "../models/item";
import { GAMEMODES, ORDERBY, ORDERMODES } from ".././data";
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
	orderModes = ORDERMODES;
	searchText: string = "";
	searchMode: string = "all";
	orderBy: string = this.ordersBy[0].orderByValue;
	orderMode: string = this.orderModes[0].orderModeValue;
	@Input('selectedChampion') champion: Champion;
	@Input('currentLevel') currentLevel: number;
	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	selectedItems: [Item, Item, Item, Item, Item, Item] = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
	selectedElixir: Item = EMPTY_ITEM;
	selectedItemsRestrictions = { "hasGoldOrJg": false, "hasBoots": false, "hasTear": false, "masterworkItems": [EMPTY_ITEM, EMPTY_ITEM] };
	previousChampion: Champion;

	/**
	 * Method that determines if the item is allowed given the champion and item restrictions
	 * @param  {Item} itemDetails item info to test validity
	 * @returns boolean
	 */
	isItemAllowed(itemDetails: Item): boolean {
		if (this.selectedItemsRestrictions.hasGoldOrJg == true && itemDetails.shared_item == "goldjg") {
			return false;
		}
		if (this.selectedItemsRestrictions.hasBoots == true && itemDetails.boots_ms) {
			return false;
		}
		if (this.selectedItemsRestrictions.hasTear == true && itemDetails.tags.includes("tear")) {
			return false;
		}
		if (this.currentLevel < 9 && itemDetails.name.toLowerCase().includes("elixir")) {
			alert("Elixirs are available when level 9 or greater");
			return false;
		}
		if (itemDetails.shared_item == "masterwork") {
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
		return true;
	}
	/**
	 * Method that adds the item so long as its allowed to 
	 * Called on (click) for searchable items
	 * @param  {Item} itemDetails item info to add in items
	 * @returns void
	 */
	addItem(itemDetails: Item): void {
		if (this.isItemAllowed(itemDetails)) {
			if (itemDetails.shared_item == "goldjg") {
				this.selectedItemsRestrictions.hasGoldOrJg = true;
			}
			if (itemDetails.boots_ms != 0) {
				this.selectedItemsRestrictions.hasBoots = true;
			}
			if (itemDetails.tags.includes("tear")) {
				this.selectedItemsRestrictions.hasTear = true;
			}
			if (itemDetails.name.toLowerCase().includes("elixir")) {
				this.selectedElixir = itemDetails;
			} else {
				// go through the items and change the first empty item to the selected item -> break afterwards
				for (let itemIndex in this.selectedItems) {
					if (this.selectedItems[itemIndex] == EMPTY_ITEM) {
						this.selectedItems[itemIndex] = itemDetails;
						// check if the item we're adding is an ornn item and there's an open space -> break after finding
						if (itemDetails.shared_item == "masterwork") {
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
			}
			this.selectedItemsEmitter.emit(this.selectedItems);
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
		if (itemDetails.shared_item == "goldjg") {
			this.selectedItemsRestrictions.hasGoldOrJg = false;
		}
		if (itemDetails.boots_ms != 0) {
			this.selectedItemsRestrictions.hasBoots = false;
		}
		if (itemDetails.tags.includes("tear")) {
			this.selectedItemsRestrictions.hasTear = false;
		}
		if (itemDetails.name.toLowerCase().includes("elixir")) {
			this.selectedElixir = EMPTY_ITEM;
		} else {
			// replace the item at index with an empty item
			this.selectedItems.splice(index, 1, EMPTY_ITEM);
			// replace the item in the masterworkItems as well
			if (itemDetails.shared_item == "masterwork") {
				for (let masterworkIndex in this.selectedItemsRestrictions.masterworkItems) {
					let masterworkItem = this.selectedItemsRestrictions.masterworkItems[masterworkIndex];
					if (masterworkItem == itemDetails) {
						this.selectedItemsRestrictions.masterworkItems.splice(Number(masterworkIndex), 1, EMPTY_ITEM);
						break;
					}
				}
			}
		}
		this.selectedItemsEmitter.emit(this.selectedItems);
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
			} else if (item.shared_item == "masterwork" && selectedChampion.name != "Ornn") {
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
		this.selectedItemsEmitter.emit(this.selectedItems);
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

}

