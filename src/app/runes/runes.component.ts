import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { RUNES } from '../runes';


@Component({
	selector: 'runes',
	templateUrl: './runes.component.html',
	styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {

	constructor(private championService: ChampionService) { }

	runes: any = RUNES;
	selectedRunes: any = {
		"primaryTree": { "runes": [null, null, null, null], "path": null },
		"secondaryTree": { "runes": [null, null], "path": null },
		"runeShards": [],
	};
	pathIndices = { "Precision": 0, "Domination": 1, "Sorcery": 2, "Resolve": 3, "Inspiration": 4 };
	activePrimaryTree: any;

	ngOnInit(): void {
		this.selectedRunes.primaryTree.path = this.runes[0].path_name;
		this.runes[0].active_primary = true;
		// this.selectedRunes.secondaryTree.path = this.runes[1].path_name;
		// this.runes[1].active_secondary = true;
	}
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();
	@Input('selectedPage') selectedPage: string;

	switchToItemSelectorPage() {
		this.selectedPageEmitter.emit("item-selector");
	}
	setKeystone(rune: any, keystones: any) {
		keystones.forEach((keystone: any) => {
			keystone.active = keystone == rune;
		});
		this.selectedRunes.primaryTree.runes[0] = rune;
	}
	setPrimarySlots(rune: any, runeSlotSection: any, index: number) {
		runeSlotSection.forEach((runeSlot: any) => {
			runeSlot.active = runeSlot == rune;
		});
		this.selectedRunes.primaryTree.runes[index] = rune;
	}
	setSecondarySlots(rune: any, pathName: string) {
		// only make the rune active if it's valid
		// check if the rune there are no runes and add it to the beginning if there isnt
		if (this.selectedRunes.secondaryTree.runes.length == 0) {
			rune.active = true;
			this.selectedRunes.secondaryTree.runes[0] = rune;
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
					this.runes[this.pathIndices[pathName]].runes[0][selectedRune.keyslot][selectedRune.index].active = false;
					this.selectedRunes.secondaryTree.runes[selectedRuneIndex] = rune;
					return;
				}
				// check if the slot is empty otherwise it's occupied
				if (selectedRune == null) {
					rune.active = true;
					this.selectedRunes.secondaryTree.runes[selectedRuneIndex] = rune;
					return;
				}
			}
			// when its a different rune on a separate line, remove the first one from the list and replace it with a deep copy
			let slotName = this.selectedRunes.secondaryTree.runes[0].keyslot;
			let runeIndex = this.selectedRunes.secondaryTree.runes[0].index;
			// set the previous rune as inactive
			this.runes[this.pathIndices[pathName]].runes[0][slotName][runeIndex].active = false;
			rune.active = true;
			this.selectedRunes.secondaryTree.runes[0] = JSON.parse(JSON.stringify(this.selectedRunes.secondaryTree.runes[1]));
			this.selectedRunes.secondaryTree.runes[1] = rune;
		}

	}
	activeClass(rune: any, def?: string) {
		if (def) {
			return rune["active_" + def] ? "active-rune" : "inactive-rune";
		}
		return rune.active ? "active-rune" : "inactive-rune";
	}
	choosePrimaryPath(runePath: any, runes: any) {
		// only do something if the selected tree is different from the one that's active
		if (runePath.path_name != this.selectedRunes.primaryTree.path) {
			// reset the primary tree (make all rune options in this tree inactive)
			this.resetTree("primary");
			// if the primary path is the same as the secondary path, set the secondary path as inactive
			if (this.selectedRunes.secondaryTree.path == runePath.path_name) {
				this.resetTree("secondary");
				runePath.active_secondary = false;
			}
			// set the path as the tree name
			this.selectedRunes.primaryTree.path = runePath.path_name;
			// reset the images of the runes to be inactive
			runes.forEach((rune: any) => {
				rune.active_primary = rune == runePath;
			});
		}
	}
	chooseSecondaryPath(runePath: any, runes: any) {
		// only allow selected a different secondary path
		if (this.selectedRunes.secondaryTree.path != runePath.path_name) {
			// reset the secondary tree
			this.resetTree("secondary");
			this.selectedRunes.secondaryTree.path = runePath.path_name;
			// reset the images of the runes to be inactive
			runes.forEach((rune: any) => {
				rune.active_secondary = rune == runePath;
			});
		}
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
			let runesToReset = this.runes[this.pathIndices[pathName]].runes[0];
			for (let key in runesToReset) {
				for (let runeToResetIndex in runesToReset[key]) {
					runesToReset[key][runeToResetIndex].active = false;
				}
			}
		}
		this.selectedRunes[keyname + "Tree"].path = null;
	}
}
