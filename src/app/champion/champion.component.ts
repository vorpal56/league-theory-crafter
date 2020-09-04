import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Champion, BasicChampion } from "../models/champion";
import { LEVELS, TIMES, STAT_KEYS } from '../../../server/data/data';
import { ChampionService } from "../services/champion.service";
import { Item } from "../models/item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { toArray, take, shareReplay, share } from 'rxjs/operators';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionComponent implements OnInit {

	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: any;
	@Input("stackAllRunes") stackAllRunes: boolean;

	@Output("selectedChampion") selectedChampionEventEmitter = new EventEmitter<Champion>();
	@Output("selectedLevel") currentLevelEventEmitter = new EventEmitter<number>();
	@Output("selectedTime") currentTimeEventEmitter = new EventEmitter<number>();

	levels = LEVELS;
	times = TIMES;
	statKeys = STAT_KEYS;
	currentLevel: number = this.levels[9].levelValue;
	currentTime: number = this.times[0].timeValue;

	basicChampions$: Observable<BasicChampion[]>;
	basicChampion: BasicChampion;

	numChampsCalled = 0;
	championsIndices = {};
	champions: Champion[] = [];
	champion: Champion;

	constructor(private championService: ChampionService, private http: HttpClient) { }

	ngOnInit(): void {
		// asyncpipe on template implicitly subscribes so we must share the results to get the initial champion to set to
		this.basicChampions$ = this.http.get<BasicChampion[]>("/api/champions/basic").pipe(
			shareReplay({ refCount: true, bufferSize: 1 })
		);
		this.basicChampions$.subscribe((basicChampions: BasicChampion[]) => this.basicChampion = basicChampions[0]);
		this.http.get<Champion>("/api/champions/Aatrox").subscribe((champion: Champion) => {
			this.champion = champion;
			this.championsIndices[champion.apiname.toLowerCase()] = this.numChampsCalled++;
			this.champions.push(champion);
			this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
			this.selectedChampionEventEmitter.emit(this.champion);
		});
		this.currentLevelEventEmitter.emit(this.currentLevel);
		this.currentTimeEventEmitter.emit(this.currentTime);
		return;
	}
	updateChampion(basicChampion: BasicChampion) {
		let apiname = basicChampion.apiname.toLowerCase();
		if (apiname in this.championsIndices) {
			this.champion = this.champions[this.championsIndices[apiname]];
			this.selectedChampionEventEmitter.emit(this.champion);
			this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		} else {
			// set the champion to null for the loading spinner
			this.champion = null;
			this.http.get<Champion>(`/api/champions/${basicChampion.apiname}`).subscribe((champion: Champion) => {
				this.champion = champion;
				this.championsIndices[apiname] = this.numChampsCalled++;
				this.champions.push(champion);
				this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
				this.selectedChampionEventEmitter.emit(this.champion);
			});
		}
		return;
	}
	updateLevel() {
		this.currentLevelEventEmitter.emit(this.currentLevel);
		if (this.currentLevel >= 9) {
			this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		}
		return;
	}
	updateCurrentTime() {
		this.currentTimeEventEmitter.emit(this.currentTime);
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
		return;
	}
	assetStatUrl(statName: string) {
		return "assets/images/icons/" + statName + "_icon.png";
	}
	abilityTooltip(champion: Champion, abilityKey: string) {
		return champion[abilityKey]["1"] + "<br><br>" + champion[abilityKey].tooltip;
	}
	resourceTooltip(champion: Champion, statName: string) {
		let baseString = "";
		if (champion.resource.toLowerCase() != "mana" && statName == "mp") {
			baseString += champion.name + " does not use Mana as its resource. Any items with Mana are not included.<br><br>";
		}
		baseString += "+" + this.championService.formatNPlaces(champion.stats[statName + "5"]) + " " + statName + "/5 and ";
		baseString += "+" + this.championService.formatNPlaces(champion.stats[statName + "_lvl"]) + " " + statName + "/level";
		return baseString;
	}
	statTooltip(champion: Champion, statName: string) {
		if (statName == "apen") {
			return this.championService.formatNPlaces(champion.stats["leth"]) + this.statKeys["leth"] + "<br>" + this.championService.formatNPlaces(champion.stats[statName + "%"]) + this.statKeys[statName + "%"];
		} else if (statName == "mpen") {
			return this.championService.formatNPlaces(champion.stats[statName]) + this.statKeys[statName] + "<br>" + this.championService.formatNPlaces(champion.stats[statName + "%"]) + this.statKeys[statName + "%"];
		}
		return this.championService.formatNPlaces(champion.stats[statName]) + this.statKeys[statName];
	}
}
