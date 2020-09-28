
import { CLOUD, INFERNAL, MOUNTAIN, OCEAN } from 'server/data/epics';
export class Dragon {
	name: string;
	img: string;
	statBonuses?: object;
	additionalEffectExpression?: string;
	type?: string;
	active: boolean;
}
export class Epic {
	active: boolean;
	constructor() {
		this.active = false;
	}
}
export class Epics {
	dragonSet1: Dragon[];
	dragonSet2: Dragon[];
	dragonSet3: Dragon[];
	dragonSet4: Dragon[];
	remainingSet: any[];
	constructor() {
		this.dragonSet1 = [JSON.parse(JSON.stringify(CLOUD)), JSON.parse(JSON.stringify(INFERNAL)), JSON.parse(JSON.stringify(MOUNTAIN)), JSON.parse(JSON.stringify(OCEAN))];
		this.dragonSet2 = [JSON.parse(JSON.stringify(CLOUD)), JSON.parse(JSON.stringify(INFERNAL)), JSON.parse(JSON.stringify(MOUNTAIN)), JSON.parse(JSON.stringify(OCEAN))];
		this.dragonSet3 = [JSON.parse(JSON.stringify(CLOUD)), JSON.parse(JSON.stringify(INFERNAL)), JSON.parse(JSON.stringify(MOUNTAIN)), JSON.parse(JSON.stringify(OCEAN))];
		this.dragonSet4 = [JSON.parse(JSON.stringify(CLOUD)), JSON.parse(JSON.stringify(INFERNAL)), JSON.parse(JSON.stringify(MOUNTAIN)), JSON.parse(JSON.stringify(OCEAN))];
	}
}