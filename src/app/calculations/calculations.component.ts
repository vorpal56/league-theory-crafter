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

	constructor(private championService: ChampionService) { }

	ngOnInit(): void {
	}

}
