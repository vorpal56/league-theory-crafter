import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
	primaries = [
		"assets/images/runes/Precision.png",
		"assets/images/runes/Domination.png",
		"assets/images/runes/Sorcery.png",
		"assets/images/runes/Inspiration.png",
		"assets/images/runes/Resolve.png",
	];
	ngOnInit(): void {
	}
	@Output('selectedPage') selectedPageEmitter = new EventEmitter<string>();
	@Input('selectedPage') selectedPage: string;

	switchToItemSelectorPage() {
		this.selectedPageEmitter.emit("item-selector");
	}
}
