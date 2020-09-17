import { Injectable } from '@angular/core';

import { Champion } from '../models/champion';
import { Rune, RuneShard, RuneModifiers, Runes } from '../models/rune';
import { TargetDetails } from '../models/target';
import { CalculationResults, DamageTypes } from '../models/calculations';

import { ROTATION_DURATION, SKILL_KEYS } from '../../../server/data/data';
import { StatsService } from './stats.service';
import { ItemsService } from './items.service';

@Injectable({
	providedIn: 'root'
})
export class DamageCalculationsService {

	constructor(private statsService: StatsService, private itemsService: ItemsService) { }

	PHYSICAL_DAMAGE = DamageTypes.PHYSICAL_DAMAGE;
	MAGIC_DAMAGE = DamageTypes.MAGIC_DAMAGE;
	TRUE_DAMAGE = DamageTypes.TRUE_DAMAGE;

	damageReduction(resistVal: number): number {
		if (resistVal >= 0) {
			return 100 / (100 + resistVal);
		} else {
			return 2 - (100 / (100 - resistVal));
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
	 * The entire interpretation set of data for champions. It is important to know that values within the body of the ability are not grabbed by meraki, meaning that they must be calculated manually.
	 * If these formulas change, then so does the calculation here. We can do this on a periodic basis for every patch. The formulas need to be concise but also easily understandable as for easier maintenance. The main examples are within applyAdditionalPassiveDamage function.
	 * When we run our scheduled python module, we interpolate the data and determine where changes are. When these changes are made automatically, we're notified and if needed, we can readjust the code and revert our current data (as to keep it consistent).
	 * @param  {Champion} champion
	 * @param  {TargetDetails} targetDetails
	 * @returns any
	 */
	totalChampionDamageCalculation(champion: Champion, currentTime: number, targetDetails: TargetDetails, selectedRunes: Runes): CalculationResults {
		let bonusAD: number = champion.itemStats["ad"] ? champion.itemStats["ad"] : 0;
		bonusAD += champion.runeStats["ad"] ? champion.runeStats["ad"] : 0;
		let bonusAP: number = champion.itemStats["ap"] ? champion.itemStats["ap"] : 0;
		bonusAP += champion.runeStats["ap"] ? champion.runeStats["ap"] : 0;
		let bonusHP: number = champion.itemStats["hp"] ? champion.itemStats["hp"] : 0;
		bonusHP += champion.runeStats["hp"] ? champion.runeStats["hp"] : 0;
		let bonusarmor: number = champion.itemStats["arm"] ? champion.itemStats["arm"] : 0;
		bonusarmor += champion.runeStats["arm"] ? champion.runeStats["arm"] : 0;
		let bonusmagicresistance: number = champion.itemStats["mr"] ? champion.itemStats["mr"] : 0;
		bonusmagicresistance += champion.runeStats["mr"] ? champion.runeStats["mr"] : 0;

		let AD: number = champion.stats.ad;
		let AP: number = champion.stats.ap;
		let HP: number = champion.stats.hp;
		let armor: number = champion.stats.arm;
		let magicresistance: number = champion.stats.mr;

		let currenthealth: number = targetDetails.currentHP;
		let maximumhealth: number = targetDetails.maxHP;
		let missinghealth: number = (maximumhealth - currenthealth);
		let targetPercentMissingHealth = missinghealth / maximumhealth;

		let applyItemSteroids: boolean = targetDetails.applyItemSteroids;
		let applyAbilitySteroids: boolean = targetDetails.applyAbilitySteroids;
		let formUsage: boolean = targetDetails.applyFormUsage;

		let damageBeforeResistances: CalculationResults = new CalculationResults();
		let damageReductions: CalculationResults = new CalculationResults(CalculationResults.DEFENSIVE_TYPE);// the rotation duration in seconds (if there is an attribute where total damage is calculated, we will use that one instead)
		// example is alistar E, trample, it ticks 1 time each 0.5s for 5s

		let totalAdditionalAD: number = 0; // bonuses that apply on additional stats from items, runes, and epic monster enhancements
		let totalAdditionalAP: number = 0;
		let totalAdditionalHP: number = 0;
		let bonusPercentAbilityDamage: DamageTypes = new DamageTypes();
		let bonusPercentAutoDamage: DamageTypes = new DamageTypes();

		let apiname: string = champion.apiname.toLowerCase();
		let nidaleeCalculation = (abilityType: string, attributeObj: object, expressionIndex: number) => {
			// we create an anonymous function because scope would be difficult to maintain -> see nidaleeCalculationMethod
			let skillKey = "skill_" + abilityType;
			let loweredAttribute = attributeObj["attribute"].toLowerCase();
			let expressionString = attributeObj["string_expression"][expressionIndex];
			if (abilityType == "q") {
				if (applyAbilitySteroids) {
					if (loweredAttribute == "maximum magic damage" || loweredAttribute.includes("prowl")) {
						damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
					}
				} else {
					if (loweredAttribute == "maximum magic damage" || loweredAttribute == "minimum magic damage") {
						let expressionValue = eval(expressionString) / 2;
						damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionValue;
					}
				}
				if (loweredAttribute == "bonus damage") {
					bonusPercentAbilityDamage[this.MAGIC_DAMAGE] += this.evalAttributePercent(expressionString, false) * targetPercentMissingHealth;
				}
			} else if (abilityType == "w" || abilityType == "e") {
				if (loweredAttribute == "total magic damage" || loweredAttribute == "magic damage") {
					damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
				}
				else if (loweredAttribute == "bonus attack speed") {
					let expressionValue = this.evalAttributePercent(expressionString, false);
					champion.otherSourcesStats["as"] = expressionValue;
				}
			}
		};
		// I need to figure out how to handle the other sources. the current problem is that when we're increasing the level,
		// to 1 and then decrementing ability level, the otherSourcesStat stays to the stat at level 1
		champion.otherSourcesStats = {};
		SKILL_KEYS.forEach((skillKey: string, i: number) => {
			let abilityType: string = skillKey.replace("skill_", "");
			let abilityRank: number = champion[skillKey]["rank"];
			let expressionIndex: number = Number(abilityRank) - 1;
			if (i > 0 && expressionIndex >= 0) {
				if (abilityType != "r") {
					if (apiname == "karma") {

					} else if (apiname == "nidalee") {
						let abilityBreakdown = champion[skillKey]["ability_breakdown"];
						if (formUsage) {
							let ultRank = Number(champion["skill_r"]["rank"]) - 1;
							abilityBreakdown.forEach((ability: object, j: number) => {
								let mainKey = j == 0 ? "main" : "form";
								ability[mainKey].forEach((attributeObj: object) => {
									expressionIndex = j == 0 ? expressionIndex : ultRank;
									nidaleeCalculation(abilityType, attributeObj, expressionIndex);
								});
							});
						} else {
							abilityBreakdown[0]["main"].forEach((attributeObj: object) => {
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
							if (applyAbilitySteroids && abilityType == "q" && loweredAttribute.includes("sweetspot")) {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							} else if (!applyAbilitySteroids && abilityType == "q" && !loweredAttribute.includes("sweetspot")) {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							}
							if (abilityType == "w" && loweredAttribute.includes("total")) {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "r" && loweredAttribute.includes("ad")) {
								totalAdditionalAD += eval(expressionString);
							}
						} else if (apiname == "ahri") {
							if ((abilityType == "q" && loweredAttribute == "total mixed damage") ||
								(abilityType == "w" && loweredAttribute == "total single target damage") ||
								(abilityType == "r" && loweredAttribute == "maximum single target damage")) {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "e" && loweredAttribute == "magic damage") {
								if (applyAbilitySteroids) {
									bonusPercentAbilityDamage[this.MAGIC_DAMAGE] += 0.2;
								}
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							}
						} else if (apiname == "akali") {
							if ((abilityType == "q" && loweredAttribute == "magic damage") ||
								(abilityType == "e" && loweredAttribute == "total damage") ||
								(abilityType == "r" && loweredAttribute == "physical damage")) {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "r" && loweredAttribute == "minimum magic damage") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+m*(" + expressionString + ")";
							}
							if (abilityType == "r" && j == abilityBreakdown.length - 1) {
								let m = targetPercentMissingHealth * 0.0286 * 100; // 0.0286 is 2.86% per 1% missing health on the fandom
								m = m > 2 ? 2 : m;
								m += 1;
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] = eval(damageBeforeResistances[skillKey][this.MAGIC_DAMAGE]);
							}
						} else if (apiname == "alistar") {
							if (abilityType != "r" && (loweredAttribute == "magic damage" || loweredAttribute == "total magic damage")) {
								// trample does total magic damage over 5 seconds
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							}
						} else if (apiname == "amumu") {
							if ((abilityType == "q" || abilityType == "e" || abilityType == "r") && loweredAttribute == "magic damage") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "e" && loweredAttribute == "physical damage reduction") {
								damageReductions[skillKey][this.PHYSICAL_DAMAGE] += eval("+" + expressionString);
							} else if (abilityType == "w" && loweredAttribute.includes("magic damage")) {
								// this is based off the parsed data. the example is the following"5+0.005*(+0.5*per100AP)maximumhealth"
								let splitExpressionString = expressionString.split("+");
								let perAPMaxHealthFormula = 0.5 * Math.floor(AP / 100) + eval(splitExpressionString[1].replace("*(", "")) * maximumhealth;
								let expressionValue = (eval(splitExpressionString[0]) + perAPMaxHealthFormula) * ROTATION_DURATION * 2;
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionValue;
							}
						} else if (apiname == "anivia") {
							if ((abilityType == "q" && loweredAttribute == "total damage") ||
								(applyAbilitySteroids && abilityType == "e" && loweredAttribute.includes("enhanced")) ||
								(!applyAbilitySteroids && abilityType == "e" && !loweredAttribute.includes("enhanced"))) {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "r") {
								let maxSizeSeconds: number = 1.5; // the time it takes to grow to max size which will then do empowered damage
								let expressionValue: number = eval(expressionString);
								if (!loweredAttribute.includes("empowered")) {
									expressionValue *= maxSizeSeconds;
								} else {
									expressionValue *= (ROTATION_DURATION - maxSizeSeconds);
								}
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionValue;
							}
						} else if (apiname == "annie") {
							if (loweredAttribute.includes("magic damage")) {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (loweredAttribute == "damage reduction") {
								let expressionValue: number = this.evalAttributePercent(expressionString);
								damageReductions[skillKey][this.PHYSICAL_DAMAGE] += eval("+" + expressionValue);
								damageReductions[skillKey][this.MAGIC_DAMAGE] += eval("+" + expressionValue);
							}
						} else if (apiname == "ashe") {
							if (abilityType == "q") {
								if (loweredAttribute.includes("total")) {
									damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
								} else if (loweredAttribute == "bonus attack speed") {
									let expressionValue = this.evalAttributePercent(expressionString, false);
									champion.otherSourcesStats["as"] = expressionValue;
								}
							} else if (abilityType == "w") {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "r" && loweredAttribute == "magic damage") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							}
						} else if (apiname == "aurelionsol") {
							if ((abilityType == "q" || abilityType == "r") && loweredAttribute == "magic damage") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "w" && loweredAttribute == "total damage") {
								let expressionString = attributeObj["string_expression"][champion.currentLevel - 1];
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "e") {
								champion.otherSourcesStats["ms"] = eval(expressionString);
							}
						} else if (apiname == "azir") {
							if ((abilityType == "q" || abilityType == "e" || abilityType == "r") && loweredAttribute == "magic damage") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "w") {
								let expressionValue = this.evalAttributePercent(expressionString, false);
								if (applyAbilitySteroids && loweredAttribute == "increased attack speed") {
									champion.otherSourcesStats["as"] = expressionValue;
								} else if (!applyAbilitySteroids && loweredAttribute == "bonus attack speed") {
									champion.otherSourcesStats["as"] = expressionValue;
								}
							}
						} else if (apiname == "bard") {
							if (abilityType == "q" && loweredAttribute == "magic damage") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							}
						} else if (apiname == "blitzcrank") {
							if ((abilityType == "q" && loweredAttribute == "magic damage") ||
								(abilityType == "r" && loweredAttribute.includes("detonation"))) {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "w") {
								if (loweredAttribute == "attack speed") {
									champion.otherSourcesStats["as"] = this.evalAttributePercent(expressionString, false);
								} else if (loweredAttribute == "movement speed") {
									// his movement speed calculation is really awkward so I reduced it by an arbitrary 10% from its original value
									champion.otherSourcesStats["ms%"] = this.evalAttributePercent(expressionString, false) - 10;
								}
							}
						} else if (apiname == "brand") {
							if (abilityType == "q" || abilityType == "e") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							} else if (abilityType = "w") {
								if ((applyAbilitySteroids && loweredAttribute == "increased damage") ||
									(!applyAbilitySteroids && loweredAttribute == "magic damage")) {
									damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
								}
							} else if (abilityType == "r") {
								if ((applyAbilitySteroids && loweredAttribute.includes("total")) || (!applyAbilitySteroids && loweredAttribute == "magic damage")) {
									damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
								}
							}
						} else if (apiname == "braum") {
							if ((abilityType == "q" || abilityType == "r") && loweredAttribute == "magic damage") {
								expressionString = expressionString.toLowerCase().replace("ofbraum'smaximumhealth", "HP");
								let expressionValue = eval(expressionString);
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionValue;
							} else if (abilityType == "w") {
								if (loweredAttribute.includes("bonus arm")) {
									champion.otherSourcesStats["arm"] = eval(expressionString);
								} else {
									champion.otherSourcesStats["mr"] = eval(expressionString);
								}
							} else if (abilityType == "e") {
								damageReductions[skillKey][this.PHYSICAL_DAMAGE] += eval("+" + expressionString);
								damageReductions[skillKey][this.MAGIC_DAMAGE] += eval("+" + expressionString);
							}
						} else if (apiname == "caitlyn") {
							if ((abilityType == "q" || abilityType == "r") && loweredAttribute == "physical damage") {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "w" && loweredAttribute.includes("headshot")) {
								damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
							} else if (abilityType == "e") {
								damageBeforeResistances[skillKey][this.MAGIC_DAMAGE] += "+" + expressionString;
							}
						} else if (apiname == "camille") {
							if (abilityType == "q") {
								if (loweredAttribute == "bonus physical damage") {
									console.log(expressionString, eval(expressionString) + champion.stats.ad);
									damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + (eval(expressionString) + champion.stats.ad); // adds the damage on top of the physical auto damage
								} else if (loweredAttribute.includes("mixed damage")) {
									let maxLevel = champion.currentLevel > 16 ? 16 : champion.currentLevel;
									let trueDamageDistribution = 0.36 + 0.04 * (maxLevel);
									let totalDamage = eval(expressionString) + champion.stats.ad;
									damageBeforeResistances[skillKey][this.TRUE_DAMAGE] += "+" + (trueDamageDistribution * totalDamage);
									console.log(damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE]);
									damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + ((1 - trueDamageDistribution) * totalDamage);
								}
							} else if (abilityType == "w") {
								if (loweredAttribute == "physical damage") {
									damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
								}
								if (applyAbilitySteroids && loweredAttribute.includes("outer")) {
									let splitExpressionString = expressionString.split("+");
									let secondHalf = eval(splitExpressionString[1].split("*")[0]) * Math.floor(bonusAD / 100);
									let totalDamage = eval(splitExpressionString[0]) + secondHalf;
									damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + totalDamage;
								}
							} else if (abilityType == "e") {
								if (loweredAttribute == "physical damage") {
									damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionString;
								} else if (loweredAttribute == "bonus attack speed") {
									champion.otherSourcesStats = this.evalAttributePercent(expressionString, false);
								}
							} else if (abilityType == "r" && loweredAttribute == "bonus magic damage") {
								bonusPercentAutoDamage[this.MAGIC_DAMAGE] += "+" + (eval(expressionString) / 100); // we apply this damage to the q since it empowers her auto attacks and q
							}
						} else if (apiname == "cassiopeia") {

						}
					});
				} catch (error) {
					// here we catch abilities that are leveled but don't have a particular leveling scheme
					// for example, blitz e does double double damage of his current AD
					if (apiname == "aphelios") {

					} else if (apiname == "blitzcrank") {
						if (abilityType == "e" && abilityRank >= 1) {
							let expressionValue = champion.stats.ad * 2;
							damageBeforeResistances[skillKey][this.PHYSICAL_DAMAGE] += "+" + expressionValue;
						}
					}
				}
			}
		});
		// these values are read in the eval expression
		// the reason we eval after is because we apply any additional modifiers directly into the expression
		// example is aatrox. His R gives AD across the board which impacts all of his abilities and autos
		AD += totalAdditionalAD;
		AP += totalAdditionalAP;
		HP += totalAdditionalHP;
		this.statsService.adjustAttackSpeed(champion, selectedRunes.modifiers.exceedsAttackSpeedLimit);
		let numberOfAutos: number = Math.floor(champion.stats.as * ROTATION_DURATION);
		let autoAttackDamage = this.totalDamageFromAutoAttacks(champion, currentTime, numberOfAutos, applyAbilitySteroids);
		let applyAdditionalPassiveDamage = () => {
			let passiveSkillKey = SKILL_KEYS[0];
			if (apiname == "aatrox") {
				let expressionValue = (0.04588 + 0.00412 * champion.currentLevel) * maximumhealth;
				damageBeforeResistances[passiveSkillKey][this.PHYSICAL_DAMAGE] += expressionValue; // apply aatrox passive atleast once
			} else if (apiname == "akali") {
				let baseDamage = 39;
				if (champion.currentLevel >= 13) {
					baseDamage += (105 - baseDamage) + 15 * (champion.currentLevel - 13);
				} else if (champion.currentLevel >= 8) {
					baseDamage += (60 - baseDamage) + 9 * (champion.currentLevel - 8);
				} else {
					baseDamage += 3 * (champion.currentLevel - 1);
				}
				let expressionValue = baseDamage += 0.6 * bonusAD + 0.5 * AP;
				damageBeforeResistances[passiveSkillKey][this.MAGIC_DAMAGE] += expressionValue;
				if (applyAbilitySteroids) {
					damageBeforeResistances[passiveSkillKey][this.MAGIC_DAMAGE] *= numberOfAutos; // apply akali passive the number of times she autos
				}
			} else if (apiname == "amumu") {
				bonusPercentAbilityDamage[this.TRUE_DAMAGE] += 0.1; // apply the passive as best rotation
			} else if (apiname == "brand") {
				if (champion.totalAbilityRanks >= 1) {
					damageBeforeResistances[passiveSkillKey][this.MAGIC_DAMAGE] += 0.03 * maximumhealth;
					if (champion.totalAbilityRanks >= 3 && applyAbilitySteroids) {
						let levelDamageValue = 0.115 + 0.005 * champion.currentLevel;
						levelDamageValue = levelDamageValue > 0.16 ? 0.16 : levelDamageValue;
						levelDamageValue += 0.015 * Math.floor(AP / 100);
						levelDamageValue *= maximumhealth;
						damageBeforeResistances[passiveSkillKey][this.MAGIC_DAMAGE] += levelDamageValue;
					}
				}
			} else if (apiname == "caitlyn") {
				// trap -> headshot -> trap headshot -> trap -> numberOfAutos -> trap headshot -> headshot
				let baseDamage = 0.5;
				if (champion.currentLevel >= 13) {
					baseDamage += 0.5;
				} else if (champion.currentLevel >= 7) { baseDamage += 0.25; }
				let additionalHeadshotFormula = damageBeforeResistances.skill_w[this.PHYSICAL_DAMAGE];
				// let trapAbility = champion.skill_w["ability_breakdown"][0]["main"]
				// let additionalHeadshotFormula = trapAbility[trapAbility.length - 1]["string_expression"][champion.skill_w["rank"] - 1]
				let ieBonus = 0.15625;
				ieBonus = 0;
				let headShotFormula = (baseDamage + ((1.25 + ieBonus) * champion.stats.crit / 100)) * champion.stats.ad;
				let maxUsableTraps = numberOfAutos > 2 ? 2 : numberOfAutos; // get the max number of ability traps if the its ranked
				let numberOfHeadshotAutos = Math.floor(numberOfAutos / (applyAbilitySteroids ? 3 : 6));
				if (applyAbilitySteroids) { numberOfHeadshotAutos += 1; } // start the rotation with the headshot, otherwise a normal auto at 0 stacks
				let numberOfRegularAutos = numberOfAutos - numberOfHeadshotAutos;
				if (champion.skill_w["rank"] >= 1) {
					// If Yordle Snap Traps are stacked on each other while the target is already rooted by one, the target is immune to them for:
					// 2 seconds for the 2nd and 3rd trap.
					// this means the max number of traps over the current rotation duration of 3s is 2
					let currentBonusDamageFromTraps = eval(damageBeforeResistances["skill_w"][this.PHYSICAL_DAMAGE]) * (maxUsableTraps + numberOfHeadshotAutos - 1); // we subtract 1 from the end since this is after the formula so we'll get 1 more if we dont
					damageBeforeResistances["skill_w"][this.PHYSICAL_DAMAGE] += "+" + currentBonusDamageFromTraps; // apply the trap damage for the max number of available traps
				}
				damageBeforeResistances[passiveSkillKey][this.PHYSICAL_DAMAGE] += headShotFormula * numberOfHeadshotAutos;
			} else if (apiname == "camille") {
				if (champion.skill_q["rank"] >= 1) {
					for (let bonusAutoDamageKeyType in bonusPercentAutoDamage) {
						if (bonusPercentAutoDamage[bonusAutoDamageKeyType] != 0) {
							let bonusPercentVal = eval(bonusPercentAutoDamage[bonusAutoDamageKeyType]);
							let expressionValue = (eval(damageBeforeResistances.skill_q[this.PHYSICAL_DAMAGE]) + eval(damageBeforeResistances.skill_q[this.TRUE_DAMAGE])) * bonusPercentVal;
							damageBeforeResistances.skill_q[this.MAGIC_DAMAGE] += "+" + expressionValue;
							expressionValue = eval(autoAttackDamage[this.PHYSICAL_DAMAGE]) * bonusPercentVal;
							autoAttackDamage[this.MAGIC_DAMAGE] += expressionValue;
						}
					}
				}
			}
		};
		applyAdditionalPassiveDamage(); // apply the additional passive damage
		let tempBonusAbilityDamage: CalculationResults = new CalculationResults(CalculationResults.DEFENSIVE_TYPE);
		let tempBonusAbilityKeys: any[] = [];
		for (let skillKey in damageBeforeResistances) {
			if (skillKey != "autos") {
				for (let keyType in damageBeforeResistances[skillKey]) {
					let expressionString = damageBeforeResistances[skillKey][keyType];
					if (expressionString != "") {
						try {
							if (typeof (expressionString) == "string") {
								if (expressionString.includes("undefined")) { expressionString = expressionString.replace("undefined", ""); }
								if (expressionString.includes("total")) { expressionString = expressionString.replace("total", ""); }
								if (expressionString.includes("oftarget's")) { expressionString = expressionString.replace("oftarget's", ""); }
							}
							let expressionValue = eval(expressionString);
							damageBeforeResistances[skillKey][keyType] = expressionValue;
							for (let bonusAbilityDamageKeyType in bonusPercentAbilityDamage) {
								if (bonusPercentAbilityDamage[bonusAbilityDamageKeyType] != 0) {
									let additionalDamage = expressionValue * bonusPercentAbilityDamage[bonusAbilityDamageKeyType];
									if (bonusAbilityDamageKeyType == keyType) {
										damageBeforeResistances[skillKey][keyType] += additionalDamage;
									} else {
										// reason we add to the temp bonus is because if not, it will iterate again and include the bonus again if the key is different (eg. amumu 10% of q damage as true damage then 10% of true damage = 8.8)
										tempBonusAbilityDamage[skillKey][bonusAbilityDamageKeyType] += additionalDamage;
										// is this really an optimization? pushing is O(n)
										tempBonusAbilityKeys.push([skillKey, bonusAbilityDamageKeyType]);
									}
								}
							}
						} catch (error) {
							console.error("Error evaluating damage result", error);
						}
					} else {
						damageBeforeResistances[skillKey][keyType] = 0;
					}
				}
			}
		}

		tempBonusAbilityKeys.forEach((keyList: any[]) => {
			let [skillKey, damageKeyType] = keyList;
			damageBeforeResistances[skillKey][damageKeyType] += tempBonusAbilityDamage[skillKey][damageKeyType];
		});
		damageBeforeResistances.autos = autoAttackDamage;
		damageBeforeResistances.runeDamage = selectedRunes.runeDamage;
		champion.damageBeforeResistances = damageBeforeResistances;
		champion.damageReductions = damageReductions;
		console.log(champion.damageBeforeResistances, champion.damageReductions);
		return damageBeforeResistances;
	}
	totalDamageFromAutoAttacks(champion: Champion, currentTime: number, numberOfAutos: number, applyAbilitySteroids: boolean): DamageTypes {
		let apiname: string = champion.apiname.toLowerCase();
		let autoDamageResults: DamageTypes = new DamageTypes();
		let totalPhysicalAutoDamage: number = numberOfAutos * champion.stats.ad;
		if (apiname == "azir") {
			if (champion.skill_w["rank"] >= 1) {
				let baseDamage = 60;
				if (champion.currentLevel >= 12) {
					baseDamage += (100 - baseDamage) + 10 * (champion.currentLevel - 12);
				} else if (champion.currentLevel >= 8) {
					baseDamage += (75 - baseDamage) + 5 * (champion.currentLevel - 8);
				} else {
					baseDamage += 2 * (champion.currentLevel - 1);
				}
				let sandSoldierDamage = baseDamage + 0.6 * champion.stats.ap;
				let numSandSoldiers = applyAbilitySteroids ? 3 : 2;
				let totalMagicalAutoDamage = numberOfAutos * (sandSoldierDamage + 0.25 * sandSoldierDamage * (numSandSoldiers - 1));
				autoDamageResults[this.MAGIC_DAMAGE] += totalMagicalAutoDamage;
			} else {
				autoDamageResults[this.PHYSICAL_DAMAGE] += totalPhysicalAutoDamage;
			}
		} else if (apiname == "bard") {
			// chimes spawn in groups of 2 every 50 seconds -> eg in 600 seconds -> 12 chimes
			let numberSpawned = 2;
			let occursEvery = 50;
			let maxNumberOfChimes = currentTime * 60 / occursEvery * numberSpawned;
			// 40 (+ 12 per 5 chimes collected) + 30% AP
			let totalChimeDamage = numberOfAutos * (40 + (12 * Math.floor(maxNumberOfChimes / 5)) + 0.3 * champion.stats.ap);
			autoDamageResults[this.PHYSICAL_DAMAGE] += totalPhysicalAutoDamage;
			autoDamageResults[this.MAGIC_DAMAGE] += totalChimeDamage;
		} else if (apiname == "corki") {
			autoDamageResults[this.PHYSICAL_DAMAGE] += totalPhysicalAutoDamage * 0.2;
			autoDamageResults[this.MAGIC_DAMAGE] += totalPhysicalAutoDamage * 0.8;
		} else { // we skip caitlyn
			autoDamageResults[this.PHYSICAL_DAMAGE] += totalPhysicalAutoDamage;
		}
		return autoDamageResults;
	}
	applyTargetResistance(champion: Champion, targetDetails: TargetDetails) {

	}
	evalAttributePercent(expressionString: string, asRatio: boolean = true) {
		let expressionValue = eval(expressionString.replace("%", ""));
		if (asRatio) { return expressionValue / 100; }
		return expressionValue;
	}
}