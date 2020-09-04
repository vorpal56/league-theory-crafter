import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from '../models/champion';
import { Item } from '../models/item';

@Component({
	selector: 'epic-monsters',
	templateUrl: './epic-monsters.component.html',
	styleUrls: ['./epic-monsters.component.css']
})
export class EpicMonstersComponent implements OnInit {

	@Input("selectedChampion") champion: Champion;
	@Input("currentLevel") currentLevel: number;
	@Input("currentTime") currentTime: number;
	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: any;
	@Input("stackAllRunes") stackAllRunes: boolean;

	@Output("externalBuffs") epicBuffsEmitter = new EventEmitter<any>();
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
	}
	switchToRunesPage() {
		this.selectedPageEmitter.emit("runes");
	}
	switchToItemSelectorPage() {
		this.selectedPageEmitter.emit("item-selector");
	}
	// need a button to clear the buff selections since the toggling effect will have large overhead. different effect than runes where champions enter with runes
}
