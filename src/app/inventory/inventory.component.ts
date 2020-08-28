import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Item, ItemRestrictions } from '../models/item';
import { EMPTY_ITEM } from '../../../server/data/items';
import { Champion } from '../models/champion';
import { ChampionService } from '../services/champion.service';
import { HttpClient } from '@angular/common/http';


@Component({
	selector: 'inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent implements OnInit {

	@Input("selectedChampion") champion: Champion;
	@Input("currentLevel") currentLevel: number;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: any;
	@Input("stackAllRunes") stackAllRunes: boolean;
	@Input("itemRestrictions") selectedItemRestrictions: ItemRestrictions;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('itemRestrictions') selectedItemRestrictionsEmitter = new EventEmitter<ItemRestrictions>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();

	muramana: Item;
	seraphs: Item;

	constructor(private championService: ChampionService, private http: HttpClient, private cd: ChangeDetectorRef) { }

	ngOnInit(): void {
		// this.selectedItems[0] = ITEMS[134];
		// this.selectedItems[1] = ITEMS[134];
		// this.selectedItems[2] = ITEMS[70];
		// this.selectedItems[3] = ITEMS[70];
		// this.selectedItems[4] = ITEMS[70];
		// this.selectedItems[5] = ITEMS[70];
		// there must be a better way of doing it instead of subscribing on init
		this.http.get<Item>("/api/items/99").subscribe((item: Item) => this.muramana = item[0]);
		this.http.get<Item>("/api/items/133").subscribe((item: Item) => this.seraphs = item[0]);
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
			this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		}
		return;
	}
	/**
	 * Method to check if the selected slot is free
	 * @param  {Item} itemDetails item to test validity
	 * @returns boolean
	 */
	selectedSlotIsFree(itemDetails: Item, a?: number): boolean {
		// if (a) { console.log(itemDetails, itemDetails == EMPTY_ITEM); }
		return itemDetails == EMPTY_ITEM ? true : false;
	}
	removeItem(itemDetails: Item, index?: number): void {
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
				if (masterworkItem == itemDetails) {
					this.selectedItemRestrictions.masterworkItems.splice(Number(masterworkIndex), 1, EMPTY_ITEM);
					break;
				}
			}
		}

		this.numberOfEquippedItems -= 1;
		this.emitSelectedItems();
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		return;
	}
	/**
	 * Method that removes any invalid items depending on the selected champion restrictions including boots, hexcore items, ornn items, etc.
	 * Called by parent component on (change)
	 * @param  {Champion} selectedChampion the champion that was changed into -> previous selected champion is on this.champion when called -> model doesn't update immediately?
	 * @param  {number} currentLevel the level that was changed into -> previous selected level is on this.currentLevel when called -> model doesn't update immediately?
	 * @returns void
	 */
	removeInvalidItemsBasedOnChampion(selectedChampion: Champion): void {
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
		// this.emitSelectedItems();
		return;
	}
	removeElixir(currentLevel?: number) {
		if (!currentLevel) {
			currentLevel = this.currentLevel;
		}
		if (this.selectedElixir != EMPTY_ITEM || currentLevel < 9) {
			this.selectedElixir = EMPTY_ITEM;
			this.selectedElixirEmitter.emit(this.selectedElixir);
			// this.emitSelectedItems();
			this.championService.applyAllComponentChanges(this.champion, currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		}
	}
	/**
	 * Method that removes elixir slot if the champion level is below the required level
	 * Called by parent component on (change)
	 * @param  {number} currentLevel the level that was changed into -> previous selected level is on this.currentLevel when called -> model doesn't update immediately?
	 * @returns void
	 */
	// removeInvalidElixirBasedOnLevel(currentLevel: number): void {
	// 	if (currentLevel < 9) {
	// 		this.removeElixir();
	// 	}
	// }
	setStackedSelectedItem(isStacked: boolean, index: number): void {
		if (isStacked == true && this.selectedItems[index].apiname == "manamune") {
			this.selectedItems[index] = this.muramana;
		} else if (isStacked == true && this.selectedItems[index].apiname == "archangelsstaff") {
			this.selectedItems[index] = this.seraphs;
		} else {
			this.selectedItems[index].stacked = isStacked;
		}
		this.emitSelectedItems();
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
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
