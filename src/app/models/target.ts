export interface TargetDetails {
	"targetMaxHP": number,
	"targetCurrentHP": number,
	"targetArmor": number,
	"targetMR": number,
	"itemSteroids": boolean, // part of the calculation component anyways so we'll attach it directly
	"abilitySteroids": boolean,
	"useForm": boolean,
}