import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Champion } from "../models/champion";
import { ChampionService } from '../services/champion.service';
import { CHAMPIONS, LEVELS } from '../data';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
})
export class ChampionComponent implements OnInit {
	constructor(private championService: ChampionService) { }

	champions = CHAMPIONS;
	levels = LEVELS;

	@Output('selectedChampion') selectedChampionEventEmitter = new EventEmitter<Champion>();
	@Output('selectedLevel') currentLevelEventEmitter = new EventEmitter<number>();

	champion: Champion = this.champions[1];
	currentLevel: number = LEVELS[9].levelValue;


	ngOnInit(): void {
		this.updateChampion();
		this.updateLevel();
	}
	updateChampion() {
		this.selectedChampionEventEmitter.emit(this.champion);
	}
	updateLevel() {
		this.currentLevelEventEmitter.emit(this.currentLevel);
	}
}
