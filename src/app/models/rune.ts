import { DamageTypes } from './calculations';

export interface Rune {
	name: string,
	img: string,
	active: boolean,
	keyslot: string,
	stats: any,
	stackable: any,
	stacked: boolean,
	index: number,
	apiname: string,
	tooltip: string,
}

export interface RuneShard {
	name: string,
	apiname: string,
	type?: string,
	active: boolean,
	index: number,
	img: string,
	stats: any,
	tooltip: string,
}
export class RuneModifiers {
	stackAllRunes: boolean;
	soulCount: number;
	private _cdrCap: number;
	private _exceedsAttackSpeedLimit: boolean;
	constructor(stackAllRunes: boolean, soulCount: number) {
		this.stackAllRunes = stackAllRunes;
		this.soulCount = soulCount;
		this.cdrCap = 40;
		this.exceedsAttackSpeedLimit = false;
	}

	get cdrCap() { return this._cdrCap; }
	set cdrCap(cdrCap: number) { this._cdrCap = cdrCap; }

	get exceedsAttackSpeedLimit() { return this._exceedsAttackSpeedLimit; }
	set exceedsAttackSpeedLimit(exceedsAttackSpeedLimit: boolean) { this._exceedsAttackSpeedLimit = exceedsAttackSpeedLimit; }
}
interface RuneTree {
	runes: Rune[];
	path: string;
}
export class Runes {
	private static readonly _PRECISION: string = "Precision";
	private static readonly _DOMINATION: string = "Domination";
	private static readonly _SORCERY: string = "Sorcery";
	private static readonly _RESOLVE: string = "Resolve";
	private static readonly _INSPIRATION: string = "Inspiration";
	private static readonly _TREE_INDEXES: object = {};
	primaryTree: RuneTree;
	secondaryTree: RuneTree;
	runeShards: RuneShard[];
	private _runeModifiers: RuneModifiers;
	private _runeDamage: DamageTypes;
	constructor(stackAllRunes: boolean, soulCount: number) {
		this.primaryTree = { runes: [null, null, null, null], path: null },
			this.secondaryTree = { runes: [null, null], path: null },
			this.runeShards = [null, null, null];
		this.modifiers = new RuneModifiers(stackAllRunes, soulCount);
		Runes._TREE_INDEXES[Runes.PRECISION] = 0;
		Runes._TREE_INDEXES[Runes.DOMINATION] = 1;
		Runes._TREE_INDEXES[Runes.SORCERY] = 2;
		Runes._TREE_INDEXES[Runes.RESOLVE] = 3;
		Runes._TREE_INDEXES[Runes.INSPIRATION] = 4;
	}
	static get PRECISION() { return this._PRECISION; }
	static get DOMINATION() { return this._DOMINATION; }
	static get SORCERY() { return this._SORCERY; }
	static get RESOLVE() { return this._RESOLVE; }
	static get INSPIRATION() { return this._INSPIRATION; }
	static get TREE_INDEXES() { return this._TREE_INDEXES; }

	get modifiers() { return this._runeModifiers; }
	set modifiers(runeModifiers: RuneModifiers) { this._runeModifiers = runeModifiers; }

	get runeDamage() { return this._runeDamage; }
	set runeDamage(runeDamage: DamageTypes) { this._runeDamage = runeDamage; }
}