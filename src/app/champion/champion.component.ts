import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Champion } from "../models/champion";
import { CHAMPIONS, LEVELS } from '../data';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
})
export class ChampionComponent implements OnInit {
	constructor() { }

	champions = CHAMPIONS;
	levels = LEVELS;

	@Output('selectedChampion') selectedChampionEventEmitter = new EventEmitter<Champion>();
	@Output('selectedLevel') currentLevelEventEmitter = new EventEmitter<number>();

	champion: Champion = this.champions[8];
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

	isValidStatName(statName: string) {
		// console.log(statName);
		if (statName == "ad" || statName == "ap" || statName == "ls" || statName == "spell_vamp" || statName == "arm" || statName == "mr" || statName == "apen" || statName == "mpen" || statName == "as" || statName == "cdr" || statName == "range" || statName == "critdmg" || statName == "crit" || statName == "ms" || statName == "tenacity" || statName == "heal_shield") {
			console.log(statName);
			return true;
		}
		return false;
	}
	assetStatUrl(statName: string) {
		return "assets/images/icons/" + statName + "_icon.png";
	}
}
