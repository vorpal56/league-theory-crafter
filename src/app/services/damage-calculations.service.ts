import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { Rune, RuneShard, RuneModifiers } from '../models/rune';
import { TargetDetails } from '../models/target';
import { SKILL_KEYS } from '../../../server/data/data';
import { StatsService } from './stats.service';
import { CalculationResults } from '../models/calculations';

@Injectable({
	providedIn: 'root'
})
export class DamageCalculationsService {

	constructor(private statsService: StatsService) { }

	physicalKey: string = "physicalDamage"; // split damage into physical, magical, and true to determine how to apply resistance stats
	magicalKey: string = "magicDamage";
	trueKey: string = "trueDamage";

	damageReduction(champion: Champion, statName: string): number {
		let championDef = champion.stats[statName];
		if (championDef >= 0) {
			return 100 / (100 + championDef);
		} else {
			return 2 - (100 / (100 - championDef));
		}
	}
	effectiveHealth(champion: Champion, statName: string): number {
		return (1 + champion.stats[statName] / 100) * champion.stats.hp;
	}
	magicPenetration(champion: Champion) {
		// Magic resistance reduction, flat. (Wit's End, Baron Debuff while fighting it) -> wits end passive was removed and baron is interesting... maybe we can add that as a target
		// Magic resistance reduction, percentage. (Insert Champion Abilities here) eg. trundle subjugate
		// Magic penetration, percentage. (Void Staff)
		// Magic penetration, flat. (Sorcerer's Shoes, Morellonomicon, oblivion orb)
	}
	armorPenetration(champion: Champion, targetLevel: number, targetArmour: number) {

		// 1. Armor reduction, flat (baron)
		// 2. Armor reduction, percentage (subjugate)
		// 3. Armor penetration, percentage
		// 4. Lethality

		let percentAPen = targetArmour * champion.stats["apen%"] / 100;
		// lethality scales depending on the targets level. the higher the targets level, the more vaulable lethality is
		let currentFlatArmorPenetration = champion.stats.leth * (0.6 + 0.4 * targetLevel / 18);
		let total = currentFlatArmorPenetration + percentAPen;
		// total = total > targetArmour ? targetArmour : total;
		return total;
	}
	/**
	 * Simple champions are champions that have simple calculations, pretty straight forward in the damage calculation and does not have forms
	 * @param  {Champion} champion
	 * @param  {TargetDetails} targetDetails
	 * @returns any
	 */
	totalChampionDamageCalculation(champion: Champion, targetDetails: TargetDetails, currentLevel: number): any {
		let bonusAD: number = champion.itemStats["ad"] ? champion.itemStats["ad"] : 0 + champion.runeStats["ad"] ? champion.runeStats["ad"] : 0;
		let bonusAP: number = champion.itemStats["ap"] ? champion.itemStats["ap"] : 0 + champion.runeStats["ap"] ? champion.runeStats["ap"] : 0;
		let bonusHP: number = champion.itemStats["hp"] ? champion.itemStats["hp"] : 0 + champion.runeStats["hp"] ? champion.runeStats["hp"] : 0;
		let bonusarmor: number = champion.itemStats["arm"] ? champion.itemStats["arm"] : 0 + champion.runeStats["arm"] ? champion.runeStats["arm"] : 0;
		let bonusmagicresistance: number = champion.itemStats["mr"] ? champion.itemStats["mr"] : 0 + champion.runeStats["mr"] ? champion.runeStats["mr"] : 0;

		let AD: number = champion.stats.ad;
		let AP: number = champion.stats.ap;
		let HP: number = champion.stats.hp;
		let armor: number = champion.stats.arm;
		let magicresistance: number = champion.stats.mr;

		let currenthealth: number = targetDetails.targetCurrentHP;
		let maximumhealth: number = targetDetails.targetMaxHP;
		let missinghealth: number = (maximumhealth - currenthealth);
		let targetPercentMissingHealth = missinghealth / maximumhealth;

		let itemSteroids: boolean = targetDetails.itemSteroids;
		let abilitySteroids: boolean = targetDetails.abilitySteroids;
		let useForm: boolean = targetDetails.useForm;

		let damageResults: CalculationResults = new CalculationResults();
		let damageReductionResults: CalculationResults = new CalculationResults();;
		let rotationDuration: number = 3; // the rotation duration in seconds (if there is an attribute where total damage is calculated, we will use that one instead)
		// example is alistar E, trample, it ticks 1 time each 0.5s for 5s

		let totalAdditionalAD: number = 0; // bonuses that apply on additional stats from items, runes, and epic monster enhancements
		let totalAdditionalAP: number = 0;
		let totalAdditionalHP: number = 0;
		let bonusPercentAbilityDamage: number = 0;

		let apiname: string = champion.apiname.toLowerCase();
		let nidaleeCalculation = (abilityType: string, attributeObj: object, expressionIndex: number) => {
			// we create an anonymous function because scope would be difficult to maintain -> see nidaleeCalculationMethod
			let skillKey = "skill_" + abilityType;
			let loweredAttribute = attributeObj["attribute"].toLowerCase();
			let expressionString = attributeObj["string_expression"][expressionIndex];
			if (abilityType == "q") {
				if (abilitySteroids) {
					if (loweredAttribute == "maximum magic damage" || loweredAttribute.includes("prowl")) {
						damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
					}
				} else {
					if (loweredAttribute == "maximum magic damage" || loweredAttribute == "minimum magic damage") {
						let expressionValue = eval(expressionString) / 2;
						damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionValue : damageResults[skillKey][this.magicalKey] = expressionValue;
					}
				}
				if (loweredAttribute == "bonus damage") {
					bonusPercentAbilityDamage += this.evalAttributePercent(expressionString, false) * targetPercentMissingHealth;
				}
			} else if (abilityType == "w" || abilityType == "e") {
				if (loweredAttribute == "total magic damage" || loweredAttribute == "magic damage") {
					damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
				}
				else if (loweredAttribute == "bonus attack speed") {
					let expressionValue = this.evalAttributePercent(expressionString, false);
					champion.otherSourcesStats["as"] = expressionValue;
				}
			}
		};
		// I need to figure out how to handle the other sources. the current problem is that when we're increasing the level,
		// to 1 and then decrementing ability level, the otherSourcesStat stays to the stat at level 1
		champion.otherSourcesStats["as"] = 0;
		SKILL_KEYS.forEach((skillKey: string, i: number) => {
			let abilityType: string = skillKey.replace("skill_", "");
			let abilityRank: number = champion[skillKey]["rank"];
			let expressionIndex: number = Number(abilityRank) - 1;
			if (expressionIndex >= 0) {
				if (abilityType != "r") {
					if (apiname == "karma") {

					} else if (apiname == "nidalee") {
						let abilityBreakdown = champion[skillKey]["ability_breakdown"];
						if (useForm) {
							let ultRank = Number(champion["skill_r"]["rank"]) - 1;
							abilityBreakdown.forEach((ability: object, j: number) => {
								let mainKey = j == 0 ? "main" : "form";
								ability[mainKey].forEach((attributeObj: object) => {
									expressionIndex = j == 0 ? expressionIndex : ultRank;
									// this.nidaleeCalculationMethod(champion, targetDetails, abilityType, attributeObj, expressionIndex, damageResults, bonusPercentAbilityDamage);
									nidaleeCalculation(abilityType, attributeObj, expressionIndex);
								});
							});
						} else {
							abilityBreakdown[0]["main"].forEach((attributeObj: object) => {
								// this.nidaleeCalculationMethod(champion, targetDetails, abilityType, attributeObj, expressionIndex, damageResults, bonusPercentAbilityDamage);
								nidaleeCalculation(abilityType, attributeObj, expressionIndex);
							});
						}
						return;
					}
				}
				// try to get the ability breakdown -> this will catch if there is not ability breakdown ->
				// notably aphelios
				try {
					let abilityBreakdown: object[] = champion[skillKey]["ability_breakdown"][0]["main"];
					abilityBreakdown.forEach((attributeObj: object, j: number) => {
						let loweredAttribute: string = attributeObj["attribute"].toLowerCase();
						let expressionString: string = attributeObj["string_expression"][expressionIndex];
						// can we work with abilities that appear multiple times? for example physical damage and magic damage appear many times?
						// the following keys appear the most times as of patch 10.16
						if (apiname == "aatrox") {
							if (abilitySteroids && abilityType == "q" && loweredAttribute.includes("sweetspot")) {
								damageResults[skillKey][this.physicalKey] ? damageResults[skillKey][this.physicalKey] += "+" + expressionString : damageResults[skillKey][this.physicalKey] = expressionString;
							} else if (!abilitySteroids && abilityType == "q" && !loweredAttribute.includes("sweetspot")) {
								damageResults[skillKey][this.physicalKey] ? damageResults[skillKey][this.physicalKey] += "+" + expressionString : damageResults[skillKey][this.physicalKey] = expressionString;
							}
							if (abilityType == "w" && loweredAttribute.includes("total")) {
								damageResults[skillKey][this.physicalKey] ? damageResults[skillKey][this.physicalKey] += "+" + expressionString : damageResults[skillKey][this.physicalKey] = expressionString;
							} else if (abilityType == "r" && loweredAttribute.includes("ad")) {
								totalAdditionalAD += eval(expressionString);
							}
						} else if (apiname == "ahri") {
							if ((abilityType == "q" && loweredAttribute == "total mixed damage") ||
								(abilityType == "w" && loweredAttribute == "total single target damage") ||
								(abilityType == "r" && loweredAttribute == "maximum single target damage")) {
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
							} else if (abilityType == "e" && loweredAttribute == "magic damage") {
								if (abilitySteroids) {
									bonusPercentAbilityDamage += 0.2;
								}
								damageResults[skillKey][this.magicalKey] += "+" + expressionString;
							}
						} else if (apiname == "akali") {
							if ((abilityType == "q" && loweredAttribute == "magic damage") ||
								(abilityType == "e" && loweredAttribute == "total damage") ||
								(abilityType == "r" && loweredAttribute == "physical damage")) {
								damageResults[skillKey][this.physicalKey] = expressionString;
							} else if (abilityType == "r" && loweredAttribute == "minimum magic damage") {
								damageResults[skillKey][this.magicalKey] = "m*(" + expressionString + ")";
							}
							if (abilityType == "r" && j == abilityBreakdown.length - 1) {
								let m = targetPercentMissingHealth * 0.0286 * 100; // 0.0286 is 2.86% per 1% missing health on the fandom
								m = m > 2 ? 2 : m;
								m += 1;
								damageResults[skillKey][this.magicalKey] = eval(damageResults[skillKey][this.magicalKey]);
							}
						} else if (apiname == "alistar") {
							if (abilityType != "r" && (loweredAttribute == "magic damage" || loweredAttribute == "total magic damage")) {
								// trample does total magic damage over 5 seconds
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
							}
						} else if (apiname == "amumu") {
							// how do I include amumus passive?
							if ((abilityType == "q" || abilityType == "e" || abilityType == "r") && loweredAttribute == "magic damage") {
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
							} else if (abilityType == "e" && loweredAttribute == "physical damage reduction") {
								damageReductionResults[skillKey][this.physicalKey] ? damageReductionResults[skillKey][this.physicalKey] += "+" + expressionString : damageReductionResults[skillKey][this.physicalKey] = expressionString;
							} else if (abilityType == "w" && loweredAttribute.includes("magic damage")) {
								// this is based off the parsed data. the example is the following"5+0.005*(+0.5*per100AP)maximumhealth"
								let splitExpressionString = expressionString.split("+");
								let perAPMaxHealthFormula = 0.5 * Math.floor(AP / 100) + eval(splitExpressionString[1].replace("*(", "")) * maximumhealth;
								let expressionValue = (eval(splitExpressionString[0]) + perAPMaxHealthFormula) * rotationDuration * 2;
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionValue : damageResults[skillKey][this.magicalKey] = expressionValue;
							}
						} else if (apiname == "anivia") {
							if ((abilityType == "q" && loweredAttribute == "total damage") ||
								(abilitySteroids && abilityType == "e" && loweredAttribute.includes("enhanced")) ||
								(!abilitySteroids && abilityType == "e" && !loweredAttribute.includes("enhanced"))) {
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
							} else if (abilityType == "r") {
								let maxSizeSeconds: number = 1.5; // the time it takes to grow to max size which will then do empowered damage
								let expressionValue: number = eval(expressionString);
								if (!loweredAttribute.includes("empowered")) {
									expressionValue *= maxSizeSeconds;
								} else {
									expressionValue *= (rotationDuration - maxSizeSeconds);
								}
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionValue : damageResults[skillKey][this.magicalKey] = expressionValue;
							}
						} else if (apiname == "annie") {
							if (loweredAttribute.includes("magic damage")) {
								damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
							} else if (loweredAttribute == "damage reduction") {
								let expressionValue: number = this.evalAttributePercent(expressionString);
								damageReductionResults[skillKey][this.physicalKey] ? damageReductionResults[skillKey][this.physicalKey] += "+" + expressionValue : damageReductionResults[skillKey][this.physicalKey] = expressionValue;
								damageReductionResults[skillKey][this.magicalKey] ? damageReductionResults[skillKey][this.magicalKey] += "+" + expressionValue : damageReductionResults[skillKey][this.magicalKey] = expressionValue;
							}
						}
					});
				} catch (error) {
					if (apiname == "aphelios") {

					} else {

					}
				}
			}
		});
		// these values are read in the eval expression
		AD += totalAdditionalAD;
		AP += totalAdditionalAP;
		HP += totalAdditionalHP;
		for (let skillKey in damageResults) {
			for (let keyType in damageResults[skillKey]) {
				let expressionString = damageResults[skillKey][keyType];
				if (expressionString != "") {
					try {
						if (typeof (expressionString) == "string") {
							if (expressionString.includes("undefined")) { expressionString = expressionString.replace("undefined", ""); }
							if (expressionString.includes("total")) { expressionString = expressionString.replace("total", ""); }
							if (expressionString.includes("oftarget's")) { expressionString = expressionString.replace("oftarget's", ""); }

						}
						let expressionValue = eval(expressionString);
						let totalDamage = expressionValue + (expressionValue * bonusPercentAbilityDamage);
						damageResults[skillKey][keyType] = Math.floor(totalDamage);
					} catch (error) {
						console.error("Error evaluating damage result", error);
					}
				} else {
					damageResults[skillKey][keyType] = 0;
				}
			}
		}
		this.statsService.adjustAttackSpeed(champion, currentLevel);
		// console.log(targetDetails);
		console.log(damageResults, bonusPercentAbilityDamage);
		return damageResults;
	}
	nidaleeCalculationMethod(champion: Champion, targetDetails: TargetDetails,
		abilityType: string, attributeObj: object, expressionIndex: number,
		damageResults: object, bonusPercentAbilityDamage: number) {
		let bonusAD: number = champion.itemStats["ad"] ? champion.itemStats["ad"] : 0 + champion.runeStats["ad"] ? champion.runeStats["ad"] : 0;
		let bonusAP: number = champion.itemStats["ap"] ? champion.itemStats["ap"] : 0 + champion.runeStats["ap"] ? champion.runeStats["ap"] : 0;
		let bonusHP: number = champion.itemStats["hp"] ? champion.itemStats["hp"] : 0 + champion.runeStats["hp"] ? champion.runeStats["hp"] : 0;

		let AD: number = champion.stats.ad;
		let AP: number = champion.stats.ap;
		let HP: number = champion.stats.hp;
		let armor: number = champion.stats.arm;
		let magicresistance: number = champion.stats.mr;

		let skillKey = "skill_" + abilityType;
		let loweredAttribute = attributeObj["attribute"].toLowerCase();
		let expressionString = attributeObj["string_expression"][expressionIndex];
		let abilitySteroids = targetDetails.abilitySteroids;
		let currenthealth: number = targetDetails.targetCurrentHP;
		let maximumhealth: number = targetDetails.targetMaxHP;
		let missinghealth: number = (maximumhealth - currenthealth);
		let targetPercentMissingHealth = missinghealth / maximumhealth;

		let totalAdditionalAD: number = 0; // bonuses that apply on additional stats from items, runes, and epic monster enhancements
		let totalAdditionalAP: number = 0;
		let totalAdditionalHP: number = 0;

		if (abilityType == "q") {
			if (abilitySteroids) {
				if (loweredAttribute == "maximum magic damage" || loweredAttribute.includes("prowl")) {
					damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionString : damageResults[skillKey][this.magicalKey] = expressionString;
				}
			} else {
				if (loweredAttribute == "maximum magic damage" || loweredAttribute == "minimum magic damage") {
					let expressionValue = eval(expressionString) / 2;
					damageResults[skillKey][this.magicalKey] ? damageResults[skillKey][this.magicalKey] += "+" + expressionValue : damageResults[skillKey][this.magicalKey] = expressionValue;
				}
			}
			if (loweredAttribute == "bonus damage") {
				bonusPercentAbilityDamage += this.evalAttributePercent(expressionString, false) * targetPercentMissingHealth;
			}
		}
	}
	totalNumberOfAttacks(champion: Champion, rotationDuration: number) {
		return Math.floor(champion.stats.as * rotationDuration);
	}
	applyTargetResistance(champion: Champion, targetDetails: TargetDetails) {

	}
	evalAttributePercent(expressionString: string, asRatio: boolean = true) {
		let expressionValue = eval(expressionString.replace("%", ""));
		if (asRatio) { return expressionValue / 100; }
		return expressionValue;
	}
}