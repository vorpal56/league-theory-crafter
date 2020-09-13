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
}
export class RuneModifiers {
	stackAllRunes: boolean;
	soulCount: number;
	cdrCap: number;
	exceedsAttackSpeedLimit: boolean;
	constructor(stackAllRunes: boolean, soulCount: number) {
		this.stackAllRunes = stackAllRunes;
		this.soulCount = soulCount;
		this.cdrCap = 40;
		this.exceedsAttackSpeedLimit = false;
	}
}