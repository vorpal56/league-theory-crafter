import { Component, OnInit, Input } from '@angular/core';
import { ChampionService } from '../services/champion.service';
import { Champion } from '../models/champion';

@Component({
	selector: 'calculations',
	templateUrl: './calculations.component.html',
	styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

	@Input('champion') champion: Champion;

	resistanceStat: number;
	max = 300;
	min = 30;
	step = 10;
	tickInterval = 1;
	armourNegated = 0;

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
	}
	setResistanceStat(statVal: number) {
		this.resistanceStat = statVal;
		this.armourNegated = this.championService.armorPenetration(this.champion, 18, statVal);
	}
	// all damage calculations are floored not rounded (eg. nidalee 2 longswords, 81 ad, cougar q does )

	// there are a few things that I'd like to include in the calculation:
	// 1. 2 separate sliders for resistances (armour and mr)
	// 2. checkbox to apply steriods and items (external buffs including ardent, items including blade and muramana)
	// 3. inputs for a targets max hp and current hp (either 2 input fields or a dual slider (ng5 slider) -> 1 left for current and right for max with ceil/floor inputs)
	// 4. maximum gold generated given current time (relative to perfect cs)
	// 5. form button for champions that have different states eg. jayce, nidalee, kayn (starts as red), shyvana, etc.
	// 5. how do I account for champion specific things? (attached yuumi, kayn transformations, aphelios guns, sylas stealing literally everyone's ult (rotations are different depending on the ult))
	// 6. and then the approximated DPS (which is probably going to be very off, but will do my best to figure it out)
	// 7. split dps into physical, true, and magic damage?
	// 8. potential damage reduced (eg. braum e, alistar r, etc.)
	// 9. a question mark near the top indicating when choosing options, what it influences and provide examples
}
