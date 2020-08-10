import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { CHAMPIONS, LEVELS } from "./data";
import { Champion } from "./models/champion";
import { Item } from "./models/item";
import { ChampionService } from './services/champion.service';
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
	title = "league-theory-crafter";
	champions = CHAMPIONS;
	champion: Champion = this.champions[1];
	levels = LEVELS;
	levelSelectorEnabled: boolean = false;
	selectedItems: [Item, Item, Item, Item, Item, Item];
	selectedElixir: Item;
	currentLevel: number = LEVELS[0].levelValue;
	currentLevelName: string = LEVELS[0].levelLabel;
	@ViewChild(ItemSelectorComponent) itemSelectorComponent: ItemSelectorComponent;
	/**
	 * Method that updates the champion details
	 * Calls item-selector component methods
	 * @returns void
	 */
	updateChampion(): void {
		// this.levelSelectorEnabled = true; 
		this.itemSelectorComponent.emitSelectedItems();
		this.itemSelectorComponent.removeInvalidItemsBasedOnChampion(this.champion, this.currentLevel);
		this.itemSelectorComponent.removeInvalidElixirBasedOnLevel(this.currentLevel);
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		return;
	}
	/**
	 * @param  {[Item*6]} selectedItems the selected items/inventory from item-selector component (tuple of 6 items)
	 * @returns void
	 */
	setSelectedItems(selectedItems: [Item, Item, Item, Item, Item, Item]): void {
		this.selectedItems = selectedItems;
		return;
	}
	setSelectedElixir(selectedElixir: Item): void {
		this.selectedElixir = selectedElixir;
		return;
	}
	constructor(private championService: ChampionService, private cdRef: ChangeDetectorRef) {
	}
	ngAfterViewInit() {
		this.itemSelectorComponent.emitSelectedItems();
		// this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
		this.cdRef.detectChanges();
	}
	ngOnInit() {
		// this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir, 1);
	}
}
