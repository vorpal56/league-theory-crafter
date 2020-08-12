import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';
import { EMPTY_ITEM, ITEMS } from '../items';
import { ChampionService } from '../services/champion.service';
import { Champion } from '../models/champion';

@Component({
	selector: 'inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
	}
	@Input("selectedChampion") champion: Champion;
	@Input("currentLevel") currentLevel: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("itemRestrictions") selectedItemRestrictions: any;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('itemRestrictions') selectedItemRestrictionsEmitter = new EventEmitter<any>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();


	selectedSlotIsStackable(itemDetails: Item): boolean {
		return itemDetails.stackable;
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
	removeElixir() {
		this.selectedElixir = EMPTY_ITEM;
		this.emitSelectedItems();
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}
	removeItem(itemDetails: Item, index?: number): void {
		console.log(index);
		if (itemDetails.shared_item.name == "goldjg") {
			this.selectedItemRestrictions.hasGoldOrJg = false;
		}
		if (itemDetails.shared_item.name == "dread") {
			this.selectedItemRestrictions.hasSealOrMejais = false;
			itemDetails.stacked = false;
		}
		if (itemDetails.boots_ms != 0) {
			this.selectedItemRestrictions.hasBoots = false;
		}
		if (itemDetails.tags.includes("tear")) {
			this.selectedItemRestrictions.hasTear = false;
		}
		// replace the item at index with an empty item
		this.selectedItems.splice(index, 1, EMPTY_ITEM);
		// replace the item in the masterworkItems as well
		if (itemDetails.apiname.includes("masterwork")) {
			for (let masterworkIndex in this.selectedItemRestrictions.masterworkItems) {
				let masterworkItem = this.selectedItemRestrictions.masterworkItems[masterworkIndex];
				if (masterworkItem == itemDetails) {
					this.selectedItemRestrictions.masterworkItems.splice(Number(masterworkIndex), 1, EMPTY_ITEM);
					break;
				}
			}
		}

		// console.log(this.selectedItems);
		this.numberOfEquippedItems -= 1;
		this.emitSelectedItems();
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
				for (let masterworkIndex in this.selectedItemRestrictions.masterworkItems) {
					let masterworkItem = this.selectedItemRestrictions.masterworkItems[masterworkIndex];
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
	/**
	 * Method that emits the selected items 
	 * Called on parent component on ngAfterViewInit
	 * @returns void
	 */
	emitSelectedItems(): void {
		this.selectedItemsEmitter.emit(this.selectedItems);
		this.selectedElixirEmitter.emit(this.selectedElixir);
		this.selectedItemRestrictionsEmitter.emit(this.selectedItemRestrictions);
		// console.log("emitting number of equipped items on removal", this.selectedItems);
		this.numberOfEquippedItemsEmitter.emit(this.numberOfEquippedItems);
		return;
	}
}
