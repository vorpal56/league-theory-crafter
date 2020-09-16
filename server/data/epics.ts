import { Dragon } from 'src/app/models/epic';

export const CLOUD: Dragon = {
	active: false,
	name: "cloud",
	img: "assets/images/icons/epics/cloud.png",
	additionalEffectExpression: "0.1*ms",
};
export const INFERNAL: Dragon = {
	active: false,
	name: "infernal",
	img: "assets/images/icons/epics/infernal.png",
	statBonuses: {
		"ad%": 0.04, "ap": 0.04
	},
	additionalEffectExpression: "80+0.225*bonusAD+0.135*AP+0.0275*bonusHealth",
	type: "adaptive"
};
export const MOUNTAIN: Dragon = {
	active: false,
	name: "mountain",
	img: "assets/images/icons/epics/mountain.png",
	statBonuses: {
		"arm%": 0.06, "mr%": 0.06
	},
};
export const OCEAN: Dragon = {
	active: false,
	name: "ocean",
	img: "assets/images/icons/epics/ocean.png",
	statBonuses: {
		"hp5%": 0.025, "mp5%": 0.0025
	},
};
