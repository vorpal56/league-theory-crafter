import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";

import { Champion } from 'src/app/core/models/champion';
import { Item, EMPTY_ITEM, ItemRestrictions } from 'src/app/core/models/item';
import { Runes, RuneModifiers } from 'src/app/core/models/rune';
import { TargetDetails } from 'src/app/core/models/target';

import { InventoryComponent } from 'src/app/core/inventory/inventory.component';

@Component({
	selector: 'homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

	// item definition from the item-selector component to the inventory component
	selectedItems: [Item, Item, Item, Item, Item, Item] = [
		EMPTY_ITEM,
		EMPTY_ITEM,
		EMPTY_ITEM,
		EMPTY_ITEM,
		EMPTY_ITEM,
		EMPTY_ITEM,
	];
	selectedElixir: Item = EMPTY_ITEM;
	// we can limit the items by adding it here
	selectedItemRestrictions: ItemRestrictions = {
		hasGoldOrJg: false,
		hasBoots: false,
		hasTear: false,
		masterworkItems: [EMPTY_ITEM, EMPTY_ITEM],
		hasHexcore: false,
	};
	numberOfEquippedItems: number = 0;

	// runes-epic/item-selector definition to show which page first
	selectedTab: string = "item-selector";

	// champion and current level definition from the champion component
	champion: Champion;
	currentTime: number;
	selectedRunes: Runes;
	runeModifiers: RuneModifiers;
	targetDetails: TargetDetails;

	runElixirComponentChange: boolean = false;

	@ViewChild(InventoryComponent) inventoryComponent: InventoryComponent;

	constructor(private cd: ChangeDetectorRef) { }
	ngAfterViewInit() {
		this.cd.detectChanges();
	}

	ngOnInit(): void {
	}
	hideTabsFor(tabName: string): boolean {
		if (tabName == "item-selector") {
			return this.selectedTab == "runes-epic" || this.selectedTab == "epic-monsters";
		} else if (tabName == "runes-epic") {
			return this.selectedTab == "item-selector" || this.selectedTab == "epic-monsters";
		} else if (tabName == "epic-monsters") {
			return this.selectedTab == "runes-epic" || this.selectedTab == "item-selector";
		}
	}
	setChampion(champion: Champion) {
		this.champion = champion;
		if (this.inventoryComponent) {
			this.inventoryComponent.removeInvalidItemsBasedOnChampion(this.champion);
			// call remove elixir by passing champion
			this.inventoryComponent.removeElixir(this.champion);
		}
		return;
	}
	setCurrentTime(selectedTime: number) {
		this.currentTime = selectedTime;
		return;
	}
	setSelectedItemRestrictions(selectedItemRestrictions: ItemRestrictions) {
		this.selectedItemRestrictions = selectedItemRestrictions;
		return;
	}
	setNumberOfEquippedItems(numberOfEquippedItems: number) {
		this.numberOfEquippedItems = numberOfEquippedItems;
		return;
	}
	setSelectedItems(selectedItems: [Item, Item, Item, Item, Item, Item]) {
		this.selectedItems = selectedItems;
		return;
	}
	setSelectedElixir(selectedElixir: Item): void {
		this.selectedElixir = selectedElixir;
		return;
	}
	setSelectedRunes(selectedRunes: Runes) {
		this.selectedRunes = selectedRunes;
		return;
	}
	setTargetDetails(targetDetails: TargetDetails) {
		this.targetDetails = targetDetails;
		return;
	}
	setPage(selectedTabName: string) {
		this.selectedTab = selectedTabName;
		return;
	}
}
