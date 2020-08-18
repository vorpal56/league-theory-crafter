import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { RuneShard } from '../models/rune';
import { Item } from '../models/item';

@Injectable({
	providedIn: 'root'
})
export class RunesService {

	constructor() { }
	calculateRuneStats(selectedRunes: any, champion: Champion, currentLevel: number, totalStatsFromItems: any, adaptiveType: string, selectedElixir: Item, currentTime?: number) {
		currentTime = 19;
		// for stackable stats if the rune is stackable and the checkbox for stackable is enabled, then continue stacking any additional runes
		let totalStatsFromRunes = {};
		// get the current tenacity ratio which comes from merc treads if any without having to pass the item into the function
		let currentTenacityRatio = (1 - champion.stats.tenacity / 100);
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
				selectedRunes[runeTree].runes.forEach((rune: any) => {
					if (rune != null) {
						if (rune.name == "Gathering Storm") {
							let gatheringStormTotal = this.gatheringStormRune(adaptiveType, currentTime);
							totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += gatheringStormTotal : totalStatsFromRunes[adaptiveType] = gatheringStormTotal;
						} else if (rune.name == "Transcendence") {
							let transcendenceTotal = this.transcendenceRune(adaptiveType, currentLevel, totalStatsFromItems);
							for (let bonus in transcendenceTotal) {
								let bonusVal = transcendenceTotal[bonus];
								totalStatsFromRunes[bonus] ? totalStatsFromRunes[bonus] += bonusVal : totalStatsFromRunes[bonus] = bonusVal;
							}
						} else if (rune.name == "Legend: Tenacity") {
							currentTenacityRatio *= (1 - rune.stats.tenacity / 100);
						} else if (rune.name == "Unflinching") {
							let additiveTenacity = rune.stats.tenacity;
							additiveTenacity += selectedElixir.apiname == "elixirofiron" ? selectedElixir.tenacity : 0;
							currentTenacityRatio *= (1 - (additiveTenacity) / 100);
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
		console.log(totalStatsFromRunes);
		let totalTenacityRatio: number = (1 - currentTenacityRatio) * 100;
		champion.stats.tenacity = totalTenacityRatio;
		return totalStatsFromRunes;
	}
	gatheringStormRune(adaptiveType: string, currentTime: number) {
		let x = currentTime % 10 == 0 ? 1 + 0.1 * (currentTime) : 1 + 1 * Math.floor(currentTime / 10);
		console.log(x);
		return adaptiveType == "ad" ? 4.8 * x * (x - 1) * 0.5 : 8 * x * (x - 1) * 0.5;
	}
	transcendenceRune(adaptiveType: string, currentLevel: number, totalStatsFromItems: any): any {
		let additionalTranscendenceCdr: number = 0;
		if (currentLevel >= 10) {
			additionalTranscendenceCdr = 10;
		}
		let totalAdditionalCdr: number = additionalTranscendenceCdr;
		totalAdditionalCdr += totalStatsFromItems["cdr"] && totalStatsFromItems["cdr"] > 40 ? totalStatsFromItems["cdr"] - 40 : 0;
		let results = { "cdr": additionalTranscendenceCdr };
		results[adaptiveType] = adaptiveType == "ad" ? 1.2 * totalAdditionalCdr : 2 * totalAdditionalCdr;
		return results;
	}
	addRuneStats(champion: Champion, totalStatsFromRunes: any) {
		for (let key in totalStatsFromRunes) {
			if (key != "tenacity" && key != "as") {
				champion.stats[key] += totalStatsFromRunes[key];
			}
		}
	}
}
