import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ITEMS } from 'server/data/updated_items_merkai';

import { Champion } from 'src/app/core/models/champion';
import { Item, EMPTY_ITEM } from 'src/app/core/models/item';
import { Runes } from 'src/app/core/models/rune';
import { TargetDetails } from 'src/app/core/models/target';

import { ChampionService } from 'src/app/core/services/champion.service';
import { ApiService } from '../services/api.service';

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
	@Input("existingItemGroups") existingItemGroups: object;
	@Input("numberOfEquippedItems") numberOfEquippedItems: number;

	@Output('selectedItems') selectedItemsEmitter = new EventEmitter<[Item, Item, Item, Item, Item, Item]>();
	@Output('selectedElixir') selectedElixirEmitter = new EventEmitter<Item>();
	@Output('existingItemGroups') existingItemGroupsEmitter = new EventEmitter<object>();
	@Output('numberOfEquippedItems') numberOfEquippedItemsEmitter = new EventEmitter<number>();
	@Output("champion") championEventEmitter = new EventEmitter<Champion>();

	@ViewChild('importBuildFileInput') importBuildInput: ElementRef;

	muramana: Item;
	seraphs: Item;

	items: Item[] = ITEMS;

	constructor(private championService: ChampionService, private apiService: ApiService) { }

	ngOnInit(): void {
		this.emitSelectedItems();
	}
	importBuild(files: FileList): void {
		let buildFile = files[0];
		const doesNotExist = (element) => element === null || element === undefined;
		if (buildFile.type == 'application/json') {
			const reader = new FileReader();
			reader.onload = () => {
				let build = JSON.parse(reader.result.toString());
				let championApiname: string = build["championApiname"];
				let currentLevel: number = build["currentLevel"];
				let currentTime: number = build["currentTime"];
				let elixir: string = build["elixir"];
				let items: string[] = build["items"];
				let targetDetails = build["target"];
				let runes = build["runes"];
				if (runes !== null || runes !== undefined) {
					let primaryRunes = runes["primary"];
					let secondaryRunes = runes["secondary"];
					let runeShards = runes["shards"];
					let runeModifiers = runes["modifiers"];
				}
				let existingItemGroups = build["existingItemGroups"];
				let numberOfEquippedItems = build["numOfItems"];
				let abilityModifiers = build["abilityModifiers"];
				let allItems = [championApiname, currentLevel, currentTime, elixir, items, targetDetails, runes, existingItemGroups, numberOfEquippedItems, abilityModifiers];
				let isInvalid = allItems.some(doesNotExist);
				if (isInvalid == false) {
					this.champion = null;
					let championUrl = `${environment.apiChampionsUrl}${championApiname}`;
					championUrl += environment.production ? ".json" : "";
					console.log(championUrl);
					this.apiService.getChampionByUrl(championUrl).subscribe((champion: Champion) => {
						this.champion = new Champion(champion, currentLevel, abilityModifiers);
						this.championService.resetAbilities(this.champion);
						this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
						this.championEventEmitter.emit(this.champion);
					});
					this.importBuildInput.nativeElement.value = ""; // We have to clear the input field to allow choosing the same file multiple times (since technically we're not actually submitting anything)
				}
			};
			reader.readAsText(buildFile);
		} else {
			alert("File needs to be JSON format.");
			return;
		}
	}
	exportBuild(): void {
		let build = {
			"championApiname": this.champion.apiname,
			"currentLevel": this.champion.currentLevel,
			"currentTime": this.currentTime,
			"abilityModifiers": this.champion.abilityModifiers,
			"items": [],
			"elixir": this.selectedElixir.apiname,
			"target": this.targetDetails,
			"runes": {
				"primary": this.selectedRunes.primaryTree,
				"secondary": this.selectedRunes.secondaryTree,
				"shards": this.selectedRunes.runeShards,
				"modifiers": this.selectedRunes.modifiers
			},
			"existingItemGroups": this.existingItemGroups,
			"numOfItems": this.numberOfEquippedItems
		};
		this.selectedItems.forEach((item: Item, index: number) => {
			build["items"][index] = item.apiname;
		});
		var a = document.createElement('a');
		var file = new Blob([JSON.stringify(build)], { type: 'application/json' });
		a.href = URL.createObjectURL(file);
		a.download = `${this.champion.apiname}_Build_LoLTheoryCrafter.json`;
		a.click();
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
			this.existingItemGroups = {};
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
		if (itemDetails.item_group !== null && itemDetails.item_group in this.existingItemGroups) {
			delete this.existingItemGroups[itemDetails.item_group];
		}
		// replace the item at index with an empty item
		this.selectedItems.splice(index, 1, EMPTY_ITEM);

		this.numberOfEquippedItems -= 1;
		this.emitSelectedItems();
		if (runService) {
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		}
		return;
	}
	/**
	 * Method that removes any invalid items depending on the selected champion restrictions including boots, ornn items, etc.
	 * Called by parent component on (change)
	 * @param  {Champion} champion the champion that was changed into -> previous selected champion is on this.champion when called -> model doesn't update immediately?
	 * @param  {number} currentLevel the level that was changed into -> previous selected level is on this.currentLevel when called -> model doesn't update immediately?
	 * @returns void
	 */
	removeInvalidItemsBasedOnChampion(champion: Champion): void {
		let runService = false;
		this.selectedItems.forEach((item, index) => {
			let championRangeType = champion["rangetype"].toLowerCase();
			if (champion.name == "Cassiopeia" && item.rank == "boots") {
				this.removeItem(item, index, runService);
			} else if (item.allowed_to.melee && !item.allowed_to.ranged && championRangeType == "ranged") {
				this.removeItem(item, index, runService);
			} else if (item.allowed_to.ranged && !item.allowed_to.melee && championRangeType == "melee") {
				this.removeItem(item, index, runService);
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
			this.selectedItems[index] = environment.production ? this.items[102] : this.items[102];
		} else if (isStacked == true && this.selectedItems[index].apiname == "archangelsstaff") {
			this.selectedItems[index] = environment.production ? this.items[135] : this.items[135];
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
		this.existingItemGroupsEmitter.emit(this.existingItemGroups);
		this.numberOfEquippedItemsEmitter.emit(this.numberOfEquippedItems);
		return;
	}
	isProduction(): boolean {
		return environment.production;
	}
}
