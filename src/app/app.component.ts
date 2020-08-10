import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { CHAMPIONS, LEVELS } from "./data";
import { Champion } from "./models/champion";
import { Item } from "./models/item";
import { ChampionService } from './services/champion.service';
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	title = "league-theory-crafter";
	champions = CHAMPIONS;
	champion: Champion = this.champions[1];
	levels = LEVELS;
	levelSelectorEnabled: boolean = false;
	selectedItems: [Item, Item, Item, Item, Item, Item];
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
		this.itemSelectorComponent.removeInvalidItemsBasedOnChampion(this.champion, this.currentLevel);
		this.itemSelectorComponent.removeInvalidElixirBasedOnLevel(this.currentLevel);
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
		return;
	}
	/**
	 * @param  {[Item*6]} selectedItems the selected items/inventory from item-selector component (tuple of 6 items)
	 * @returns void
	 */
	viewSelectedItems(selectedItems: [Item, Item, Item, Item, Item, Item]): void {
		this.selectedItems = selectedItems;
		return;
	}
	constructor(private championService: ChampionService) {
	}
	ngOnInit() {
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
	}
}
