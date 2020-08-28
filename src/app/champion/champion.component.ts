import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Champion } from "../models/champion";
import { LEVELS, TIMES } from '../../../server/data/data';
import { ChampionService } from "../services/champion.service";
import { Item } from "../models/item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/toArray';
import { toArray, take, shareReplay, share } from 'rxjs/operators';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionComponent implements OnInit {
	champions$: Observable<Champion[]>;
	levels = LEVELS;
	times = TIMES;

	@Input("selectedItems") selectedItems: [Item, Item, Item, Item, Item, Item];
	@Input("selectedElixir") selectedElixir: Item;
	@Input("selectedRunes") selectedRunes: any;
	@Input("stackAllRunes") stackAllRunes: boolean;

	@Output("selectedChampion") selectedChampionEventEmitter = new EventEmitter<Champion>();
	@Output("selectedLevel") currentLevelEventEmitter = new EventEmitter<number>();
	@Output("selectedTime") currentTimeEventEmitter = new EventEmitter<number>();

	// champion: Champion = this.champions[8];
	champion: Champion;
	currentLevel: number = this.levels[9].levelValue;
	currentTime: number = this.times[0].timeValue;

	constructor(private championService: ChampionService, private http: HttpClient) { }

	ngOnInit(): void {
		// asyncpipe on template implicitly subscribes so we must share the results to get the initial champion to set to
		this.champions$ = this.http.get<Champion[]>("/api/champions").pipe(
			shareReplay({ refCount: true, bufferSize: 1 })
		);
		// this.champions$ = this.http.get<Champion[]>("/api/champions/get-champions").pipe(share());
		// this.champion = this.champions$.pipe(toArray())[0];
		this.champions$.subscribe((champion: Champion[]) => {
			this.champion = champion[8];
			this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
			this.selectedChampionEventEmitter.emit(this.champion);
		});
		this.currentLevelEventEmitter.emit(this.currentLevel);
		this.currentTimeEventEmitter.emit(this.currentTime);
		return;
	}
	updateChampion() {
		this.selectedChampionEventEmitter.emit(this.champion);
		this.championService.applyAllComponentChanges(this.champion, this.currentLevel, this.currentTime, this.selectedItems, this.selectedElixir, this.selectedRunes, this.stackAllRunes);
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
}
