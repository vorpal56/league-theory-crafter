import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { RuneShard, Rune, RuneModifiers } from '../models/rune';
import { Item } from '../models/item';
import { TargetDetails } from '../models/target';

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
	 * @param  {[boolean, number]} runeModifiers boolean to stack all the rune choices or not (eg. legend runes) and dark harvest soul count
	 * @param  {number} currentTime the current time for time dependant runes such as gatherin storm
	 * @returns any the stats from runes
	 */
	calculateRuneStats(champion: Champion, selectedRunes: any, currentLevel: number, currentTime: number, adaptiveType: string, selectedElixir: Item, runeModifiers: RuneModifiers, targetDetails: TargetDetails): any[] {
		// for stackable stats if the rune is stackable and the checkbox for stackable is enabled, then continue stacking any additional runes
		let cdrCap = 40;
		let totalStats = {};
		let totalDamage = { "physicalDamage": 0, "magicDamage": 0, "trueDamage": 0 };
		let totalDamageModifier: number = 0;
		if (runeModifiers != undefined && selectedRunes != undefined) {
			let stackAllRunes: boolean = runeModifiers.stackAllRunes;
			let soulCount: number = runeModifiers.soulCount;

			// get the current tenacity ratio which comes from merc treads if any without having to pass the item into the function
			let currentTenacityRatio = (1 - champion.stats.tenacity / 100);
			let hasTranscendance: boolean = false;
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
								totalStats["mp"] ? totalStats["mp"] += presenceOfMindTotal : totalStats["mp"] = presenceOfMindTotal;
							} else if (runeApiname == "legendalacrity" || runeApiname == "legendbloodline") {
								let statKey = runeApiname == "legendalacrity" ? "as" : "ls";
								let bonus = this.legendRune(rune, statKey, stackAllRunes);
								totalStats[statKey] ? totalStats[statKey] += bonus : totalStats[statKey] = bonus;
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
							} else if (runeApiname == "suddenimpact") {
								for (let statKey in rune.stats) {
									let statVal = rune.stats[statKey];
									totalStats[statKey] ? totalStats[statKey] += statVal : totalStats[statKey] = statVal;
								}
							} else if (runeApiname == "zombieward" || runeApiname == "ghostporo" || runeApiname == "eyeballcollection") {
								let stackedBonus = stackAllRunes ? rune.stackable[adaptiveType] : 0;
								totalStats[adaptiveType] ? totalStats[adaptiveType] += stackedBonus : totalStats[adaptiveType] = stackedBonus;
							} else if (runeApiname == "ravenoushunter") {
								for (let statKey in rune.stats) {
									let statVal = rune.stats[statKey];
									if (stackAllRunes) {
										statVal += rune.stackable[statKey];
									}
									totalStats[statKey] ? totalStats[statKey] += statVal : totalStats[statKey] = statVal;
								}
							} else if (runeApiname == "manaflowband") {
								if (stackAllRunes) {
									totalStats["mp"] ? totalStats["mp"] += rune.stackable["mp"] : totalStats["mp"] = rune.stackable["mp"];
								}
							} else if (runeApiname == "absolutefocus") {
								let bonusAdaptive = rune.stats[adaptiveType] + (rune.stats[adaptiveType + "_lvl"] * (currentLevel - 1));
								totalStats[adaptiveType] ? totalStats[adaptiveType] += bonusAdaptive : totalStats[adaptiveType] = bonusAdaptive;
							} else if (runeApiname == "gatheringstorm") {
								let gatheringStormTotal = this.gatheringStormRune(adaptiveType, currentTime);
								totalStats[adaptiveType] ? totalStats[adaptiveType] += gatheringStormTotal : totalStats[adaptiveType] = gatheringStormTotal;
							} else if (runeApiname == "transcendence") {
								hasTranscendance = true;
							} else if (runeApiname == "conditioning") {
								if (currentTime >= 12) {
									for (let statKey in rune.stats) {
										let statVal = rune.stats[statKey];
										totalStats[statKey] ? totalStats[statKey] += statVal : totalStats[statKey] = statVal;
									}
								}
							} else if (runeApiname == "overgrowth") {
								if (stackAllRunes) {
									for (let statKey in rune.stackable) {
										let statVal = rune.stackable[statKey];
										totalStats[statKey] ? totalStats[statKey] += statVal : totalStats[statKey] = statVal;
									}
								}
							} else if (runeApiname == "revitalize") {
								totalStats["heal_shield"] = rune.stats.heal_shield;
							} else if (runeApiname == "magicalfootwear") {
								totalStats["ms"] = rune.stats["ms"];
							} else if (runeApiname == "biscuitdelivery") {
								if (stackAllRunes) {
									totalStats["mp"] ? totalStats["mp"] += rune.stackable["mp"] : totalStats["mp"] = rune.stackable["mp"];
								}
							} else if (runeApiname == "cosmicinsight") {
								cdrCap += 5;
								totalStats["cdr"] = rune.stats.cdr; // reason we can add directly is because we need to know the cdr cap before applying transcendance and no other rune provides cdr
							} else {
								// consist of other runes with more complicated formulas
								let expressionString = rune["string_expression"];
								// phaserush has a ranged_expression
								if (expressionString && expressionString != "") {
									try {
										let targetAdditionalMaxHealthPercent: number = (targetDetails.targetMaxHP - maximumHealth) / maximumHealth;
										// the targetHP can be smaller than the users maxhp
										targetAdditionalMaxHealthPercent = targetAdditionalMaxHealthPercent < 0 ? 0 : targetAdditionalMaxHealthPercent && targetAdditionalMaxHealthPercent > 1 ? 1 : targetAdditionalMaxHealthPercent;
										var expressionValue = eval(expressionString);
										if (rune["type"] && rune["type"] == "adaptive") {
											expressionValue *= adaptiveType == "ad" ? 0.6 : 1;
											if (runeApiname == "conqueror" && stackAllRunes) {
												expressionValue *= 12;
											}
											totalDamage[adaptiveDamageType] ? totalDamage[adaptiveDamageType] += expressionValue : totalDamage[adaptiveDamageType] = expressionValue;
										} else if (rune["affects_stat"] && rune["affects_stat"] != "") {
											let affectsStat = rune["affects_stat"];
											if (affectsStat.includes("Damage")) {
												totalDamage[affectsStat] ? totalDamage[affectsStat] += expressionValue : totalDamage[affectsStat] = expressionValue;
											} else {
												if (runeApiname == "phaserush") {
													if (championRangeType == "ranged") { expressionValue = eval(rune["ranged_expression"]); };
												}
												// affects_stats = as specifically (this could be a problem in the future)
												expressionValue *= 100;
												totalStats[affectsStat] ? totalStats[affectsStat] += expressionValue : totalStats[affectsStat] = expressionValue;
											}
										} else {
											if (runeApiname == "cutdown") {
												if (targetAdditionalMaxHealthPercent >= 0.1 && targetAdditionalMaxHealthPercent <= 1) {
													expressionValue = expressionValue < 0 ? 0 : expressionValue;
													totalDamageModifier += expressionValue;
												}
											} else if (runeApiname == "coupdegrace") {
												totalDamageModifier += expressionValue;
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
								totalStats[adaptiveType] ? totalStats[adaptiveType] += runeShard.stats[adaptiveType] : totalStats[adaptiveType] = runeShard.stats[adaptiveType];
							} else {
								for (let runeShardStat in runeShard.stats) {
									let statKey = runeShardStat;
									let statVal = runeShard.stats[runeShardStat];
									if (runeShardStat.includes("_lvl")) {
										statKey = runeShardStat.replace("_lvl", "");
										statVal *= (currentLevel - 1);
									}
									totalStats[statKey] ? totalStats[statKey] += statVal : totalStats[statKey] = statVal;
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
					totalStats[bonus] ? totalStats[bonus] += bonusVal : totalStats[bonus] = bonusVal;
				}
			}
			if (!addedTenacityElixir && selectedElixir.apiname == "elixirofiron") {
				currentTenacityRatio *= (1 - (selectedElixir.tenacity) / 100);
			}
			let totalTenacityRatio: number = (1 - currentTenacityRatio) * 100;
			let tenacity = totalTenacityRatio - champion.stats.tenacity;
			if (tenacity > 0) { totalStats['tenacity'] = tenacity; }
			if (totalStats != {}) {
				console.log(totalStats);
			}
			console.log(totalDamage, totalDamageModifier);
			champion.stats.tenacity = totalTenacityRatio;
		}
		return [totalStats, cdrCap];
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
		let targetAdditionalMaxHealthPercent = currentTime % 10 == 0 ? 1 + 0.1 * (currentTime) : 1 + 1 * Math.floor(currentTime / 10);
		return adaptiveType == "ad" ? 4.8 * targetAdditionalMaxHealthPercent * (targetAdditionalMaxHealthPercent - 1) * 0.5 : 8 * targetAdditionalMaxHealthPercent * (targetAdditionalMaxHealthPercent - 1) * 0.5;
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
