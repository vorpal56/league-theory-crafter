import {
	Component,
	OnInit,
	ViewChild,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	AfterViewInit,
} from "@angular/core";
import { Champion } from "./models/champion";
import { Item, ItemRestrictions } from "./models/item";
import { InventoryComponent } from "./inventory/inventory.component";
import { EMPTY_ITEM } from "../../server/data/items";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
	title = "league-theory-crafter";

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

	// runes/item-selector/epic-monsters buff definition to show which page first
	selectedTab: string = "item-selector";

	// champion and current level definition from the champion component
	champion: Champion;
	currentLevel: number;
	currentTime: number;
	selectedRunes: any;
	stackAllRunes: boolean;

	@ViewChild(InventoryComponent) inventoryComponent: InventoryComponent;

	constructor(private cd: ChangeDetectorRef) { }
	ngAfterViewInit() {
		this.cd.detectChanges();
	}
	ngOnInit() {
		// this.statsService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems, this.selectedElixir);
	}
	hideTabsFor(tabName: string): boolean {
		if (tabName == "item-selector") {
			return this.selectedTab == "runes" || this.selectedTab == "epic-monsters";
		} else if (tabName == "runes") {
			return this.selectedTab == "item-selector" || this.selectedTab == "epic-monsters";
		} else if (tabName == "epic-monsters") {
			return this.selectedTab == "runes" || this.selectedTab == "item-selector";
		}
	}
	setChampion(selectedChampion: Champion) {
		this.champion = selectedChampion;
		if (this.inventoryComponent) {
			this.inventoryComponent.removeInvalidItemsBasedOnChampion(this.champion);
		}
		return;
	}
	setCurrentLevel(selectedLevel: number) {
		this.currentLevel = selectedLevel;
		if (this.inventoryComponent) {
			this.inventoryComponent.removeElixir(this.currentLevel);
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
