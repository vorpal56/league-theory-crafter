import { Injectable } from '@angular/core';
import { Champion } from '../models/champion';
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
	totalChampionDamageCalculation(champion: Champion, runes: any, targetResistances: any[], targetHPs: any[], useSteroids: boolean, useForm: boolean): any {
		let damageResults = {};
		let bonusAD = 0;
		let bonusAP = 0;
		let bonusHP = 0;
		let AD = champion.stats.ad;
		let AP = champion.stats.ap;
		let HP = champion.stats.hp;
		let apiname = champion.apiname.toLowerCase();
		SKILL_KEYS.forEach((skillKey: string, i: number) => {
			let abilityRank = champion[skillKey]["rank"];
			let expressionIndex = Number(abilityRank) - 1;
			if (expressionIndex >= 0) {
				let abilityBreakdown = champion[skillKey]["ability_breakdown"][0]["main"];
				abilityBreakdown.forEach((attributeObj: object) => {
					let loweredAttribute = attributeObj["attribute"].toLowerCase();
					let expressionValue = attributeObj["string_expression"][expressionIndex];
					if (apiname == "aatrox") {
						if (useSteroids && skillKey == "skill_q" && loweredAttribute.includes("sweetspot")) {
							damageResults[skillKey] ? damageResults[skillKey] += "+" + expressionValue : damageResults[skillKey] = expressionValue;
						} else if (!useSteroids && skillKey == "skill_q" && !loweredAttribute.includes("sweetspot")) {
							damageResults[skillKey] ? damageResults[skillKey] += "+" + expressionValue : damageResults[skillKey] = expressionValue;
						}
						if (skillKey == "skill_w" && loweredAttribute.includes("total")) {
							damageResults[skillKey] ? damageResults[skillKey] += "+" + expressionValue : damageResults[skillKey] = expressionValue;
						} else if (skillKey == "skill_r" && loweredAttribute.includes("ad")) {
							bonusAD += eval(expressionValue);
						}
					} else if (apiname == "ahri") {

					}
				});
			}
		});
		// these values are read in the eval expression
		AD += bonusAD;
		AP += bonusAP;
		HP += bonusHP;
		for (let key in damageResults) {
			try {
				let value = eval(damageResults[key]);
				damageResults[key] = Math.floor(value);
			} catch (error) {
				// console.log("Error evaluating damage result", error);
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
