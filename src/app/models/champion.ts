import { CalculationResults } from './calculations';
import { ChampionStats } from './stats';

export class BasicChampion {
	private _apiname: string;
	private _id: number;
	private _index: number;
	name: string;
	constructor(name: string, apiname: string, index: number, id: number) {
		this.championName = name;
		this.apiname = apiname;
		this.index = index;
		this.id = id;
	}

	get championName() { return this.name; }
	set championName(name: string) { this.name = name; }

	get apiname() { return this._apiname; }
	set apiname(apiname: string) { this._apiname = apiname; }

	get id() { return this._id; }
	set id(id: number) { this._id = id; }

	get index() { return this._index; }
	set index(index: number) { this._index = index; }
}
export class Champion extends BasicChampion {
	img: string;
	resource: string;
	stats: ChampionStats;
	private _item_stats: object;
	private _rune_stats: object;
	private _other_sources_stats: object;
	skill_i: any;
	skill_q: any;
	skill_w: any;
	skill_e: any;
	skill_r: any;
	currentLevel: number;
	adaptiveType: string;
	totalAbilityRanks: number;
	private _damageBeforeResistances: CalculationResults;
	private _damageAfterResistances: CalculationResults;
	private _damageReductions: CalculationResults;
	constructor(championDetails: any, currentLevel: number) {
		super(championDetails["name"], championDetails["apiname"], championDetails["index"], championDetails["id"]);
		for (let attributeName in championDetails) {
			if (attributeName != "apiname" && attributeName != "id" && attributeName != "index") {
				this[attributeName] = championDetails[attributeName];
			}
		}
		this.adaptiveType = "ad";
		this.currentLevel = currentLevel;
		this.itemStats = {};
		this.runeStats = {};
		this.otherSourcesStats = {};
		this.totalAbilityRanks = 0;
	}

	get itemStats() { return this._item_stats; }
	set itemStats(itemStats: object) { this._item_stats = itemStats; }

	get runeStats() { return this._rune_stats; }
	set runeStats(runeStats: object) { this._rune_stats = runeStats; }

	get otherSourcesStats() { return this._other_sources_stats; }
	set otherSourcesStats(otherSourcesStats: object) { this._other_sources_stats = otherSourcesStats; }

	get damageBeforeResistances() { return this._damageBeforeResistances; }
	set damageBeforeResistances(damageBeforeResistances: CalculationResults) { this._damageBeforeResistances = damageBeforeResistances; }
	get damageAfterResistances() { return this._damageAfterResistances; }
	set damageAfterResistances(damageAfterResistances: CalculationResults) { this._damageAfterResistances = damageAfterResistances; }

	get damageReductions() { return this._damageReductions; }
	set damageReductions(damageReductions: CalculationResults) { this._damageReductions = damageReductions; }

	getChampionStat(statKey: string) { return this.stats[statKey]; }
	setChampionStat(statKey: string, statVal: number) { this.stats[statKey] = statVal; }
}
