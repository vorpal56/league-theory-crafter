import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { toArray, take, shareReplay, share } from 'rxjs/operators';

import { Champion, BasicChampion } from "../models/champion";
import { Item } from "../models/item";
import { Runes } from '../models/rune';
import { TargetDetails } from "../models/target";

import { EMPTY_ITEM } from 'server/data/items';
import { LEVELS, TIMES, STAT_KEYS, SKILL_KEYS } from '../../../server/data/data';
import { ChampionService } from "../services/champion.service";
import { DamageCalculationsService } from '../services/damage-calculations.service';
import { StatsService } from '../services/stats.service';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
	// changeDetection: ChangeDetectionStrategy.OnPush
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
	currentLevel: number = this.levels[0].levelValue;
	currentTime: number = this.times[0].timeValue;
	totalRanks = 0;

	basicChampions$: Observable<BasicChampion[]>;
	basicChampion: BasicChampion;

	numChampsCalled = 0;
	championsIndices = {};
	champions: Champion[] = [];
	champion: Champion;

	constructor(private statsService: StatsService, private championService: ChampionService, private damageCalculationsService: DamageCalculationsService, private http: HttpClient) { }

	ngOnInit(): void {
		// asyncpipe on template implicitly subscribes so we must share the results to get the initial champion to set to
		this.basicChampions$ = this.http.get<BasicChampion[]>("/api/champions/basic").pipe(
			shareReplay({ refCount: true, bufferSize: 1 })
		);
		this.basicChampions$.subscribe((basicChampions: BasicChampion[]) => {
			let basicChampion: BasicChampion = basicChampions[80];
			this.basicChampion = new BasicChampion(
				basicChampion["name"],
				basicChampion["apiname"],
				basicChampion["index"],
				basicChampion["id"],
			);
		});
		this.http.get<Champion>("/api/champions/Nidalee").subscribe((champion: Champion) => {
			this.champion = new Champion(champion, this.currentLevel);
			this.resetAbilities();
			this.championsIndices[this.champion.apiname.toLowerCase()] = this.numChampsCalled++;
			this.champions.push(this.champion);
			this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
			this.championEventEmitter.emit(this.champion);
		});
		this.currentTimeEventEmitter.emit(this.currentTime);
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
			this.http.get<Champion>(`/api/champions/${this.basicChampion.apiname}`).subscribe((champion: Champion) => {
				this.champion = new Champion(champion, this.currentLevel);
				this.resetAbilities();
				this.championsIndices[apiname] = this.numChampsCalled++;
				this.champions.push(this.champion);
				this.championService.applyAllComponentChanges(this.champion, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.targetDetails);
				this.championEventEmitter.emit(this.champion);
			});
		}
		return;
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
		let availableSkillPoints = this.currentLevel - this.totalRanks;
		if (this.championService.hasUltLevel1(this.champion)) {
			availableSkillPoints += 1;
		}
		if (availableSkillPoints > 0 && championAbilityRank < championAbilityMaxRank && championAbilityRank >= 0) {
			this.totalRanks += 1;
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
			this.totalRanks -= 1;
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
			if (this.champion[skillKey]["rank"] < maxUltPoints && this.totalRanks < this.currentLevel) {
				return true;
			} else if (this.champion[skillKey]["rank"] >= maxUltPoints) {
				return false;
			}
		}
		return (this.champion[skillKey]["canLevelUp"] || this.champion[skillKey]["rank"] < this.champion[skillKey]["maxrank"]) && this.totalRanks < this.currentLevel;
	}
	canLevelDown(abilityType: string) {
		let skillKey = "skill_" + abilityType;
		return this.champion[skillKey]["canLevelDown"];
	}
	assetStatUrl(statName: string) {
		return "assets/images/icons/" + statName + "_icon.png";
	}
	abilityTooltip(abilityType: string) {
		let abilityKey = "skill_" + abilityType;
		let upperAbilityType = abilityType == "i" ? "P: " : abilityType.toUpperCase() + ": ";
		return upperAbilityType + this.champion[abilityKey]["1"] + "<br><br>" + this.champion[abilityKey].tooltip;
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
		this.totalRanks = 0;
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
