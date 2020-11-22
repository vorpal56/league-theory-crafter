import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ITEMS } from 'server/data/updated_items_merkai';

import { Champion } from 'src/app/core/models/champion';
import { Item, EMPTY_ITEM, ItemRestrictions } from 'src/app/core/models/item';
import { Runes } from 'src/app/core/models/rune';
import { TargetDetails } from 'src/app/core/models/target';

import { ChampionService } from 'src/app/core/services/champion.service';

@Component({
	selector: 'inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent implements OnInit {

	@Input("champion") champion: Champion;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: Runes;
	@Input("targetDetails") targetDetails: TargetDetails;
	@Input("itemRestrictions") selectedItemRestrictions: ItemRestrictions;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('itemRestrictions') selectedItemRestrictionsEmitter = new EventEmitter<ItemRestrictions>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();

	muramana: Item;
	seraphs: Item;

	items: Item[] = ITEMS;

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
		this.emitSelectedItems();
	}
	/**
	 * Method that clears all the selected items including potions (sets them to EMPTY_ITEM)
	 * adjusts base and item stats afterwards
	 * @returns void
	 */
	clearSelectedItems(): void {
		if (this.numberOfEquippedItems != 0 || this.selectedElixir != EMPTY_ITEM) {
			this.selectedItems = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
			this.selectedElixir = EMPTY_ITEM;
			this.numberOfEquippedItems = 0;
			this.emitSelectedItems();
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		}
		return;
	}
	/**
	 * Method to check if the selected slot is free
	 * @param  {Item} itemDetails item to test validity
	 * @returns boolean
	 */
	selectedSlotIsFree(itemDetails: Item, a?: number): boolean {
		return itemDetails == EMPTY_ITEM ? true : false;
	}
	removeItem(itemDetails: Item, index?: number, runService: boolean = true): void {
		// we check if there exists an item directly on the template
		if (itemDetails.shared_item == "hexcore") {
			this.selectedItemRestrictions.hasHexcore = false;
		}
		if (itemDetails.shared_item == "goldjg") {
			this.selectedItemRestrictions.hasGoldOrJg = false;
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
				if (masterworkItem.apiname == itemDetails.apiname) {
					this.selectedItemRestrictions.masterworkItems.splice(Number(masterworkIndex), 1, EMPTY_ITEM);
					break;
				}
			}
		}

		this.numberOfEquippedItems -= 1;
		this.emitSelectedItems();
		if (runService) {
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		}
		return;
	}
	/**
	 * Method that removes any invalid items depending on the selected champion restrictions including boots, hexcore items, ornn items, etc.
	 * Called by parent component on (change)
	 * @param  {Champion} champion the champion that was changed into -> previous selected champion is on this.champion when called -> model doesn't update immediately?
	 * @param  {number} currentLevel the level that was changed into -> previous selected level is on this.currentLevel when called -> model doesn't update immediately?
	 * @returns void
	 */
	removeInvalidItemsBasedOnChampion(champion: Champion): void {
		let runService = false;
		this.selectedItems.forEach((item, index) => {
			let championRangeType = champion["rangetype"].toLowerCase();
			if (champion.name == "Cassiopeia" && item.boots_ms != 0) {
				this.removeItem(item, index, runService);
			} else if (champion.name != "Viktor" && item.apiname.includes("hexcore")) {
				this.removeItem(item, index, runService);
			} else if (item.allowed_to.melee && !item.allowed_to.ranged && championRangeType == "ranged") {
				this.removeItem(item, index, runService);
			} else if (item.allowed_to.ranged && !item.allowed_to.melee && championRangeType == "melee") {
				this.removeItem(item, index, runService);
			} else if (item.apiname.includes("masterwork") && champion.name != "Ornn") {
				let occupiedSlots = 0;
				// look at this logic again and see if there is a logically better way of doing this
				// remove any ornn items that can't be held in the inventory on switching champs
				// ornn can hold 2, others can hold only 1
				for (let masterworkIndex in this.selectedItemRestrictions.masterworkItems) {
					let masterworkItem = this.selectedItemRestrictions.masterworkItems[masterworkIndex];
					if (masterworkItem.apiname != '') {
						occupiedSlots += 1;
					}
				}
				if (occupiedSlots > 1) {
					this.removeItem(item, index, runService);
				}
			}
		});
		// this.emitSelectedItems();
		return;
	}
	/**
	 * @param  {Champion} champion? this is an optional param that is passed from the parent component
	 * there are reasons why we pass it here.
	 * on the html, the param is not there. since elixirs are only available at level >=9, we reference this.champion.
	 * when we want to remove the elixir when the level is updated, the champion component does not actually receive the changes
	 * of the elixir changes. the stack follows:
	 * 1. update level -> emit champion change
	 * 2. parent sets champion and calls this method
	 * 3. apply component changes
	 * 4. run apply component changes again (but does not receive the elixir changes) -> incorrect calculation
	 * the main idea is that we need to only call component changes once if the level is updated
	 */
	removeElixir(champion?: Champion) {
		if (champion) {
			if (this.selectedElixir != EMPTY_ITEM && champion.currentLevel < 9) {
				this.selectedElixir = EMPTY_ITEM;
				this.selectedElixirEmitter.emit(this.selectedElixir);
			}
		} else {
			this.selectedElixir = EMPTY_ITEM;
			this.selectedElixirEmitter.emit(this.selectedElixir);
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		}
		return;
	}
	setStackedSelectedItem(isStacked: boolean, index: number): void {
		if (isStacked == true && this.selectedItems[index].apiname == "manamune") {
			this.selectedItems[index] = environment.production ? this.items[99] : this.muramana;
		} else if (isStacked == true && this.selectedItems[index].apiname == "archangelsstaff") {
			this.selectedItems[index] = environment.production ? this.items[133] : this.seraphs;
		} else {
			this.selectedItems[index].stacked = isStacked;
		}
		this.emitSelectedItems();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
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
}
