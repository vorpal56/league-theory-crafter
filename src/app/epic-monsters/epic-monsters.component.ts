import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Champion } from '../models/champion';
import { Dragon, Epics } from '../models/epic';
import { Item } from '../models/item';
import { Runes } from '../models/rune';
import { TargetDetails } from '../models/target';

import { ChampionService } from '../services/champion.service';

@Component({
	selector: 'epic-monsters',
	templateUrl: './epic-monsters.component.html',
	styleUrls: ['./epic-monsters.component.css']
})
export class EpicMonstersComponent implements OnInit {

	epics: Epics = new Epics();
	@Input("champion") champion: Champion;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: Runes;
	@Input("targetDetails") targetDetails: TargetDetails;

	constructor(private championService: ChampionService) { }

	ngOnInit(): void { }
	activeDragonClass(dragon: Dragon) {
		return dragon.active ? "" : "inactive-option";
	}
	selectDragon(dragonSet: string, index: number) {
		if (this.epics[dragonSet][index].active == false) {
			this.epics[dragonSet].forEach((dragon: Dragon, i: number) => {
				dragon.active = i == index;
			});
		}
		this.dragonDistribution();
	}
	dragonDistribution() {
		let dragonDistribution: object = {
			cloud: 0,
			infernal: 0,
			mountain: 0,
			ocean: 0
		};
		for (let epicMonsters in this.epics) {
			if (epicMonsters.includes("dragon")) {
				this.epics[epicMonsters].forEach((dragon: Dragon) => {
					if (dragon.active) { dragonDistribution[dragon.name]++; }
				});
			}
		}
		return dragonDistribution;
	}
	// need a button to clear the buff selections since the toggling effect will have large overhead. different effect than runes where champions enter with runes
}
