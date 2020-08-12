import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { CHAMPIONS, LEVELS } from "./data";
import { Champion } from "./models/champion";
import { Item } from "./models/item";
import { ChampionService } from './services/champion.service';
import { InventoryComponent } from './inventory/inventory.component';
import { EMPTY_ITEM } from './items';
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	title = "league-theory-crafter";
	champions = CHAMPIONS;
	levels = LEVELS;

	champion: Champion = this.champions[2];
	selectedItems: [Item, Item, Item, Item, Item, Item] = [EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM, EMPTY_ITEM];
	selectedElixir: Item = EMPTY_ITEM;
	selectedItemRestrictions = { "hasGoldOrJg": false, "hasBoots": false, "hasTear": false, "hasSealOrMejais": false, "masterworkItems": [EMPTY_ITEM, EMPTY_ITEM] };
	numberOfEquippedItems = 0;

	selectedTab: string = "runes";

	currentLevel: number = LEVELS[9].levelValue;
	currentLevelName: string = LEVELS[0].levelLabel;
	@ViewChild(InventoryComponent) inventoryComponent: InventoryComponent;
	/**
	 * Method that updates the champion details
	 * Calls item-selector component methods
	 * @returns void
	 */
	updateChampion(): void {
		// this.levelSelectorEnabled = true; 
		this.inventoryComponent.emitSelectedItems();
		this.inventoryComponent.removeInvalidItemsBasedOnChampion(this.champion, this.currentLevel);
		this.inventoryComponent.removeInvalidElixirBasedOnLevel(this.currentLevel);
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		return;
	}
	setSelectedItemRestrictions(selectedItemRestrictions: any) {
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
	setPage(selectedTabName: string) {
		this.selectedTab = selectedTabName;
	}
	constructor(private championService: ChampionService, private cdRef: ChangeDetectorRef) {
	}
	ngAfterViewInit() {
		this.inventoryComponent.emitSelectedItems();
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		this.cdRef.detectChanges();
	}
	ngOnInit() {
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir, 1);
	}
}
