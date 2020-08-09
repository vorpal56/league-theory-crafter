import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Champion } from "../models/champion";
import { ChampionService } from '../services/champion.service';

@Component({
	selector: "champion",
	templateUrl: "./champion.component.html",
	styleUrls: ["./champion.component.css"],
})
export class ChampionComponent implements OnInit {
	constructor(private championService: ChampionService) { }
	@Input() champion: Champion;

	ngOnInit(): void { }
}
