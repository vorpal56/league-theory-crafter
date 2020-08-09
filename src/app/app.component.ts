import { Component, OnInit, Input } from "@angular/core";
import { CHAMPIONS, LEVELS } from "./data";
import { Champion } from "./models/champion";
import { Item } from "./models/item";
import { ChampionService } from './services/champion.service';
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	title = "league-theory-crafter";
	champions = CHAMPIONS;
	champion: Champion = this.champions[1];
	levels = LEVELS;
	levelSelectorEnabled: boolean = false;
	selectedItems: Array<Item>;
	currentLevel: number = LEVELS[0].levelValue;
	currentLevelName: string = LEVELS[0].levelLabel;

	updateChampion() {
		// this.levelSelectorEnabled = true;
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
	}
	viewSelectedItems(value: any) {
		this.selectedItems = value;
	}
	constructor(private championService: ChampionService) {
	}
	ngOnInit() {
		this.championService.adjustBaseAndItemStats(this.champion, this.currentLevel, this.selectedItems);
	}
}
