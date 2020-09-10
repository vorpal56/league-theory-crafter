import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { RuneShard, Rune } from '../models/rune';
import { Item } from '../models/item';

@Injectable({
	providedIn: 'root'
})
export class RunesService {

	constructor() { }
	/**
	 * @param  {any} selectedRunes the selected runes to calculate stats with
	 * @param  {Champion} champion the selected champion to apply the calculations towards
	 * @param  {number} currentLevel the current level for level dependant runes such as transcendance and abs focus.
	 * @param  {any} totalStatsFromItems the total stats from items to calculate adaptive bonus from transcendence
	 * @param  {string} adaptiveType the adaptive type to switch the calculation based on the item
	 * @param  {Item} selectedElixir the selected elixir for tenacity calulation (if neccessary)
	 * @param  {boolean} stackAllRunes to stack or not stack dependant runes such as pom, legend runes, etc.
	 * @param  {number} currentTime the current time for time dependant runes such as gatherin storm
	 * @returns any the stats from runes
	 */
	calculateRuneStats(selectedRunes: any, champion: Champion, currentLevel: number, adaptiveType: string, selectedElixir: Item, stackAllRunes: boolean, currentTime: number): any[] {
		// for stackable stats if the rune is stackable and the checkbox for stackable is enabled, then continue stacking any additional runes
		let totalStatsFromRunes = {};
		let totalDamageFromRunes = { "physicalDamage": 0, "magicDamage": 0, "trueDamage": 0 };
		// get the current tenacity ratio which comes from merc treads if any without having to pass the item into the function
		let currentTenacityRatio = (1 - champion.stats.tenacity / 100);
		let hasTranscendance: boolean = false;
		let cdrCap = 40;
		let addedTenacityElixir: boolean = false;
		let adaptiveDamageType = adaptiveType == "ad" ? "physicalDamage" : "magicDamage";
		let championRangeType = champion["rangetype"].toLowerCase();
		let AP = champion.stats.ap;
		let maximumHealth = champion.stats.hp;
		let bonusAD = champion.item_stats["ad"] ? champion.item_stats["ad"] : 0;
		let bonusHealth = champion.item_stats["hp"] ? champion.item_stats["hp"] : 0;
		for (let runeTree in selectedRunes) {
			if (runeTree != "runeShards") {
				// some of the rune calculations are done directly in the condition instead of a separate method depending on complexity and extensibility
				selectedRunes[runeTree].runes.forEach((rune: Rune) => {
					// runes are in order of precision, domination, sorcery, resolve, and inspiration
					if (rune != null) {
						let runeApiname = rune.apiname;
						if (runeApiname == "presenceofmind") {
							let presenceOfMindTotal = this.presenceOfMindRune(rune, champion.resource.toLowerCase(), stackAllRunes);
							totalStatsFromRunes["mp"] ? totalStatsFromRunes["mp"] += presenceOfMindTotal : totalStatsFromRunes["mp"] = presenceOfMindTotal;
						} else if (runeApiname == "legendalacrity" || runeApiname == "legendbloodline") {
							let statKey = runeApiname == "legendalacrity" ? "as" : "ls";
							let bonus = this.legendRune(rune, statKey, stackAllRunes);
							totalStatsFromRunes[statKey] ? totalStatsFromRunes[statKey] += bonus : totalStatsFromRunes[statKey] = bonus;
						} else if (runeApiname == "legendtenacity") {
							let additiveTenacity = rune.stats.tenacity;
							additiveTenacity += stackAllRunes ? rune.stackable.tenacity : 0;
							currentTenacityRatio *= (1 - additiveTenacity / 100);
						} else if (runeApiname == "unflinching") {
							let additiveTenacity = rune.stats.tenacity;
							if (selectedElixir.apiname == "elixirofiron") {
								addedTenacityElixir = true;
								additiveTenacity += selectedElixir.tenacity;
							}
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
							let expressionString = rune["string_expression"];
							// phaserush has a ranged_expression
							if (expressionString && expressionString != "") {
								try {
									var expressionValue = eval(expressionString);
									if (rune["type"] && rune["type"] == "adaptive") {
										expressionValue *= adaptiveType == "ad" ? 0.6 : 1;
										if (runeApiname == "conqueror" && stackAllRunes) {
											expressionValue *= 12;
										}
										totalDamageFromRunes[adaptiveDamageType] ? totalDamageFromRunes[adaptiveDamageType] += expressionValue : totalDamageFromRunes[adaptiveDamageType] = expressionValue;
									} else if (rune["affects_stat"] && rune["affects_stat"] != "") {
										let affectsStat = rune["affects_stat"];
										if (affectsStat.includes("Damage")) {
											totalDamageFromRunes[affectsStat] ? totalDamageFromRunes[affectsStat] += expressionValue : totalDamageFromRunes[affectsStat] = expressionValue;
										} else {
											if (rune.apiname == "phaserush") {
												if (championRangeType == "ranged") { expressionValue = eval(rune["ranged_expression"]); };
											}
											// affects_stats = as specifically (this could be a problem in the future)
											expressionValue *= 100;
											totalStatsFromRunes[affectsStat] ? totalStatsFromRunes[affectsStat] += expressionValue : totalStatsFromRunes[affectsStat] = expressionValue;
										}
									}
								} catch (error) {
									console.error("Cannot eval rune expression");
								}
							}
						}
					}
				});
			} else {
				// do the rune shard calculation
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
			let transcendenceTotal = this.transcendenceRune(adaptiveType, currentLevel, champion.item_stats, cdrCap);
			for (let bonus in transcendenceTotal) {
				let bonusVal = transcendenceTotal[bonus];
				totalStatsFromRunes[bonus] ? totalStatsFromRunes[bonus] += bonusVal : totalStatsFromRunes[bonus] = bonusVal;
			}
		}
		if (!addedTenacityElixir && selectedElixir.apiname == "elixirofiron") {
			currentTenacityRatio *= (1 - (selectedElixir.tenacity) / 100);
		}
		let totalTenacityRatio: number = (1 - currentTenacityRatio) * 100;
		let tenacityFromRunes = totalTenacityRatio - champion.stats.tenacity;
		if (tenacityFromRunes > 0) { totalStatsFromRunes['tenacity'] = tenacityFromRunes; }
		if (totalStatsFromRunes != {}) {
			console.log(totalStatsFromRunes);
		}
		console.log(totalDamageFromRunes);
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
	addRuneStats(champion: Champion) {
		for (let key in champion.rune_stats) {
			let keyVal = champion.rune_stats[key];
			if (keyVal != 0 && key != "tenacity" && key != "as") {
				champion.stats[key] += keyVal;
			}
		}
		// multipliers come from conditioning rune post 12 minutes
		let armorMultiplier = champion.rune_stats["arm_mult"];
		if ("arm_mult" in champion.rune_stats && armorMultiplier) {
			champion.stats["arm"] += champion.stats["arm"] * (armorMultiplier / 100);
		}
		let mrMultiplier = champion.rune_stats["mr_mult"];
		if ("mr_mult" in champion.rune_stats && mrMultiplier) {
			champion.stats["mr"] += champion.stats["mr"] * (mrMultiplier / 100);
		}
		let hpMultiplier = champion.rune_stats["hp_mult"];
		if ("hp_mult" in champion.rune_stats && hpMultiplier) {
			champion.stats["hp"] += champion.stats["hp"] * (hpMultiplier / 100);
		}
		return;
	}
}
