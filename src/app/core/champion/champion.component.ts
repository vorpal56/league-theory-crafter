import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

import { EMPTY_ITEM } from 'server/data/items';
import { LEVELS, TIMES, STAT_KEYS, SKILL_KEYS } from 'server/data/data';

import { Champion, BasicChampion } from 'src/app/core/models/champion';
import { Item } from 'src/app/core/models/item';
import { Runes } from 'src/app/core/models/rune';
import { TargetDetails } from 'src/app/core/models/target';

import { ChampionService } from 'src/app/core/services/champion.service';
import { StatsService } from 'src/app/core/services/stats.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
})
export class ChampionComponent implements OnInit {

	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: Runes;
	@Input("targetDetails") targetDetails: TargetDetails;

	@Output("champion") championEventEmitter = new EventEmitter<Champion>();
	@Output("selectedTime") currentTimeEventEmitter = new EventEmitter<number>();

	levels = LEVELS;
	times = TIMES;
	statKeys = STAT_KEYS;
	currentLevel: number = this.levels[5].levelValue;
	currentTime: number = this.times[1].timeValue;

	basicChampions$: Observable<BasicChampion[]>;
	basicChampion: BasicChampion;

	numChampsCalled: number = 0;
	championsIndices: object = {};
	champions: Champion[] = [];
	champion: Champion;

	stackCount: number = 0;
	readonly minStackCount: number = 0;
	readonly maxStackCount: number = 10000;

