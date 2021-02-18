import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { SEARCH_TYPES } from 'server/data/data';

import { Champion } from 'src/app/core/models/champion';
import { Item, EMPTY_ITEM } from 'src/app/core/models/item';
import { Runes } from 'src/app/core/models/rune';
import { TargetDetails } from 'src/app/core/models/target';

import { ChampionService } from 'src/app/core/services/champion.service';
import { ItemsService } from 'src/app/core/services/items.service';
import { ApiService } from 'src/app/core/services/api.service';


@Component({
	selector: 'item-selector',
	templateUrl: './item-selector.component.html',
	styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

	items$: Observable<Item[]>;
	starterItems: Item[] = [];
	basicItems: Item[] = [];
	epicItems: Item[] = [];
	legendaryItems: Item[] = [];
	mythicItems: Item[] = [];
	allItems: any[] = [];
	searchTypes = SEARCH_TYPES;
	searchType: string = this.searchTypes[0].value;
	itemOrder: string = "m-s";
	searchText: string = "";

	@Input('champion') champion: Champion;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: Runes;
	@Input("targetDetails") targetDetails: TargetDetails;
	@Input("existingItemGroups") existingItemGroups: object;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;
	@Input("selectedPage") selectedPage: string;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('existingItemGroups') existingItemGroupsEmitter = new EventEmitter<object>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();
	@Output('modalInfo') modalInfoEmitter = new EventEmitter<object>();

	constructor(private championService: ChampionService, private itemsService: ItemsService, private apiService: ApiService) { }
	ngOnInit(): void {
		this.items$ = this.apiService.getItems();
		// {'starter', 'epic', 'consumable', 'basic', 'legendary', 'boots', 'mythic'}
		this.items$.subscribe((items: Item[]) => {
			items.forEach((item: Item) => {
				if (item.rank == "starter") {
					this.starterItems.push(item);
				} else if (item.rank == "consumable" || item.rank == "basic" || item.rank == "boots") {
					this.basicItems.push(item);
				} else if (item.rank == "epic") {
					this.epicItems.push(item);
				} else if (item.rank == "legendary") {
					this.legendaryItems.push(item);
				} else if (item.rank == "mythic") {
					this.mythicItems.push(item);
				}
			});
			// Sort the mythic items by non ornn then ornn items
			this.mythicItems.sort((itemA: Item, itemB:Item) => {
				if ( itemA.tags.includes("ornn")) return 1;
				if ( itemB.tags.includes("ornn")) return -1;
				return 0;
			})
			if (this.itemOrder == "m-s") {
				this.allItems.push({ name: 'Mythic', items: this.mythicItems });
				this.allItems.push({ name: 'Legendary', items: this.legendaryItems });
				this.allItems.push({ name: 'Epic', items: this.epicItems });
				this.allItems.push({ name: 'Basic', items: this.basicItems });
				this.allItems.push({ name: 'Starter', items: this.starterItems });
			} else {
				this.allItems.push({ name: 'Starter', items: this.starterItems });
				this.allItems.push({ name: 'Basic', items: this.basicItems });
				this.allItems.push({ name: 'Epic', items: this.epicItems });
				this.allItems.push({ name: 'Legendary', items: this.legendaryItems });
				this.allItems.push({ name: 'Mythic', items: this.mythicItems });
			}
		});
	}
	reverseOrder() { this.allItems.reverse(); }
	/**
	 * Method that determines if the item is allowed given the champion and item restrictions
	 * Legendary and Mythic items are unique.
	 * You can build as many legendaries, but can only choose one: if inven doesn't have same item, allowed else false
	 * You can build only one Mythic: if inven doesn't have mythic, allowed else false
	 * @param  {Item} itemDetails item info to test validity
	 * @returns boolean
	 */
	isItemAllowed(itemDetails: Item): boolean {
		// split the logic into different sections for easier readability
		if (itemDetails.visible == false) {
			// can't add items that are 'invisible'
			return false
		}
		if (itemDetails.item_group !== null && itemDetails.item_group in this.existingItemGroups) {
			// can't add items that are in the same item group
			this.modalInfoEmitter.emit({title: "Error: Same Item Category", body: `You cannot add items in the same category/group. Remove any existing items in your Inventory with the same category/group as ${itemDetails.name}.`})
			return false;
		}
		if ((itemDetails.item_group == "mythiccomponent" && "mythic" in this.existingItemGroups) ||
			(itemDetails.item_group == "mythic" && "mythiccomponent" in this.existingItemGroups)) {
			// mythic component items cannot be added with existing mythic items and vice versa
			this.modalInfoEmitter.emit({title: "Error: Existing Mythic/Mythic Component", body: "You cannot add Mythic items with existing Mythic Components and vice versa. Remove the existing Mythic/Mythic Component and add your item again."})
			return false;
		} else if (itemDetails.rank == "legendary") {
			// only add unique legendary item
			let hasSameItem = this.itemsService.hasItem(this.selectedItems, itemDetails.apiname);
			if (hasSameItem) {
				this.modalInfoEmitter.emit({title:"Error: Duplicate Legendary", body: `You cannot add another ${itemDetails.name} since the Legendary items category are unique.`})
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
			this.modalInfoEmitter.emit({title:"Error: Under Level 9", body: "You need to be at least level 9 to use any Elixir. Update your level to add this item."})
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
			if (itemDetails.item_group != null) {
				this.existingItemGroups[itemDetails.item_group] = true;
			}
			// go through the items and change the first empty item to the selected item -> break afterwards
			for (let itemIndex in this.selectedItems) {
				if (this.selectedItems[itemIndex] == EMPTY_ITEM) {
					// deep copy the object so it doesn't reference the same object. This is important because some objects allow multiple stacking (eg. rod of ages)
					this.selectedItems[itemIndex] = JSON.parse(JSON.stringify(itemDetails));
					// check if the item we're adding is an ornn item and there's an open space -> break after finding
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
		this.existingItemGroupsEmitter.emit(this.existingItemGroups);
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