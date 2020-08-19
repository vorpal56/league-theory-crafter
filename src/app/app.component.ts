import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { Champion } from "./models/champion";
import { Item, ItemRestrictions } from "./models/item";
import { InventoryComponent } from './inventory/inventory.component';
import { EMPTY_ITEM } from '../data/items';
import { ChampionService } from './services/champion.service';
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
	title = "league-theory-crafter";

	// item definition from the item-selector component to the inventory component
	selectedItems: [Item, Item, Item, Item, Item, Item] = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
	selectedElixir: Item = EMPTY_ITEM;
	selectedItemRestrictions: ItemRestrictions = { "hasGoldOrJg": false, "hasBoots": false, "hasTear": false, "hasSealOrMejais": false, "masterworkItems": [EMPTY_ITEM, EMPTY_ITEM], "hasHexcore": false };
	numberOfEquippedItems: number = 0;

	// rune/item-selector definition to show which page first
	selectedTab: string = "runes";

	// champion and current level definition from the champion component
	champion: Champion;
	currentLevel: number;
	currentTime: number;
	selectedRunes: any;
	stackAllRunes: boolean;

	@ViewChild(InventoryComponent) inventoryComponent: InventoryComponent;

	constructor(private championService: ChampionService, private cdRef: ChangeDetectorRef) {
	}
	ngAfterViewInit() {
		// this.inventoryComponent.emitSelectedItems();
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		this.cdRef.detectChanges();
	}
	ngOnInit() {
		// this.statsService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}
	setChampion(selectedChampion: Champion) {
		this.champion = selectedChampion;
		if (this.inventoryComponent) {
			this.inventoryComponent.removeInvalidItemsBasedOnChampion(this.champion);
			this.inventoryComponent.removeInvalidElixirBasedOnLevel(this.currentLevel);
		}
		return;
	}
	setCurrentLevel(selectedLevel: number) {
		this.currentLevel = selectedLevel;
		return;
	}
	setCurrentTime(selectedTime: number) {
		this.currentTime = selectedTime;
		return;
	}
	setSelectedItemRestrictions(selectedItemRestrictions: ItemRestrictions) {
		this.selectedItemRestrictions = selectedItemRestrictions;
		return;
	};
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
	setSelectedRunes(selectedRunes: any) {
		this.selectedRunes = selectedRunes;
		return;
	}
	setStackAllRunes(stackAllRunes: boolean) {
		this.stackAllRunes = stackAllRunes;
		return;
	}
	setPage(selectedTabName: string) {
		this.selectedTab = selectedTabName;
		return;
	}
}
