import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { Champion } from "./models/champion";
import { Item, ItemRestrictions } from "./models/item";
import { StatsService } from './services/stats.service';
import { InventoryComponent } from './inventory/inventory.component';
import { EMPTY_ITEM } from './items';
import { RunesService } from './services/runes.service';
import { ItemsService } from './services/items.service';
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
	selectedRunes: any;

	@ViewChild(InventoryComponent) inventoryComponent: InventoryComponent;

	constructor(private statsService: StatsService, private runesService: RunesService, private itemsService: ItemsService, private cdRef: ChangeDetectorRef) {
	}
	ngAfterViewInit() {
		this.inventoryComponent.emitSelectedItems();
		this.statsService.adjustBaseStats(this.champion, this.currentLevel);
		let [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions] = this.itemsService.calculateItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		this.itemsService.addItemStats(this.champion, totalStatsFromItems, multKeyValues, adaptiveType);

		let totalStatsFromRunes = this.runesService.calculateRuneStats(this.selectedRunes, this.champion, this.currentLevel, totalStatsFromItems, adaptiveType, this.selectedElixir);
		this.runesService.addRuneStats(this.champion, totalStatsFromRunes);

		this.statsService.adjustAttackSpeed(this.champion, this.currentLevel, totalStatsFromItems, totalStatsFromRunes);
		this.cdRef.detectChanges();
	}
	ngOnInit() {
		// this.statsService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}

	/**
	 * Method that updates the champion details
	 * Calls item-selector component methods
	 * @returns void
	 */
	updateChampion(): void {
		if (this.inventoryComponent) {
			this.inventoryComponent.emitSelectedItems();
			this.inventoryComponent.removeInvalidItemsBasedOnChampion(this.champion, this.currentLevel);
			this.inventoryComponent.removeInvalidElixirBasedOnLevel(this.currentLevel);
		}
		this.statsService.adjustBaseStats(this.champion, this.currentLevel);
		let [totalStatsFromItems, multKeyValues, adaptiveType, itemAdditions] = this.itemsService.calculateItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		this.itemsService.addItemStats(this.champion, totalStatsFromItems, multKeyValues, adaptiveType);

		let totalStatsFromRunes = this.runesService.calculateRuneStats(this.selectedRunes, this.champion, this.currentLevel, totalStatsFromItems, adaptiveType, this.selectedElixir);
		this.runesService.addRuneStats(this.champion, totalStatsFromRunes);

		this.statsService.adjustAttackSpeed(this.champion, this.currentLevel, totalStatsFromItems, totalStatsFromRunes);
		return;
	}
	setChampion(selectedChampion: Champion) {
		if (selectedChampion != this.champion) {
			this.champion = selectedChampion;
			this.updateChampion();
		}
		return;
	}
	setCurrentLevel(selectedLevel: number) {
		if (selectedLevel != this.currentLevel) {
			this.currentLevel = selectedLevel;
			this.updateChampion();
		}
	}
	setSelectedItemRestrictions(selectedItemRestrictions: ItemRestrictions) {
		this.selectedItemRestrictions = selectedItemRestrictions;
	};
	setNumberOfEquippedItems(numberOfEquippedItems: number) {
		this.numberOfEquippedItems = numberOfEquippedItems;
	}
	setSelectedItems(selectedItems: [Item, Item, Item, Item, Item, Item]) {
		this.selectedItems = selectedItems;
	}
	setSelectedElixir(selectedElixir: Item): void {
		this.selectedElixir = selectedElixir;
		return;
	}
	setSelectedRunes(selectedRunes: any) {
		this.selectedRunes = selectedRunes;
	}
	setPage(selectedTabName: string) {
		this.selectedTab = selectedTabName;
	}
}
