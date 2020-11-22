import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { GAMEMODES, ORDERBY, ORDERMODES } from 'server/data/data';


import { Champion } from 'src/app/core/models/champion';
import { Item, EMPTY_ITEM, ItemRestrictions } from 'src/app/core/models/item';
import { Runes } from 'src/app/core/models/rune';
import { TargetDetails } from 'src/app/core/models/target';

import { ChampionService } from 'src/app/core/services/champion.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
	selector: 'item-selector',
	templateUrl: './item-selector.component.html',
	styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

	items$: Observable<Item[]>;
	gamemodes = GAMEMODES;
	ordersBy = ORDERBY;
	orderModes = ORDERMODES;
	orderBy: string = this.ordersBy[0].orderByValue;
	orderMode: string = this.orderModes[0].orderModeValue;
	searchMode: string = "all";
	searchText: string = "";

	@Input('champion') champion: Champion;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: Runes;
	@Input("targetDetails") targetDetails: TargetDetails;
	@Input("itemRestrictions") selectedItemRestrictions: ItemRestrictions;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;
	@Input("selectedPage") selectedPage: string;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('itemRestrictions') selectedItemRestrictionsEmitter = new EventEmitter<ItemRestrictions>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();

	constructor(private championService: ChampionService, private apiService: ApiService) { }
	ngOnInit(): void {
		this.items$ = this.apiService.getItems();
	}

	/**
	 * Method that determines if the item is allowed given the champion and item restrictions
	 * Legendary and Mythic items are unique.
	 * You can build as many legendaries, but can only choose one: if inven doesn't have same item, allowed else false
	 * You can build only one Mythic: if inven doesn't have mythic, allowed else false
	 * @param  {Item} itemDetails item info to test validity
	 * @returns boolean
	 */
	isItemAllowed(itemDetails: Item): boolean {
		if (itemDetails.visible == false) {
			// can't add items that are 'invisible'
			return false;
		}
		if (this.selectedItemRestrictions.hasHexcore == true && itemDetails.shared_item == "hexcore") {
			return false;
		}
		if (this.selectedItemRestrictions.hasGoldOrJg == true && itemDetails.shared_item == "goldjg") {
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
				if (masterworkItem.apiname == itemDetails.apiname) {
					return false;
				} else if (masterworkItem.apiname != "") {
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
		if (this.champion.currentLevel >= 9) {
			this.selectedElixir = selectedElixir;
			this.emitSelectedItems();
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
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
			if (itemDetails.shared_item == "hexcore") {
				this.selectedItemRestrictions.hasHexcore = true;
			}
			if (itemDetails.shared_item == "goldjg") {
				this.selectedItemRestrictions.hasGoldOrJg = true;
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
					// deep copy the object so it doesn't reference the same object. This is important because some objects allow multiple stacking (eg. rod of ages)
					this.selectedItems[itemIndex] = JSON.parse(JSON.stringify(itemDetails));
					// check if the item we're adding is an ornn item and there's an open space -> break after finding
					if (itemDetails.apiname.includes("masterwork")) {
						for (let masterworkIndex in this.selectedItemRestrictions.masterworkItems) {
							let masterworkItem = this.selectedItemRestrictions.masterworkItems[masterworkIndex];
							if (masterworkItem.apiname == '') {
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
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
			// this.statsService.postCalculations(this.champion, this.currentLevel, itemAdditions);
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
		this.selectedPageEmitter.emit("runes-epic");
	}
	switchToEpicMonsterPage() {
		this.selectedPageEmitter.emit("epic-monsters");
	}
	isVisible(itemDetails: Item) {
		return itemDetails.visible;
	}
	isVisibleClass(itemDetails: Item) {
		return itemDetails.visible ? 'visible-item' : 'invisible-item';
	}

}
