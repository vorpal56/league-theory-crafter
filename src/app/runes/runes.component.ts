import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChampionService } from '../services/champion.service';

@Component({
	selector: 'runes',
	templateUrl: './runes.component.html',
	styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {

	constructor(private championService: ChampionService) { }
	runeSources = [
		"assets/images/runes/Press The Attack.png",
		"assets/images/runes/Lethal Tempo.png",
		"assets/images/runes/Fleet Footwork.png",
		"assets/images/runes/Conqueror.png",
	];
	ngOnInit(): void {
	}
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();

	switchToItemSelectorPage() {
		this.selectedPageEmitter.emit("item-selector");
	}
}
