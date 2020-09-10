import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
import { Rune, RuneShard, RuneModifiers } from '../models/rune';
import { SKILL_KEYS } from '../../../server/data/data';
import { ChampionService } from './champion.service';
@Injectable({
	providedIn: 'root'
})
export class DamageCalculationsService {

	constructor() { }

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
	 * @param  {any} runes
	 * @param  {any[]} targetResistances
	 * @param  {any[]} targetHPs
	 * @param  {boolean} useSteroids
	 * @returns any
	 */
	totalChampionDamageCalculation(champion: Champion, runes: any, targetResistances: any[], targetHPs: number[], useSteroids: boolean, useForm: boolean): any {
		let bonusAD = champion.item_stats["ad"] ? champion.item_stats["ad"] : 0 + champion.rune_stats["ad"] ? champion.rune_stats["ad"] : 0;
		let bonusAP = champion.item_stats["ap"] ? champion.item_stats["ap"] : 0 + champion.rune_stats["ap"] ? champion.rune_stats["ap"] : 0;
		let bonusHP = champion.item_stats["hp"] ? champion.item_stats["hp"] : 0 + champion.rune_stats["hp"] ? champion.rune_stats["hp"] : 0;
		let bonusarmor = champion.item_stats["arm"] ? champion.item_stats["arm"] : 0 + champion.rune_stats["arm"] ? champion.rune_stats["arm"] : 0;
		let bonusmagicresistance = champion.item_stats["mr"] ? champion.item_stats["mr"] : 0 + champion.rune_stats["mr"] ? champion.rune_stats["mr"] : 0;

		let AD = champion.stats.ad;
		let AP = champion.stats.ap;
		let HP = champion.stats.hp;
		let armor = champion.stats.arm;
		let magicresistance = champion.stats.mr;

		let currenthealth = targetHPs[0];
		let maximumhealth = targetHPs[1];
		let missinghealth = (maximumhealth - currenthealth);
		let targetPercentMissingHealth = missinghealth / maximumhealth;

		let phyiscalKey = "physicalDamage"; // split damage into physical, magical, and true to determine how to apply resistance stats
		let magicalKey = "magicDamage";
		let trueKey = "trueDamage";

		// let damageKeys = [phyiscalKey, magicalKey, trueKey];

		let damageResults = {
			"skill_i": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_q": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_w": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_e": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_r": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
		};
		let damageReductionResults = {
			"skill_i": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_q": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_w": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_e": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
			"skill_r": { "physicalDamage": "", "magicDamage": "", "trueDamage": "" },
		};
		let rotationDuration = 3; // the rotation duration in seconds (if there is an attribute where total damage is calculated, we will use that one instead)
		// example is alistar E, trample, it ticks 1 time each 0.5s for 5s

		let totalAdditionalAD = 0; // bonuses that apply on additional stats from items, runes, and epic monster enhancements
		let totalAdditionalAP = 0;
		let totalAdditionalHP = 0;
		let bonusPercentAbilityDamage = 0;

		let apiname = champion.apiname.toLowerCase();

		SKILL_KEYS.forEach((skillKey: string, i: number) => {
			let abilityType = skillKey.replace("skill_", "");
			let abilityRank = champion[skillKey]["rank"];
			let expressionIndex = Number(abilityRank) - 1;
			if (expressionIndex >= 0) {
				let abilityBreakdown = champion[skillKey]["ability_breakdown"][0]["main"];
				abilityBreakdown.forEach((attributeObj: object, k: number) => {
					let loweredAttribute = attributeObj["attribute"].toLowerCase();
					let expressionString = attributeObj["string_expression"][expressionIndex];
					// can we work with abilities that appear multiple times? for example physical damage and magic damage appear many times?
					// the following keys appear the most times as of patch 10.16
					if (apiname == "aatrox") {
						if (useSteroids && abilityType == "q" && loweredAttribute.includes("sweetspot")) {
							damageResults[skillKey][phyiscalKey] ? damageResults[skillKey][phyiscalKey] += "+" + expressionString : damageResults[skillKey][phyiscalKey] = expressionString;
						} else if (!useSteroids && abilityType == "q" && !loweredAttribute.includes("sweetspot")) {
							damageResults[skillKey][phyiscalKey] ? damageResults[skillKey][phyiscalKey] += "+" + expressionString : damageResults[skillKey][phyiscalKey] = expressionString;
						}
						if (abilityType == "w" && loweredAttribute.includes("total")) {
							damageResults[skillKey][phyiscalKey] ? damageResults[skillKey][phyiscalKey] += "+" + expressionString : damageResults[skillKey][phyiscalKey] = expressionString;
						} else if (abilityType == "r" && loweredAttribute.includes("ad")) {
							totalAdditionalAD += eval(expressionString);
						}
					} else if (apiname == "ahri") {
						if ((abilityType == "q" && loweredAttribute == "total mixed damage") ||
							(abilityType == "w" && loweredAttribute == "total single target damage") ||
							(abilityType == "r" && loweredAttribute == "maximum single target damage")) {
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionString : damageResults[skillKey][magicalKey] = expressionString;
						} else if (abilityType == "e" && loweredAttribute == "magic damage") {
							if (useSteroids) {
								bonusPercentAbilityDamage += 0.2;
							}
							damageResults[skillKey][magicalKey] += "+" + expressionString;
						}
					} else if (apiname == "akali") {
						if ((abilityType == "q" && loweredAttribute == "magic damage") ||
							(abilityType == "e" && loweredAttribute == "total damage") ||
							(abilityType == "r" && loweredAttribute == "physical damage")) {
							damageResults[skillKey][phyiscalKey] = expressionString;
						} else if (abilityType == "r" && loweredAttribute == "minimum magic damage") {
							damageResults[skillKey][magicalKey] = "m*(" + expressionString + ")";
						}
						if (abilityType == "r" && k == abilityBreakdown.length - 1) {
							let m = targetPercentMissingHealth * 0.0286 * 100; // 0.0286 is 2.86% per 1% missing health on the fandom
							m = m > 2 ? 2 : m;
							m += 1;
							damageResults[skillKey][magicalKey] = eval(damageResults[skillKey][magicalKey]);
						}
					} else if (apiname == "alistar") {
						if (abilityType != "r" && (loweredAttribute == "magic damage" || loweredAttribute == "total magic damage")) {
							// trample does total magic damage over 5 seconds
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionString : damageResults[skillKey][magicalKey] = expressionString;
						}
					} else if (apiname == "amumu") {
						// how do I include amumus passive?
						if ((abilityType == "q" || abilityType == "e" || abilityType == "r") && loweredAttribute == "magic damage") {
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionString : damageResults[skillKey][magicalKey] = expressionString;
						} else if (abilityType == "e" && loweredAttribute == "physical damage reduction") {
							damageReductionResults[skillKey][phyiscalKey] ? damageReductionResults[skillKey][phyiscalKey] += "+" + expressionString : damageReductionResults[skillKey][phyiscalKey] = expressionString;
						} else if (abilityType == "w" && loweredAttribute.includes("magic damage")) {
							// this is based off the parsed data. the example is the following"5+0.005*(+0.5*per100AP)maximumhealth"
							let splitExpressionString = expressionString.split("+");
							let perAPMaxHealthFormula = 0.5 * Math.floor(AP / 100) + eval(splitExpressionString[1].replace("*(", "")) * maximumhealth;
							let expressionValue = (eval(splitExpressionString[0]) + perAPMaxHealthFormula) * rotationDuration * 2;
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionValue : damageResults[skillKey][magicalKey] = expressionValue;
						}
					} else if (apiname == "anivia") {
						if ((abilityType == "q" && loweredAttribute == "total damage") ||
							(useSteroids && abilityType == "e" && loweredAttribute.includes("enhanced")) ||
							(!useSteroids && abilityType == "e" && !loweredAttribute.includes("enhanced"))) {
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionString : damageResults[skillKey][magicalKey] = expressionString;
						} else if (abilityType == "r") {
							let maxSizeSeconds = 1.5; // the time it takes to grow to max size which will then do empowered damage
							let expressionValue = eval(expressionString);
							if (!loweredAttribute.includes("empowered")) {
								expressionValue *= maxSizeSeconds;
							} else {
								expressionValue *= (rotationDuration - maxSizeSeconds);
							}
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionValue : damageResults[skillKey][magicalKey] = expressionValue;
						}
					} else if (apiname == "annie") {
						if (loweredAttribute.includes("magic damage")) {
							damageResults[skillKey][magicalKey] ? damageResults[skillKey][magicalKey] += "+" + expressionString : damageResults[skillKey][magicalKey] = expressionString;
						} else if (loweredAttribute == "damage reduction") {
							let expressionValue = eval(expressionString.replace("%", "")) / 100;
							damageReductionResults[skillKey][phyiscalKey] ? damageReductionResults[skillKey][phyiscalKey] += "+" + expressionValue : damageReductionResults[skillKey][phyiscalKey] = expressionValue;
							damageReductionResults[skillKey][magicalKey] ? damageReductionResults[skillKey][magicalKey] += "+" + expressionValue : damageReductionResults[skillKey][magicalKey] = expressionValue;
						}
					}
				});
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
		return damageResults;
	}
	abilityInference(champion: Champion, useForm: boolean) {
		let totalExpressions = {};
		let apiname = champion.apiname.toLowerCase();
		let isTransformerLike = this.championIsTransformerLike(champion);
		SKILL_KEYS.forEach((skillKey: string, i: number) => {
			let abilityRank = champion[skillKey]["rank"];
			let abilityBreakdown = champion[skillKey]["ability_breakdown"];
			let useAbility = useForm ? abilityBreakdown[1] : abilityBreakdown[0];
			let mainKey = useForm ? "form" : "main";
			if (isTransformerLike) {

			}
			if (useAbility && useAbility[mainKey]) {
				useAbility[mainKey].forEach((attributeObj: object) => {
					let attributeName = attributeObj["attribute"];
					try {
						if (apiname == "nidalee" && mainKey == "form") {
							let ultRank = Number(champion["skill_r"]["rank"]) - 1;
							totalExpressions[skillKey] ? totalExpressions[skillKey] += ">" + attributeObj["string_expression"][ultRank] : totalExpressions[skillKey] = attributeObj["string_expression"][ultRank];
						} else {
							totalExpressions[skillKey] ? totalExpressions[skillKey] += attributeObj["string_expression"][abilityRank] : totalExpressions[skillKey] = attributeObj["string_expression"][abilityRank];
						}
					} catch (error) {
						console.error(error);
					}
				});

			}
		});
		console.log(totalExpressions);
	}
	attributeInference(attributeName: string) {
		let loweredAttribute = attributeName.toLowerCase();
		if (loweredAttribute.includes("minimum")) {

		}
	}
	championIsTransformerLike(champion: Champion) {
		let apiname = champion.apiname.toLowerCase();
		if (apiname == "jayce" || apiname == "elise" || apiname == "karma" || apiname == "nidalee") {
			return true;
		}
	}
}