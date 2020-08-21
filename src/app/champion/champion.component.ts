import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Champion } from "../models/champion";
import { CHAMPIONS } from '../../data/champions';
import { LEVELS, TIMES } from '../../data/data';
import { ChampionService } from '../services/champion.service';
import { Item } from '../models/item';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
})
export class ChampionComponent implements OnInit {
	champions = CHAMPIONS;
	levels = LEVELS;
	times = TIMES;

	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: any;
	@Input("stackAllRunes") stackAllRunes: boolean;

	@Output('selectedChampion') selectedChampionEventEmitter = new EventEmitter<Champion>();
	@Output('selectedLevel') currentLevelEventEmitter = new EventEmitter<number>();
	@Output('selectedTime') currentTimeEventEmitter = new EventEmitter<number>();

	champion: Champion = this.champions[8];
	currentLevel: number = this.levels[9].levelValue;
	currentTime: number = this.times[0].timeValue;

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
		this.selectedChampionEventEmitter.emit(this.champion);
		this.currentLevelEventEmitter.emit(this.currentLevel);
		this.currentTimeEventEmitter.emit(this.currentTime);
		return;
	};
	updateChampion() {
		this.selectedChampionEventEmitter.emit(this.champion);
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		return;
	}
	updateLevel() {
		this.currentLevelEventEmitter.emit(this.currentLevel);
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		return;
	}
	updateCurrentTime() {
		this.currentTimeEventEmitter.emit(this.currentTime);
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		return;
	}
	isValidStatName(statName: string) {
		if (statName == "ad" || statName == "ap" || statName == "ls" || statName == "spell_vamp" || statName == "arm" || statName == "mr" || statName == "apen" || statName == "mpen" || statName == "as" || statName == "cdr" || statName == "range" || statName == "critdmg" || statName == "crit" || statName == "ms" || statName == "tenacity" || statName == "heal_shield") {
			return true;
		}
		return false;
	}
	assetStatUrl(statName: string) {
		return "assets/images/icons/" + statName + "_icon.png";
	}
}
