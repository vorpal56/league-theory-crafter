import { Injectable } from '@angular/core';
import { Champion } from "../models/champion";
@Injectable({
	providedIn: 'root'
})
export class StatsService {

	constructor() { }
	/**
	 * Method that applies the stats growth formula since per level stats do not grow linearly
	 * @param  {number} growthStatistic the growth statistic per level
	 * @param  {number} championLevel the champion level
	 * @param  {number} base? the base value of the stat
	 * @returns number
	 */
	statsGrowthFormula(growthStatistic: number, championLevel: number, base?: number): number {
		var value = growthStatistic * (championLevel - 1) * (0.7025 + 0.0175 * (championLevel - 1));
		if (base) { value += base; }
		return value;
	}
	/**
	 * Method that adjusts the base stats given the champion stats
	 * @param  {Champion} selectedChampion the champion to adjust stats by
	 * @param  {number} currentLevel the current level to adjust stats by
	 * @returns void
	 */
	adjustBaseStats(selectedChampion: Champion, currentLevel: number): void {
		selectedChampion.stats.hp = this.statsGrowthFormula(selectedChampion.stats.hp_lvl, currentLevel, selectedChampion.stats.hp_base);
		selectedChampion.stats.hp5 = this.statsGrowthFormula(selectedChampion.stats.hp5_lvl, currentLevel, selectedChampion.stats.hp5_base);
		selectedChampion.stats.mp = selectedChampion.stats.mp_base ? this.statsGrowthFormula(selectedChampion.stats.mp_lvl, currentLevel, selectedChampion.stats.mp_base) : 0;
		selectedChampion.stats.mp5 = selectedChampion.stats.mp5_base ? this.statsGrowthFormula(selectedChampion.stats.mp5_lvl, currentLevel, selectedChampion.stats.mp5_base) : 0;
		selectedChampion.stats.ad = selectedChampion.stats.ad_base ? this.statsGrowthFormula(selectedChampion.stats.ad_lvl, currentLevel, selectedChampion.stats.ad_base) : 0;
		selectedChampion.stats.ap = selectedChampion.stats.ap_base ? selectedChampion.stats.ap_base : 0;
		selectedChampion.stats.arm = selectedChampion.stats.arm_base ? this.statsGrowthFormula(selectedChampion.stats.arm_lvl, currentLevel, selectedChampion.stats.arm_base) : 0;
		selectedChampion.stats.mr = selectedChampion.stats.mr_base ? this.statsGrowthFormula(selectedChampion.stats.mr_lvl, currentLevel, selectedChampion.stats.mr_base) : 0;
		// attack speed is calculated in the adjustAttackSpeed method since it is dependant on items and runes which can be grabbed afterwards
		// selectedChampion.stats.as = selectedChampion.stats.as_base ? selectedChampion.stats.as_base * (1 + this.statsGrowthFormula(selectedChampion.stats.as_lvl, currentLevel) / 100) : 0;
		selectedChampion.stats.cdr = selectedChampion.stats.cdr_base ? selectedChampion.stats.cdr_base : 0;
		selectedChampion.stats.ms = selectedChampion.stats.ms_base ? selectedChampion.stats.ms_base : 0;
		selectedChampion.stats.crit = selectedChampion.stats.crit_base ? 100 - selectedChampion.stats.crit_base : 0;
		selectedChampion.stats.critdmg = 0;
		selectedChampion.stats.ls = 0;
		selectedChampion.stats.spell_vamp = 0;
		selectedChampion.stats.leth = 0;
		selectedChampion.stats["apen%"] = 0;
		selectedChampion.stats.mpen = 0;
		selectedChampion.stats["mpen%"] = 0;
		selectedChampion.stats.tenacity = 0;
		selectedChampion.stats.heal_shield = 0;
		if (selectedChampion.apiname.toLowerCase() == "tristana") {
			selectedChampion.stats.range = 525 + 8 * (currentLevel - 1);
		}
		return;
	}
	adjustAttackSpeed(champion: Champion, currentLevel: number) {
		// we can go backwards in the formula to add any additional attackspeed gained from items and runes
		// the calulation is dependant on the stats growth formula which is calculated on adjustBaseStats function
		// but does not include item or rune bonuses
		// General Formula is:
		// AS = AS_BASE * (1 + (SGF + items + runes) / 100 )
		// 100 * (AS/AS_BASE - 1 - SGF/100) = items + runes
		let statsGrowthIncrease = this.statsGrowthFormula(champion.stats.as_lvl, currentLevel) / 100;
		let totalAttackSpeed = 0;
		// the as stat is based on whole values (eg. 100% = 100, 20% = 20)
		totalAttackSpeed += champion.itemStats["as"] ? champion.itemStats["as"] : 0;
		totalAttackSpeed += champion.runeStats["as"] ? champion.runeStats["as"] : 0;
		totalAttackSpeed += champion.otherSourcesStats["as"] ? champion.otherSourcesStats["as"] : 0;
		totalAttackSpeed *= 0.01; // divide by 100 on right side
		totalAttackSpeed += (statsGrowthIncrease + 1); // add 1 and SGF/100
		totalAttackSpeed *= champion.stats.as_base; // multiply by AS_BASE
		champion.stats.as = totalAttackSpeed;
		return totalAttackSpeed;
	}
}
