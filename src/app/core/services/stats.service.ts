import { Injectable } from '@angular/core';

import { Champion } from '../models/champion';

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
		if (growthStatistic == null) { growthStatistic = 0; }
		var value = growthStatistic * (championLevel - 1) * (0.7025 + 0.0175 * (championLevel - 1));
		if (base) { value += base; }
		return value;
	}
	/**
	 * Method that adjusts the base stats given the champion stats
	 * @param  {Champion} champion the champion to adjust stats by
	 * @param  {number} champion.currentLevel the current level to adjust stats by
	 * @returns void
	 */
	adjustBaseStats(champion: Champion): void {
		let apiname = champion.apiname.toLowerCase();
		champion.stats.hp = this.statsGrowthFormula(champion.stats.hp_lvl, champion.currentLevel, champion.stats.hp_base);
		champion.stats.hp5 = this.statsGrowthFormula(champion.stats.hp5_lvl, champion.currentLevel, champion.stats.hp5_base);
		champion.stats.mp = champion.stats.mp_base ? this.statsGrowthFormula(champion.stats.mp_lvl, champion.currentLevel, champion.stats.mp_base) : 0;
		champion.stats.mp5 = champion.stats.mp5_base ? this.statsGrowthFormula(champion.stats.mp5_lvl, champion.currentLevel, champion.stats.mp5_base) : 0;
		champion.stats.ad = champion.stats.ad_base ? this.statsGrowthFormula(champion.stats.ad_lvl, champion.currentLevel, champion.stats.ad_base) : 0;
		champion.stats.ap = champion.stats.ap_base ? champion.stats.ap_base : 0;
		champion.stats.arm = champion.stats.arm_base ? this.statsGrowthFormula(champion.stats.arm_lvl, champion.currentLevel, champion.stats.arm_base) : 0;
		champion.stats.mr = champion.stats.mr_base ? this.statsGrowthFormula(champion.stats.mr_lvl, champion.currentLevel, champion.stats.mr_base) : 0;
		// attack speed is calculated in the adjustAttackSpeed method since it is dependant on items and runes which can be grabbed afterwards
		// champion.stats.as = champion.stats.as_base ? champion.stats.as_base * (1 + this.statsGrowthFormula(champion.stats.as_lvl, champion.currentLevel) / 100) : 0;
		champion.stats.cdr = champion.stats.cdr_base ? champion.stats.cdr_base : 0;
		champion.stats.ms = champion.stats.ms_base ? champion.stats.ms_base : 0;
		champion.stats.crit = champion.stats.crit_base ? 100 - champion.stats.crit_base : 0;
		champion.stats.critdmg = 0;
		champion.stats.ls = 0;
		champion.stats.spell_vamp = 0;
		champion.stats.leth = 0;
		champion.stats["apen%"] = 0;
		champion.stats.mpen = 0;
		champion.stats["mpen%"] = 0;
		champion.stats.tenacity = 0;
		champion.stats.heal_shield = 0;
		if (apiname == "cassiopeia") {
			champion.stats.ms += 4 * champion.currentLevel;
		} else if (apiname == "tristana") {
			champion.stats.range = 525 + 8 * (champion.currentLevel - 1);
		}
		return;
	}
	adjustAttackSpeed(champion: Champion, exceedsAttackSpeedLimit: boolean) {
		// we can go backwards in the formula to add any additional attackspeed gained from items and runes
		// the calulation is dependant on the stats growth formula which is calculated on adjustBaseStats function
		// but does not include item or rune bonuses
		// General Formula is:
		// AS = AS_BASE * (1 + (SGF + items + runes) / 100 )
		// 100 * (AS/AS_BASE - 1 - SGF/100) = items + runes
		let statsGrowthIncrease = this.statsGrowthFormula(champion.stats.as_lvl, champion.currentLevel) / 100;
		let totalAttackSpeed = 0;
		// the as stat is based on whole values (eg. 100% = 100, 20% = 20)
		totalAttackSpeed += champion.itemStats["as"] ? champion.itemStats["as"] : 0;
		totalAttackSpeed += champion.runeStats["as"] ? champion.runeStats["as"] : 0;
		totalAttackSpeed += champion.otherSourcesStats["as"] ? champion.otherSourcesStats["as"] : 0;
		totalAttackSpeed *= 0.01; // divide by 100 on right side
		totalAttackSpeed += (statsGrowthIncrease + 1); // add 1 and SGF/100
		totalAttackSpeed *= champion.stats.as_base; // multiply by AS_BASE
		totalAttackSpeed -= totalAttackSpeed > 2.5 && exceedsAttackSpeedLimit == false ? (totalAttackSpeed - 2.5) : 0;
		champion.stats.as = totalAttackSpeed;
		return totalAttackSpeed;
	}
}
