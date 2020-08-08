import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ability-leveler',
	templateUrl: './ability-leveler.component.html',
	styleUrls: ['./ability-leveler.component.css']
})
export class AbilityLevelerComponent implements OnInit {
	_abilityLevel: number = 0;
	can_level_up: boolean = true;
	can_level_down: boolean = false;
	@Input() max_level: number;
	@Input() increase_level;
	@Input() decrease_level;
	@Input() isPassive: boolean;
	@Input() ability: any;
	@Input() currentChampionLevel: number;
	@Output() resetAllocation = new EventEmitter<boolean>();
	@Input()
	get allowReallocation(): number { return this._abilityLevel; }
	set allowReallocation(allowReallocation) {
		if (allowReallocation) {
			this._abilityLevel = 0;
			this.can_level_up = true;
			this.can_level_down = false;
			this.resetAllocation.emit(!allowReallocation);
			console.log("herrre");
		}
	}

	// abilityName: string = ability[1];

	constructor() {
	}

	ngOnInit(): void {
		// this._abilityLevel = 1;
		// this.can_level_up = true;
		// this.can_level_down = false;
		// this.abilityName = this.ability[1];
	}
	updateAbilities() {
		this._abilityLevel = 1;
		this.can_level_up = true;
		this.can_level_down = false;
		// this.abilityName = this.ability[1];
	}
	level_up_ability() {
		if (this.currentChampionLevel < 18 && this._abilityLevel < this.max_level && this._abilityLevel >= 0) {
			this._abilityLevel += 1;
			this.increase_level();
			if (this._abilityLevel === this.max_level) {
				this.can_level_up = false;
			}
			if (this._abilityLevel >= 0) {
				this.can_level_down = true;
			}
		}
	};
	level_down_ability() {
		if (this._abilityLevel <= this.max_level && this._abilityLevel > 0) {
			this._abilityLevel -= 1;
			this.decrease_level();
			if (this._abilityLevel < this.max_level) {
				this.can_level_up = true;
			}
			if (this._abilityLevel === 0) {
				this.can_level_down = false;
			}
		}
	};
}
