import { Component, OnInit, Input } from "@angular/core";
import { CHAMPIONS, LEVELS } from "./data";
import { Champion } from "./models/champion";
import { ChampionService } from './services/champion.service';
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	title = "league-theory-crafter";
	champions = CHAMPIONS;
	champion: Champion;
	levels = LEVELS;
	levelSelectorEnabled: boolean = false;
	// @Input() championDetails: Champion;
	// @Input() currentChampionLevel: number;
	@Input() championState: any;
	currentLevel: number = 1;
	// reallocatePoints: boolean = false;
	// setChampionState(championState) {
	// 	this.champion = championState.selectedChampion;
	// 	this.currentLevel = championState.currentLevel;
	// 	// console.log(this.reallocatePoints);
	// 	// this.reallocatePoints = false;
	// 	console.log(this.reallocatePoints);
	// }

	setChampionLevel(levelName: string) {
		this.currentLevel = LEVELS[levelName];
		this.championService.adjustBaseStats(this.champion, this.currentLevel);
	}

	updateChampionOnSelect(selectedChampion: Champion) {
		this.champion = selectedChampion;
		this.levelSelectorEnabled = true;
		this.championService.adjustBaseStats(this.champion, this.currentLevel);
	}


	constructor(private championService: ChampionService) {
	}
	ngOnInit() {

	}
}