	constructor(private statsService: StatsService, private championService: ChampionService, private apiService: ApiService) { }
	championSearch(term: string, item: BasicChampion) {
		term = term.toLowerCase();
		return item.apiname.toLowerCase().includes(term) || item.name.toLowerCase().includes(term);
	}
	ngOnInit(): void {
		// asyncpipe on template implicitly subscribes so we must share the results to get the initial champion to set to
		let championIndex = 29;
		this.basicChampions$ = this.apiService.getBasicChampions();
		this.basicChampions$.subscribe((basicChampions: BasicChampion[]) => {
			let basicChampion: BasicChampion = basicChampions[championIndex];
			this.basicChampion = new BasicChampion(
				basicChampion["name"],
				basicChampion["apiname"],
				basicChampion["index"],
				basicChampion["id"],
			);
			let championUrl = `${environment.apiChampionsUrl}${this.basicChampion.apiname}`;
			championUrl += environment.production ? ".json" : "";
			this.apiService.getChampionByUrl(championUrl).subscribe((champion: Champion) => {
				this.champion = new Champion(champion, this.currentLevel, { stackCount: this.stackCount });
				this.championChanged();
			});
		});
		return;
	}
	updateChampion(basicChampion: BasicChampion) {
		this.basicChampion = new BasicChampion(
			basicChampion["name"],
			basicChampion["apiname"],
			basicChampion["index"],
			basicChampion["id"],
		);
		let apiname = this.basicChampion.apiname.toLowerCase();
		if (apiname in this.championsIndices) {
			this.champion = this.champions[this.championsIndices[apiname]];
			this.resetAbilities();
			this.championEventEmitter.emit(this.champion);
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		} else {
			// set the champion to null for the loading spinner
			this.champion = null;
			let championUrl = `${environment.apiChampionsUrl}${this.basicChampion.apiname}`;
			championUrl += environment.production ? ".json" : "";
			this.apiService.getChampionByUrl(championUrl).subscribe((champion: Champion) => {
				this.champion = new Champion(champion, this.currentLevel, { stackCount: this.stackCount });
				this.championChanged();
			});
		}
		return;
	}
	championChanged() {
		let apiname = this.basicChampion.apiname.toLowerCase();
		this.resetAbilities();
		this.championsIndices[apiname] = this.numChampsCalled++;
		this.champions.push(this.champion);
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		this.championEventEmitter.emit(this.champion);
	}
	updateLevel() {
		this.champion.currentLevel = this.currentLevel;
		this.resetAbilities();
		// champion component does not receive the changes from inventory component
		let tempElixir = this.currentLevel < 9 ? EMPTY_ITEM : this.selectedElixir;
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, tempElixir, this.selectedRunes, this.targetDetails);
		this.championEventEmitter.emit(this.champion);
		// we reset the abilities on change because it's difficult to know where to remove points and where not to remove points.
		// so when the user changes the champion level, they can readjust the stats
		return;
	}
	updateCurrentTime() {
		this.currentTimeEventEmitter.emit(this.currentTime);
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		return;
	}
	increaseSkillLevel(abilityType: string) {
		let skillKey = "skill_" + abilityType;
		let championAbilityRank = this.champion[skillKey]["rank"];
		let championAbilityMaxRank = this.champion[skillKey]["maxrank"];
		let availableSkillPoints = this.currentLevel - this.champion.totalAbilityRanks;
		if (this.championService.hasUltLevel1(this.champion)) {
			availableSkillPoints += 1;
		}
		if (availableSkillPoints > 0 && championAbilityRank < championAbilityMaxRank && championAbilityRank >= 0) {
			this.champion.totalAbilityRanks += 1;
			this.champion[skillKey]["rank"] += 1;
			if (this.champion[skillKey]["rank"] == championAbilityMaxRank) { this.champion[skillKey]["canLevelUp"] = false; }
			if (this.champion[skillKey]["rank"] >= 0) { this.champion[skillKey]["canLevelDown"] = true; }
		}
		if (this.championIsAphelios()) {
			if (abilityType == "q") {
				this.champion.stats.ad += 4;
			} else if (abilityType == "w") {
				this.champion.otherSourcesStats["as"] = 6 * this.champion[skillKey]["rank"];
				this.statsService.adjustAttackSpeed(this.champion, this.selectedRunes.modifiers.exceedsAttackSpeedLimit);
			} else if (abilityType == "e") {
				this.champion.stats.leth += 2;
			}
		}
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		return;
	}
	decreaseSkillLevel(abilityType: string) {
		let skillKey = "skill_" + abilityType;
		let championAbilityRank = this.champion[skillKey]["rank"];
		let championAbilityMaxRank = this.champion[skillKey]["maxrank"];
		if (championAbilityRank <= championAbilityMaxRank && championAbilityRank > 0) {
			this.champion.totalAbilityRanks -= 1;
			this.champion[skillKey]["rank"] -= 1;
			if (this.champion[skillKey]["rank"] <= championAbilityMaxRank) { this.champion[skillKey]["canLevelUp"] = true; }
			if (this.championService.hasUltLevel1(this.champion) && abilityType == "r") {
				if (this.champion[skillKey]["rank"] == 1) { this.champion[skillKey]["canLevelDown"] = false; }
			} else {
				if (this.champion[skillKey]["rank"] == 0) { this.champion[skillKey]["canLevelDown"] = false; }
			}
		}
		if (this.championIsAphelios()) {
			if (abilityType == "q") {
				this.champion.stats.ad -= 4;
			} else if (abilityType == "w") {
				this.champion.otherSourcesStats["as"] = 6 * this.champion[skillKey]["rank"];
				this.statsService.adjustAttackSpeed(this.champion, this.selectedRunes.modifiers.exceedsAttackSpeedLimit);
			} else if (abilityType == "e") {
				this.champion.stats.leth -= 2;
			}
		}
		this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		return;
	}
	canLevelUp(abilityType: string) {
		let skillKey = "skill_" + abilityType;
		if (abilityType == "r") {
			if (this.championIsAphelios()) { return false; }
			let maxUltPoints = this.maxUltPoints();
			if (this.champion[skillKey]["rank"] < maxUltPoints && this.champion.totalAbilityRanks < this.currentLevel) {
				return true;
			} else if (this.champion[skillKey]["rank"] >= maxUltPoints) {
				return false;
			}
		}
		return (this.champion[skillKey]["canLevelUp"] || this.champion[skillKey]["rank"] < this.champion[skillKey]["maxrank"]) && this.champion.totalAbilityRanks < this.currentLevel;
	}
	canLevelDown(abilityType: string) {
		let skillKey = "skill_" + abilityType;
		return this.champion[skillKey]["canLevelDown"];
	}
	updateStackCount() {
		if (this.championService.isBetween(this.stackCount, this.minStackCount, this.maxStackCount)) {
			this.champion.abilityModifiers.stackCount = this.stackCount;
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
		} else {
			this.champion.abilityModifiers.stackCount = 0;
		}
	}
	boundError() {
		return !this.championService.isBetween(this.stackCount, this.minStackCount, this.maxStackCount);
	}
	boundErrorMessage() {
		return this.championService.boundErrorMessage(this.minStackCount, this.maxStackCount);
	}
	abilityModifierName() {
		let apiname = this.champion.apiname.toLowerCase();
		if (apiname == "chogath") {
			return "Feast Stacks";
		}
		return "Passive Stacks";
	}
	hasAbilityModifier() {
		let apiname = this.champion.apiname.toLowerCase();
		return apiname == "chogath" || apiname == "veigar";
	}
	hasAbilityModifierClass() {
		return this.hasAbilityModifier() ? "ability-modifier" : "";
	}
	assetStatUrl(statName: string) {
		return "assets/images/icons/" + statName + "_icon.png";
	}
	abilityTooltip(abilityType: string) {
		let abilityKey = "skill_" + abilityType;
		let upperAbilityType = abilityType == "i" ? "P: " : abilityType.toUpperCase() + ": ";
		let abilityBreakdown = this.champion[abilityKey]["ability_breakdown"];
		let baseTooltipExpression = upperAbilityType + this.champion[abilityKey]["1"] + "<br><br>" + this.champion[abilityKey].tooltip;
		let abilityBreakdownLength = abilityBreakdown.length;
		if (abilityBreakdownLength == 0) {
			return baseTooltipExpression;
		}
		let cooldownExpression = `<br><div class="cd">`;
		let affectedBy = " (CDR Affected)";
		let notAffectedBy = " (Not CDR Affected)";
		if (abilityBreakdownLength > 1) {
			abilityBreakdown.forEach((breakdown: object, i: number) => {
				if (breakdown["cooldown"].length != 0) {
					let mainKey = i == 0 && abilityBreakdownLength > 1 ? "Main" : "Form";
					// we add the <br> straight into the div since there can be multiple abilities
					cooldownExpression += `<br>${mainKey}: `;
					cooldownExpression += breakdown["cooldown"].join("/");
					cooldownExpression += breakdown["applies_cdr"] ? affectedBy : notAffectedBy;
				}
			});
		} else {
			cooldownExpression += `<br>`;
			cooldownExpression += abilityBreakdown[0]["cooldown"].join("/");
			cooldownExpression += abilityBreakdown[0]["applies_cdr"] ? affectedBy : notAffectedBy;
		}
		return baseTooltipExpression + cooldownExpression + "</div>";
	}
	resourceTooltip(statName: string) {
		let baseString = "";
		if (this.champion.resource.toLowerCase() != "mana" && statName == "mp") {
			baseString += this.champion.name + " does not use Mana as its resource. Any items with Mana are not included.<br><br>";
		}
		baseString += "+" + this.championService.formatNPlaces(this.champion.stats[statName + "5"]) + " " + statName + "/5 and ";
		baseString += "+" + this.championService.formatNPlaces(this.champion.stats[statName + "_lvl"]) + " " + statName + "/level";
		return baseString;
	}
	statTooltip(statName: string) {
		if (statName == "apen") {
			return this.championService.formatNPlaces(this.champion.stats["leth"]) + this.statKeys["leth"] + "<br>" + this.championService.formatNPlaces(this.champion.stats[statName + "%"]) + this.statKeys[statName + "%"];
		} else if (statName == "mpen") {
			return this.championService.formatNPlaces(this.champion.stats[statName]) + this.statKeys[statName] + "<br>" + this.championService.formatNPlaces(this.champion.stats[statName + "%"]) + this.statKeys[statName + "%"];
		}
		return this.championService.formatNPlaces(this.champion.stats[statName]) + this.statKeys[statName];
	}
	resetAbilities() {
		SKILL_KEYS.forEach((skillKey: string) => {
			this.champion[skillKey]["rank"] = 0;
			this.champion[skillKey]["canLevelUp"] = true;
			this.champion[skillKey]["canLevelDown"] = false;
		});
		if (this.championService.hasUltLevel1(this.champion)) {
			this.champion[SKILL_KEYS[4]]["rank"] = 1;
		} else if (this.championIsAphelios()) {
			this.champion[SKILL_KEYS[4]]["rank"] = this.maxUltPoints();
		}
		this.champion.totalAbilityRanks = 0;
		return;
	}
	maxUltPoints(): number {
		let maxPoints = this.champion["skill_r"]["maxrank"];
		let apiname = this.champion.apiname.toLowerCase();
		if (apiname != "udyr") {
			if (this.currentLevel < 6) { return maxPoints - 3; }
			else if (this.currentLevel < 11) { return maxPoints - 2; }
			else if (this.currentLevel < 16) { return maxPoints - 1; }
			else { return maxPoints; }
		} else {
			return maxPoints;
		}
	}
	championIsAphelios() {
		return this.championService.championIsAphelios(this.champion);
	}
	apheliosTooltip(): string {
		return `Aphelios automatically levels up his ultimate ability, ${this.champion.skill_r[1]}, at levels 6, 11, and 16.<br><br>You can level up his:
		<ul class="innate-tooltip">
			<li>Q for Bonus Attack Damage</li>
			<li>W for Bonus Attack Speed</li>
			<li>E for Bonus Lethality</li>
		</ul>
		`;
	}
}