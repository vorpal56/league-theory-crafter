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
}
