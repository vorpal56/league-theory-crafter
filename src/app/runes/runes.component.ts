import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Champion } from '../models/champion';
import { Item } from '../models/item';
import { RuneShard, Rune, Runes } from '../models/rune';
import { TargetDetails } from '../models/target';

import { RUNES, RUNE_SHARDS } from '../../../server/data/runes';
import { ChampionService } from '../services/champion.service';

@Component({
	selector: 'runes',
	templateUrl: './runes.component.html',
	styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
	runes: any[] = RUNES;
	runeShards: any = RUNE_SHARDS;

	runeShardSet1: [RuneShard, RuneShard, RuneShard] = this.runeShards.set1;
	runeShardSet2: [RuneShard, RuneShard, RuneShard] = this.runeShards.set2;
	runeShardSet3: [RuneShard, RuneShard, RuneShard] = this.runeShards.set3;

	@Input("champion") champion: Champion;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("targetDetails") targetDetails: TargetDetails;

	@Output("selectedPage") selectedPageEmitter = new EventEmitter<string>();
	@Output("selectedRunes") selectedRunesEmitter = new EventEmitter<any>();

	stackAllRunes: boolean = false;
	soulCount: number = 0;

	selectedRunes: Runes = new Runes(this.stackAllRunes, this.soulCount);

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
		this.selectedRunes.primaryTree.path = Runes.PRECISION;
		this.runes[Runes.TREE_INDEXES[Runes.PRECISION]].active_primary = true;
		this.emitSelectedRunes();
	}

	emitSelectedRunes() {
		this.selectedRunesEmitter.emit(this.selectedRunes);
	}
	switchToItemSelectorPage() {
		this.selectedPageEmitter.emit("item-selector");
	}
	switchToEpicMonsterPage() {
		this.selectedPageEmitter.emit("epic-monsters");
	}
	setKeystone(rune: Rune, keystones: any) {
		keystones.forEach((keystone: Rune) => {
			keystone.active = keystone == rune;
		});
		this.selectedRunes.primaryTree.runes[0] = rune;
		this.emitSelectedRunes();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
	}
	setPrimarySlots(rune: Rune, runeSlotSection: any, index: number) {
		for (let selectedRuneIndex in this.selectedRunes.primaryTree.runes) {
			let selectedRune = this.selectedRunes.primaryTree.runes[selectedRuneIndex];
			// if the rune selected is the same as the rune chosen do nothing
			if (selectedRune == rune) {
				return;
			}
		}
		runeSlotSection.forEach((runeSlot: Rune) => {
			runeSlot.active = runeSlot == rune;
		});
		this.selectedRunes.primaryTree.runes[index] = rune;
		this.emitSelectedRunes();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
	}
	setSecondarySlots(rune: Rune, pathName: string) {
		// only make the rune active if it's valid
		// check if the rune there are no runes and add it to the beginning if there isnt
		if (this.selectedRunes.secondaryTree.runes[0] == null) {
			rune.active = true;
			this.selectedRunes.secondaryTree.runes[0] = rune;
			this.emitSelectedRunes();
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		} else {
			for (let selectedRuneIndex in this.selectedRunes.secondaryTree.runes) {
				let selectedRune = this.selectedRunes.secondaryTree.runes[selectedRuneIndex];
				// if the rune selected is the same as the rune chosen do nothing
				if (selectedRune == rune) {
					return;
				}
				// if the slot is not empty but the slot is in the same line, set the previous rune as inactive
				if (selectedRune != null && selectedRune.keyslot == rune.keyslot) {
					rune.active = true;
					this.runes[Runes.TREE_INDEXES[pathName]].runes[0][selectedRune.keyslot][selectedRune.index].active = false;
					this.selectedRunes.secondaryTree.runes[selectedRuneIndex] = rune;
					this.emitSelectedRunes();
					this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
					return;
				}
				// check if the slot is empty otherwise it's occupied
				if (selectedRune == null) {
					rune.active = true;
					this.selectedRunes.secondaryTree.runes[selectedRuneIndex] = rune;
					this.emitSelectedRunes();
					this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
					return;
				}
			}
			// when its a different rune on a separate line, remove the first one from the list and replace it with a deep copy
			let slotName = this.selectedRunes.secondaryTree.runes[0].keyslot;
			let runeIndex = this.selectedRunes.secondaryTree.runes[0].index;
			// set the previous rune as inactive
			this.runes[Runes.TREE_INDEXES[pathName]].runes[0][slotName][runeIndex].active = false;
			rune.active = true;
			this.selectedRunes.secondaryTree.runes[0] = { ...this.selectedRunes.secondaryTree.runes[1] };
			this.selectedRunes.secondaryTree.runes[1] = rune;
			this.emitSelectedRunes();
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		}
	}
	setRuneShards(runeShard: RuneShard, slotIndex: number) {
		if (this.selectedRunes.runeShards[slotIndex] != runeShard) {
			if (this.selectedRunes.runeShards[slotIndex]) {
				this.selectedRunes.runeShards[slotIndex].active = false;
			}
			runeShard.active = true;
			this.selectedRunes.runeShards[slotIndex] = runeShard;
		}
		this.emitSelectedRunes();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		return;
	}
	activeClass(rune: Rune, def?: string) {
		if (def == "primary" || def == "secondary") {
			return rune["active_" + def] ? "active-rune" : "inactive-rune";
		} else if (def == "shard") {
			return rune.active ? "" : "inactive-rune";
		}
		return rune.active ? "active-rune" : "inactive-rune";
	}
	choosePrimaryPath(runePath: any) {
		// only do something if the selected tree is different from the one that's active
		if (runePath.path != this.selectedRunes.primaryTree.path) {
			// reset the primary tree (make all rune options in this tree inactive)
			this.resetTree("primary");
			// if the primary path is the same as the secondary path, set the secondary path as inactive
			if (this.selectedRunes.secondaryTree.path == runePath.path) {
				this.resetTree("secondary");
				runePath.active_secondary = false;
			}
			// set the path as the tree name
			this.selectedRunes.primaryTree.path = runePath.path;
			// reset the images of the runes to be inactive
			this.runes.forEach((availableRunePath: any) => {
				availableRunePath.active_primary = availableRunePath == runePath;
			});
		}
		this.emitSelectedRunes();
	}
	chooseSecondaryPath(runePath: any) {
		// only allow selected a different secondary path
		if (this.selectedRunes.secondaryTree.path != runePath.path) {
			// reset the secondary tree
			this.resetTree("secondary");
			this.selectedRunes.secondaryTree.path = runePath.path;
			// reset the images of the runes to be inactive
			this.runes.forEach((availableRunePath: any) => {
				availableRunePath.active_secondary = availableRunePath == runePath;
			});
		}
		this.emitSelectedRunes();
	}
	resetTree(keyname: string) {
		// set the content of the runes and path as empty
		if (keyname == "primary") {
			this.selectedRunes[keyname + "Tree"].runes = [null, null, null, null];
		} else {
			this.selectedRunes[keyname + "Tree"].runes = [null, null];
		}
		// get the path name which can be empty if they decide to switch primary paths without selecting a secondary path
		let pathName = this.selectedRunes[keyname + "Tree"].path;
		if (pathName != null) {
			let runesToReset = this.runes[Runes.TREE_INDEXES[pathName]].runes[0];
			for (let key in runesToReset) {
				for (let runeToResetIndex in runesToReset[key]) {
					runesToReset[key][runeToResetIndex].active = false;
				}
			}
		}
		this.selectedRunes[keyname + "Tree"].path = null;
		this.emitSelectedRunes();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
	}
	setStackAllRunes(stackAllRunes: boolean) {
		this.selectedRunes.modifiers.stackAllRunes = stackAllRunes;
		this.emitSelectedRunes();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
	}
	setSoulCount() {
		this.selectedRunes.modifiers.soulCount = this.soulCount;
		this.emitSelectedRunes();
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
	}
	hasDarkHarvest(): boolean {
		let selectedKeystone: Rune = this.selectedRunes["primaryTree"]["runes"][0];
		if (selectedKeystone == null) {
			return false;
		}
		return selectedKeystone.apiname == "darkharvest";
	}
}
