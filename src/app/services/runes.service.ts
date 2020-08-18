import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { StatsService } from './stats.service';
import { RuneShard } from '../models/rune';

@Injectable({
	providedIn: 'root'
})
export class RunesService {

	constructor() { }
	addRuneStats(selectedRunes: any, champion: Champion, currentLevel: number, totalStatsFromItems: any, adaptiveType: string, currentTime?: number) {
		let totalStatsFromRunes = {};
		let legendTenacity = null;
		let unflinching = null;
		let currentTenacityRatio = (1 - champion.stats.tenacity / 100);
		console.log(currentTenacityRatio);
		for (let runeTree in selectedRunes) {
			if (runeTree == "runeShards") {
				let selectedRuneShards = selectedRunes[runeTree];
				selectedRuneShards.forEach((runeShard: RuneShard) => {
					if (runeShard) {
						if (runeShard.type && runeShard.type == "adaptive") {
							totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += runeShard.stats[adaptiveType] : totalStatsFromRunes[adaptiveType] = runeShard.stats[adaptiveType];
						} else {
							for (let runeShardStat in runeShard.stats) {
								let statKey = runeShardStat;
								let statVal = runeShard.stats[runeShardStat];
								if (runeShardStat.includes("_lvl")) {
									statKey = runeShardStat.replace("_lvl", "");
									statVal *= (currentLevel - 1);
								}
								totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += statVal : totalStatsFromRunes[statKey] = statVal;

							}
						}
					}
				});
			} else {
				// continue;
				console.log(selectedRunes[runeTree], selectedRunes[runeTree].runes);
				selectedRunes[runeTree].runes.forEach((rune: any) => {
					if (rune != null) {
						if (rune.name == "Gathering Storm") {
							return;
							let gatheringStormTotal = this.gatheringStormRune(adaptiveType, currentTime);
							totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += gatheringStormTotal : totalStatsFromRunes = gatheringStormTotal;
							// champion.stats[adaptiveType] += this.gatheringStormRune(adaptiveType, currentTime);
						} else if (rune.name == "Transcendence") {
							return;
							let transcendenceTotal = this.transcendenceRune(adaptiveType, currentLevel, totalStatsFromItems);
							for (let bonus in transcendenceTotal) {
								let bonusVal = transcendenceTotal[bonus];
								totalStatsFromRunes[bonus] ? totalStatsFromRunes[bonus] += bonusVal : totalStatsFromRunes[bonus] = bonusVal;
							}
							// champion.stats[adaptiveType] += transcendenceTotal
							// let additionalCdr: number = 0;
							// if (currentLevel >= 10) {
							// 	additionalCdr += 10;
							// 	// champion.stats.cdr += 10
							// 	totalStatsFromRunes["cdr"] ? totalStatsFromRunes["cdr"] += additionalCdr : totalStatsFromRunes = additionalCdr;
							// }
							// // let additionalCdr :number  = champion.stats.cdr > 40 ? champion.stats.cdr - 40 : 0;
							// additionalCdr += totalStatsFromItems["cdr"] && totalStatsFromItems["cdr"] > 40 ? totalStatsFromItems["cdr"] - 40 : 0;
							// champion.stats[adaptiveType] += adaptiveType == "ad" ? 1.2 * additionalCdr : 2 * additionalCdr;
						} else if (rune.name == "Legend: Tenacity" || rune.name == "Unflinching") {
							console.log(1 - rune.stats.tenacity / 100);
							currentTenacityRatio *= (1 - rune.stats.tenacity / 100);
							console.log("on calc", currentTenacityRatio);
						} else {
							return;
							for (let statKey in rune.stats) {
								totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += rune.stats[statKey] : totalStatsFromRunes = rune.stats[statKey];
							}

						}
					}

				});
			}
		}
		console.log(currentTenacityRatio);
		let totalTenacityRatio: number = (1 - currentTenacityRatio) * 100;
		console.log(totalTenacityRatio);
		return totalStatsFromRunes;
	}
	gatheringStormRune(adaptiveType: string, currentTime: number) {
		let x = 1 + 1 * currentTime;
		return adaptiveType == "ad" ? 4.8 * x * (x - 1) * 0.5 : 8 * x * (x - 1) * 0.5;
	}
	transcendenceRune(adaptiveType: string, currentLevel: number, totalStatsFromItems: any): any {
		let additionalCdr: number = 0;
		if (currentLevel >= 10) {
			additionalCdr += 10;
		}
		additionalCdr += totalStatsFromItems["cdr"] && totalStatsFromItems["cdr"] > 40 ? totalStatsFromItems["cdr"] - 40 : 0;
		return { "cdr": additionalCdr, adaptiveType: adaptiveType == "ad" ? 1.2 * additionalCdr : 2 * additionalCdr };
	}
	adaptiveStatFromShards(adaptiveType: string, runeShard: RuneShard) {
		if (runeShard.type == "adaptive") {
			return runeShard.stats[adaptiveType];
		}
	}
}
