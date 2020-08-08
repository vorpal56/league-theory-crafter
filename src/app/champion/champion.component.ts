import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Champion } from "../models/champion";
import { ChampionService } from '../services/champion.service';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
})
export class ChampionComponent implements OnInit {
	constructor(private championService: ChampionService) { }
	@Input() champion: Champion;
	// currentLevel: number = 1;
	// allowFirstLevelChange: boolean = false;

	ngOnInit(): void { }
	/**
	 * formatNPlaces
	 * */
	// public formatNPlaces(num: number, n?: number): number {
	// 	let exponent: number = n ? 10 ** n : 100;
	// 	var value = Number(
	// 		Math.round((num + Number.EPSILON) * exponent) /
	// 		Number(exponent.toFixed(n))
	// 	);
	// 	return value;
	// }
	// private statsGrowthFormula(
	// 	growthStatistic: number,
	// 	championLevel: number,
	// 	base?: number
	// ): number {
	// 	var value =
	// 		growthStatistic *
	// 		(championLevel - 1) *
	// 		(0.7025 + 0.0175 * (championLevel - 1));
	// 	if (base) {
	// 		value = this.formatNPlaces(base + value, 3);
	// 	}
	// 	return value;
	// }
	// adjustBaseStats(): void {
	// 	this.champion.stats.ad = this.statsGrowthFormula(this.champion.stats.ad_lvl, this.currentLevel, this.champion.stats.ad_base);
	// 	this.champion.stats.hp = this.statsGrowthFormula(this.champion.stats.hp_lvl, this.currentLevel, this.champion.stats.hp_base);
	// 	this.champion.stats.mp = this.statsGrowthFormula(this.champion.stats.mp_lvl, this.currentLevel, this.champion.stats.mp_base);
	// 	this.champion.stats.arm = this.statsGrowthFormula(this.champion.stats.arm_lvl, this.currentLevel, this.champion.stats.arm_base);
	// 	this.champion.stats.mr = this.statsGrowthFormula(this.champion.stats.mr_lvl, this.currentLevel, +this.champion.stats.mr_base);
	// 	this.champion.stats.as = this.formatNPlaces(this.champion.stats.as_base * (1 + this.statsGrowthFormula(this.champion.stats.as_lvl, this.currentLevel)), 3);
	// }
	// increaseLevel = () => {
	// 	if (this.allowFirstLevelChange === false) {
	// 		this.allowFirstLevelChange = true;
	// 	} else {
	// 		if (this.currentLevel < 18) {
	// 			this.currentLevel += 1;
	// 			this.adjustBaseStats();
	// 			this.champion.stats.crit = this.champion.stats.crit_base + this.champion.stats.crit_lvl ? this.champion.stats.crit_lvl : 0;
	// 			this.champion.stats.ms = this.champion.stats.ms_base + this.champion.stats.ms_lvl ? this.champion.stats.ms_lvl : 0;
	// 			this.champion.stats.cdr = this.champion.stats.cdr_base + this.champion.stats.cdr_lvl ? this.champion.stats.cdr_lvl : 0;
	// 			this.champion.stats.range = this.formatNPlaces(this.champion.stats.range_base + this.champion.stats.range_lvl ? this.champion.stats.range_lvl : 0);
	// 		}

	// 	}
	// 	this.championState.emit({ "selectedChampion": this.champion, "currentLevel": this.currentLevel, "isFirst": this.allowFirstLevelChange, "reset": this.resetAllocation });
	// 	// this.championDetails.emit(this.champion);
	// 	// this.currentChampionLevel.emit(this.currentLevel);
	// 	// console.log(this.currentLevel);
	// };
	// emitChampionState(value) {
	// 	this.championState.emit({ "selectedChampion": this.champion, "currentLevel": this.currentLevel, "isFirst": this.allowFirstLevelChange, "reset": this.resetAllocation });
	// }
	// decreaseLevel = (): void => {
	// 	if (this.currentLevel > 1) {
	// 		this.currentLevel -= 1;
	// 		this.adjustBaseStats();
	// 		this.champion.stats.crit = this.champion.stats.crit_base - this.champion.stats.crit_lvl ? this.champion.stats.crit_lvl : 0;
	// 		this.champion.stats.ms = this.champion.stats.ms_base - this.champion.stats.ms_lvl ? this.champion.stats.ms_lvl : 0;
	// 		this.champion.stats.cdr = this.champion.stats.cdr_base - this.champion.stats.cdr_lvl ? this.champion.stats.cdr_lvl : 0;
	// 		this.champion.stats.range = this.formatNPlaces(this.champion.stats.range_base - this.champion.stats.range_lvl ? this.champion.stats.range_lvl : 0);
	// 	} else {
	// 		this.allowFirstLevelChange = false;
	// 	}
	// 	this.championState.emit({ "selectedChampion": this.champion, "currentLevel": this.currentLevel, "isFirst": this.allowFirstLevelChange, "reset": this.resetAllocation });
	// 	// this.championDetails.emit(this.champion);
	// 	// this.currentChampionLevel.emit(this.currentLevel);
	// };
}
