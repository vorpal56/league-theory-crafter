import { Injectable } from '@angular/core';

import { Champion } from '../models/champion';
import { Item } from '../models/item';
import { RuneShard, Rune, Runes } from '../models/rune';
import { TargetDetails } from '../models/target';
import { DamageTypes } from '../models/calculations';

@Injectable({
	providedIn: 'root'
})
export class RunesService {

	constructor() { }
	/**
	 * @param  {any} selectedRunes the selected runes to calculate stats with
	 * @param  {Champion} champion the selected champion to apply the calculations towards
	 * @param  {number} currentLevel the current level for level dependant runes such as transcendance and abs focus.
	 * @param  {any} champion.itemStats the total stats from items to calculate adaptive bonus from transcendence
	 * @param  {string} champion.adaptiveType the adaptive type to switch the calculation based on the item
	 * @param  {Item} selectedElixir the selected elixir for tenacity calulation (if neccessary)
	 * @param  {[boolean, number]} rune.runeModifiers boolean to stack all the rune choices or not (eg. legend runes) and dark harvest soul count
	 * @param  {number} currentTime the current time for time dependant runes such as gatherin storm
	 * @returns any the stats from runes
	 */
	calculateRuneStats(champion: Champion, selectedRunes: Runes, currentTime: number, selectedElixir: Item, targetDetails: TargetDetails): any {
		// for stackable stats if the rune is stackable and the checkbox for stackable is enabled, then continue stacking any additional runes
		let totalStats = {};
		let totalDamage: DamageTypes = new DamageTypes();
		let totalDamageModifier: number = 0;

		let stackAllRunes: boolean = selectedRunes.modifiers.stackAllRunes;
		let soulCount: number = selectedRunes.modifiers.soulCount; // used in eval expression
		let currentLevel: number = champion.currentLevel; // used in eval expression
		// get the current tenacity ratio which comes from merc treads if any without having to pass the item into the function
		let currentTenacityRatio = (1 - champion.stats.tenacity / 100);
		let hasTranscendance: boolean = false;
		let addedTenacityElixir: boolean = false;
		let adaptiveDamageType = champion.adaptiveType == "ad" ? "physicalDamage" : "magicDamage";
		let championRangeType = champion["rangetype"].toLowerCase();

		let AP = champion.stats.ap;
		let maximumHealth = champion.stats.hp;
		let bonusAD = champion.itemStats["ad"] ? champion.itemStats["ad"] : 0;
		let bonusHealth = champion.itemStats["hp"] ? champion.itemStats["hp"] : 0;

		for (let runeTree in selectedRunes) {
			if (runeTree.charAt(0) != "_") {
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
								let stackedBonus = stackAllRunes ? rune.stackable[champion.adaptiveType] : 0;
								totalStats[champion.adaptiveType] ? totalStats[champion.adaptiveType] += stackedBonus : totalStats[champion.adaptiveType] = stackedBonus;
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
								let bonusAdaptive = rune.stats[champion.adaptiveType] + (rune.stats[champion.adaptiveType + "_lvl"] * (champion.currentLevel - 1));
								totalStats[champion.adaptiveType] ? totalStats[champion.adaptiveType] += bonusAdaptive : totalStats[champion.adaptiveType] = bonusAdaptive;
							} else if (runeApiname == "gatheringstorm") {
								let gatheringStormTotal = this.gatheringStormRune(champion.adaptiveType, currentTime);
								totalStats[champion.adaptiveType] ? totalStats[champion.adaptiveType] += gatheringStormTotal : totalStats[champion.adaptiveType] = gatheringStormTotal;
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
								selectedRunes.modifiers.cdrCap += 5;
								totalStats["cdr"] = rune.stats.cdr; // reason we can add directly is because we need to know the cdr cap before applying transcendance and no other rune provides cdr
							} else {
								// consist of other runes with more complicated formulas
								let expressionString = rune["string_expression"];
								// phaserush has a ranged_expression
								if (expressionString && expressionString != "") {
									try {
										let targetAdditionalMaxHealthPercent: number = (targetDetails.maxHP - maximumHealth) / maximumHealth;
										// the targetHP can be smaller than the users maxhp
										targetAdditionalMaxHealthPercent = targetAdditionalMaxHealthPercent < 0 ? 0 : targetAdditionalMaxHealthPercent && targetAdditionalMaxHealthPercent > 1 ? 1 : targetAdditionalMaxHealthPercent;
										var expressionValue = eval(expressionString);
										if (rune["type"] && rune["type"] == "adaptive") {
											expressionValue *= champion.adaptiveType == "ad" ? 0.6 : 1;
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
												if (runeApiname == "lethaltempo" || runeApiname == "hailofblades") {

												}
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
				} else if (runeTree == "runeShards") {
					// do the rune shard calculation
					let selectedRuneShards = selectedRunes[runeTree];
					selectedRuneShards.forEach((runeShard: RuneShard) => {
						if (runeShard) {
							if (runeShard.type && runeShard.type == "adaptive") {
								totalStats[champion.adaptiveType] ? totalStats[champion.adaptiveType] += runeShard.stats[champion.adaptiveType] : totalStats[champion.adaptiveType] = runeShard.stats[champion.adaptiveType];
							} else {
								for (let runeShardStat in runeShard.stats) {
									let statKey = runeShardStat;
									let statVal = runeShard.stats[runeShardStat];
									if (runeShardStat.includes("_lvl")) {
										statKey = runeShardStat.replace("_lvl", "");
										statVal *= (champion.currentLevel - 1);
									}
									totalStats[statKey] ? totalStats[statKey] += statVal : totalStats[statKey] = statVal;
								}
							}
						}
					});
				}
			}
		}
		if (hasTranscendance) {
			let transcendenceTotal = this.transcendenceRune(champion, selectedRunes.modifiers.cdrCap);
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
		if (Object.keys(totalStats).length != 0) {
			console.log(totalStats);
		}
		selectedRunes.runeDamage = totalDamage;
		// console.log(totalDamage, totalDamageModifier);
		champion.stats.tenacity = totalTenacityRatio;
		return totalStats;
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
	transcendenceRune(champion: Champion, cdrCap: number): any {
		let additionalTranscendenceCdr: number = champion.currentLevel >= 10 ? 10 : 0;
		let totalAdditionalCdr: number = additionalTranscendenceCdr;
		totalAdditionalCdr += champion.itemStats["cdr"] && champion.itemStats["cdr"] > cdrCap ? champion.itemStats["cdr"] - cdrCap : 0;
		let results = { "cdr": additionalTranscendenceCdr };
		results[champion.adaptiveType] = champion.adaptiveType == "ad" ? 1.2 * totalAdditionalCdr : 2 * totalAdditionalCdr;
		return results;
	}
	addRuneStats(champion: Champion) {
		for (let key in champion.runeStats) {
			let keyVal = champion.runeStats[key];
			if (keyVal != 0 && key != "tenacity" && key != "as") {
				champion.stats[key] += keyVal;
			}
		}
		// multipliers come from conditioning rune post 12 minutes
		let armorMultiplier = champion.runeStats["arm_mult"];
		if ("arm_mult" in champion.runeStats && armorMultiplier) {
			champion.stats["arm"] += champion.stats["arm"] * (armorMultiplier / 100);
		}
		let mrMultiplier = champion.runeStats["mr_mult"];
		if ("mr_mult" in champion.runeStats && mrMultiplier) {
			champion.stats["mr"] += champion.stats["mr"] * (mrMultiplier / 100);
		}
		let hpMultiplier = champion.runeStats["hp_mult"];
		if ("hp_mult" in champion.runeStats && hpMultiplier) {
			champion.stats["hp"] += champion.stats["hp"] * (hpMultiplier / 100);
		}
		return;
	}
}
