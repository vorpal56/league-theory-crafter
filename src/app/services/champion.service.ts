import { Injectable } from '@angular/core';
import { Champion } from "../models/champion";
@Injectable({
	providedIn: 'root'
})
export class ChampionService {

	constructor() { }

	public formatNPlaces(num: number, n?: number): number {
		let exponent: number = n ? 10 ** n : 100;
		var value = Number(
			Math.round((num + Number.EPSILON) * exponent) /
			Number(exponent.toFixed(n))
		);
		return value;
	}
	private statsGrowthFormula(
		growthStatistic: number,
		championLevel: number,
		base?: number
	): number {
		var value =
			growthStatistic *
			(championLevel - 1) *
			(0.7025 + 0.0175 * (championLevel - 1));
		if (base) {
			value = this.formatNPlaces(base + value, 3);
		}
		return value;
	}
	public addItemStats(baseStats: any, selectedItems: any[]) {
		let totalNumbers = baseStats;
		let multKeyValues = { "ad_mult": 0, "ap_mult": 0, "hp_mult": 0 };
		selectedItems.forEach(item => {
			for (let itemStatName in item) {
				if (item[itemStatName] != 0) {
					if (itemStatName.includes("mult")) {
						multKeyValues[itemStatName] += item[itemStatName] / 100;
					} else {
						totalNumbers[itemStatName] += item[itemStatName];
					}
				}
			}
		});
		for (let mult in multKeyValues) {
			totalNumbers[mult.replace("_mult", "")] *= multKeyValues[mult];
		}
		return totalNumbers;
	}

	adjustBaseStats(selectedChampion: Champion, currentLevel?: number, selectedItems?: any[]) {
		selectedChampion.stats.hp = this.statsGrowthFormula(selectedChampion.stats.hp_lvl, currentLevel, selectedChampion.stats.hp_base);
		selectedChampion.stats.hp5 = this.statsGrowthFormula(selectedChampion.stats.hp5_lvl, currentLevel, selectedChampion.stats.hp5_base);
		selectedChampion.stats.mp = selectedChampion.stats.mp_base ? this.statsGrowthFormula(selectedChampion.stats.mp_lvl, currentLevel, selectedChampion.stats.mp_base) : 0;
		selectedChampion.stats.mp5 = selectedChampion.stats.mp5_base ? this.statsGrowthFormula(selectedChampion.stats.mp5_lvl, currentLevel, selectedChampion.stats.mp5_base) : 0;
		selectedChampion.stats.ad = selectedChampion.stats.ad_base ? this.statsGrowthFormula(selectedChampion.stats.ad_lvl, currentLevel, selectedChampion.stats.ad_base) : 0;
		selectedChampion.stats.ap = selectedChampion.stats.ap_base ? selectedChampion.stats.ap_base : 0;
		selectedChampion.stats.arm = selectedChampion.stats.arm_base ? this.statsGrowthFormula(selectedChampion.stats.arm_lvl, currentLevel, selectedChampion.stats.arm_base) : 0;
		selectedChampion.stats.mr = selectedChampion.stats.mr_base ? this.statsGrowthFormula(selectedChampion.stats.mr_lvl, currentLevel, selectedChampion.stats.mr_base) : 0;
		selectedChampion.stats.as = selectedChampion.stats.as_base ? this.formatNPlaces(selectedChampion.stats.as_base * (1 + this.statsGrowthFormula(selectedChampion.stats.as_lvl, currentLevel)), 3) : 0;
		selectedChampion.stats.cdr = selectedChampion.stats.cdr_base ? selectedChampion.stats.cdr_base : 0;
		selectedChampion.stats.range = selectedChampion.stats.range_base ? selectedChampion.stats.range_base : 0;
		selectedChampion.stats.ms = selectedChampion.stats.ms_base ? selectedChampion.stats.ms_base : 0;
		selectedChampion.stats.crit = selectedChampion.stats.crit_base ? 100 - selectedChampion.stats.crit_base : 0;
		selectedItems ? selectedChampion.stats = this.addItemStats(selectedChampion.stats, selectedItems) : null;
	}

}
