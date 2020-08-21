import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { RuneShard, Rune } from '../models/rune';
import { Item } from '../models/item';

@Injectable({
	providedIn: 'root'
})
export class RunesService {

	constructor() { }
	calculateRuneStats(selectedRunes: any, champion: Champion, currentLevel: number, totalStatsFromItems: any, adaptiveType: string, selectedElixir: Item, stackAllRunes: boolean, currentTime: number): any[] {
		// currentTime = 19;
		// for stackable stats if the rune is stackable and the checkbox for stackable is enabled, then continue stacking any additional runes
		let totalStatsFromRunes = {};
		// get the current tenacity ratio which comes from merc treads if any without having to pass the item into the function
		let currentTenacityRatio = (1 - champion.stats.tenacity / 100);
		let hasTranscendance: boolean = false;
		let cdrCap = 40;
		for (let runeTree in selectedRunes) {
			if (runeTree != "runeShards") {
				// some of the rune calculations are done directly in the condition instead of a separate method depending on complexity and extensibility
				selectedRunes[runeTree].runes.forEach((rune: Rune) => {
					// runes are in order of precision, domination, sorcery, resolve, and inspiration
					if (rune != null) {
						let runeApiname = rune.apiname;
						if (runeApiname == "presenceofmind") {
							let presenceOfMindTotal = this.presenceOfMindRune(rune, champion.resource.toLowerCase(), stackAllRunes);
							console.log(presenceOfMindTotal);
							totalStatsFromRunes["mp"] ? totalStatsFromRunes["mp"] += presenceOfMindTotal : totalStatsFromRunes["mp"] = presenceOfMindTotal;
						} else if (runeApiname == "legendalacrity") {
							let statKey = "as";
							let bonusAttackSpeed = this.legendRune(rune, statKey, stackAllRunes);
							totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += bonusAttackSpeed : totalStatsFromRunes[statKey] = bonusAttackSpeed;
						} else if (runeApiname == "legendtenacity") {
							let additiveTenacity = rune.stats.tenacity;
							additiveTenacity += stackAllRunes ? rune.stackable.tenacity : 0;
							currentTenacityRatio *= (1 - additiveTenacity / 100);
						} else if (runeApiname == "legendbloodline") {
							let statKey = "ls";
							let bonusLifeSteal = this.legendRune(rune, statKey, stackAllRunes);
							totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += bonusLifeSteal : totalStatsFromRunes[statKey] = bonusLifeSteal;
						} else if (runeApiname == "unflinching") {
							let additiveTenacity = rune.stats.tenacity;
							additiveTenacity += selectedElixir.apiname == "elixirofiron" ? selectedElixir.tenacity : 0;
							currentTenacityRatio *= (1 - (additiveTenacity) / 100);
						} else if (runeApiname == "zombieward" || runeApiname == "ghostporo" || runeApiname == "eyeballcollection") {
							let stackedBonus = stackAllRunes ? rune.stackable[adaptiveType] : 0;
							totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += stackedBonus : totalStatsFromRunes[adaptiveType] = stackedBonus;
						} else if (runeApiname == "ravenoushunter") {
							let baseStats = rune.stats;
							if (stackAllRunes) {
								for (let stackableStatKey in rune.stackable) {
									baseStats[stackableStatKey] += rune.stackable[stackableStatKey];
									totalStatsFromRunes[stackableStatKey] ? totalStatsFromRunes[stackableStatKey] += rune.stackable[stackableStatKey] : totalStatsFromRunes[stackableStatKey] = rune.stackable[stackableStatKey];
								}
							}
						} else if (runeApiname == "manaflowband") {
							if (stackAllRunes) {
								totalStatsFromRunes["mp"] ? totalStatsFromRunes["mp"] += rune.stackable["mp"] : totalStatsFromRunes["mp"] = rune.stackable["mp"];
							}
						} else if (runeApiname == "absolutefocus") {
							let bonusAdaptive = rune.stats[adaptiveType] + (rune.stats[adaptiveType + "_lvl"] * (currentLevel - 1));
							totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += bonusAdaptive : totalStatsFromRunes[adaptiveType] = bonusAdaptive;
						} else if (runeApiname == "gatheringstorm") {
							let gatheringStormTotal = this.gatheringStormRune(adaptiveType, currentTime);
							totalStatsFromRunes[adaptiveType] ? totalStatsFromRunes[adaptiveType] += gatheringStormTotal : totalStatsFromRunes[adaptiveType] = gatheringStormTotal;
						} else if (runeApiname == "transcendence") {
							hasTranscendance = true;
						} else if (runeApiname == "conditioning") {
							if (currentTime >= 12) {
								for (let statKey in rune.stats) {
									let statVal = rune.stats[statKey];
									totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += statVal : totalStatsFromRunes[statKey] = statVal;
								}
							}
						} else if (runeApiname == "overgrowth") {
							if (stackAllRunes) {
								for (let statKey in rune.stackable) {
									let statVal = rune.stackable[statKey];
									totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += statVal : totalStatsFromRunes[statKey] = statVal;
								}
							}
						} else if (runeApiname == "revitalize") {
							totalStatsFromRunes["heal_shield"] = rune.stats.heal_shield;
						} else if (runeApiname == "magicalfootwear") {
							totalStatsFromRunes["ms"] = rune.stats["ms"];
						} else if (runeApiname == "biscuitdelivery") {
							if (stackAllRunes) {
								totalStatsFromRunes["mp"] ? totalStatsFromRunes["mp"] += rune.stackable["mp"] : totalStatsFromRunes["mp"] = rune.stackable["mp"];
							}
						} else if (runeApiname == "cosmicinsight") {
							cdrCap += 5;
							totalStatsFromRunes["cdr"] = rune.stats.cdr; // reason we can add directly is because we need to know the cdr cap before applying transcendance and no other rune provides cdr
						} else {
							return;
							for (let statKey in rune.stats) {
								totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += rune.stats[statKey] : totalStatsFromRunes = rune.stats[statKey];
							}
						}
					}
				});
			} else {
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
			}
		}
		if (hasTranscendance) {
			let transcendenceTotal = this.transcendenceRune(adaptiveType, currentLevel, totalStatsFromItems, cdrCap);
			for (let bonus in transcendenceTotal) {
				let bonusVal = transcendenceTotal[bonus];
				totalStatsFromRunes[bonus] ? totalStatsFromRunes[bonus] += bonusVal : totalStatsFromRunes[bonus] = bonusVal;
			}
		}
		let totalTenacityRatio: number = (1 - currentTenacityRatio) * 100;
		let tenacityFromRunes = totalTenacityRatio - champion.stats.tenacity;
		if (tenacityFromRunes > 0) { totalStatsFromRunes['tenacity'] = tenacityFromRunes; }
		console.log(totalStatsFromRunes);
		champion.stats.tenacity = totalTenacityRatio;
		return [totalStatsFromRunes, cdrCap];
	}
	legendRune(rune: Rune, statKey: string, stackAllRunes: boolean) {
		let bonusStat = rune.stats[statKey];
		bonusStat += stackAllRunes ? rune.stackable[statKey] : 0;
		return bonusStat;
	}
	presenceOfMindRune(rune: Rune, championResourceType: string, stackAllRunes: boolean) {
		let bonusResource = stackAllRunes ? rune.stackable.mp : 0;
		if (championResourceType == "mana") {
			return bonusResource;
		} else if (championResourceType == "energy") {
			return bonusResource / 10;
		}
		return 0;
	}
	gatheringStormRune(adaptiveType: string, currentTime: number) {
		// gathering storm is dependant on time and it only increases on increments of 10 minutes
		let x = currentTime % 10 == 0 ? 1 + 0.1 * (currentTime) : 1 + 1 * Math.floor(currentTime / 10);
		return adaptiveType == "ad" ? 4.8 * x * (x - 1) * 0.5 : 8 * x * (x - 1) * 0.5;
	}
	transcendenceRune(adaptiveType: string, currentLevel: number, totalStatsFromItems: any, cdrCap: number): any {
		let additionalTranscendenceCdr: number = currentLevel >= 10 ? 10 : 0;
		let totalAdditionalCdr: number = additionalTranscendenceCdr;
		totalAdditionalCdr += totalStatsFromItems["cdr"] && totalStatsFromItems["cdr"] > cdrCap ? totalStatsFromItems["cdr"] - cdrCap : 0;
		let results = { "cdr": additionalTranscendenceCdr };
		results[adaptiveType] = adaptiveType == "ad" ? 1.2 * totalAdditionalCdr : 2 * totalAdditionalCdr;
		return results;
	}
	addRuneStats(champion: Champion, totalStatsFromRunes: any) {
		for (let key in totalStatsFromRunes) {
			let keyVal = totalStatsFromRunes[key];
			if (keyVal != 0 && key != "tenacity" && key != "as") {
				champion.stats[key] += keyVal;
			}
		}
		// multipliers come from conditioning rune post 12 minutes
		let armorMultiplier = totalStatsFromRunes["arm_mult"];
		if ("arm_mult" in totalStatsFromRunes && armorMultiplier) {
			champion.stats["arm"] += champion.stats["arm"] * (armorMultiplier / 100);
		}
		let mrMultiplier = totalStatsFromRunes["mr_mult"];
		if ("mr_mult" in totalStatsFromRunes && mrMultiplier) {
			champion.stats["mr"] += champion.stats["mr"] * (mrMultiplier / 100);
		}
		let hpMultiplier = totalStatsFromRunes["hp_mult"];
		if ("hp_mult" in totalStatsFromRunes && hpMultiplier) {
			champion.stats["hp"] += champion.stats["hp"] * (hpMultiplier / 100);
		}
		return;
	}
}
