export interface Rune {
	"name": string,
	"img": string,
	"active": boolean,
	"keyslot": string,
	"stats": any,
	"stackable": any,
	"stacked": boolean,
	"index": number,
	"apiname": string,
	"tooltip": string,
}

export interface RuneShard {
	"name": string,
	"apiname": string,
	"type"?: string,
	"active": boolean,
	"index": number,
	"img": string,
	"stats": any,
}
export interface RuneModifiers {
	"stackAllRunes": boolean;
	"soulCount": number,
}