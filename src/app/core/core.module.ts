import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSliderModule } from '@m0t0r/ngx-slider';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TooltipOptions } from 'ng2-tooltip-directive';
import { DefaultTooltipOptions } from '../tooltip-options';

import { HomepageComponent } from './homepage/homepage.component';
import { ChampionComponent } from './champion/champion.component';
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { ItemFilterPipe } from './item-selector/item-filter.pipe';
import { RunesComponent } from './runes/runes.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EpicMonstersComponent } from './epic-monsters/epic-monsters.component';
import { CalculationsComponent } from './calculations/calculations.component';

import { MinValidatorDirective } from '../shared/directives/min-validator.directive';
import { MaxValidatorDirective } from '../shared/directives/max-validator.directive';
import { FloorPipe } from '../shared/pipes/floor.pipe';

import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
	declarations: [
		ChampionComponent,
		ItemSelectorComponent,
		InventoryComponent,
		CalculationsComponent,
		RunesComponent,
		EpicMonstersComponent,
		HomepageComponent,

		ItemFilterPipe,
		MinValidatorDirective,
		MaxValidatorDirective,
		FloorPipe,
	],
	imports: [
		CommonModule,
		FormsModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		NgSelectModule,
		NgxSliderModule,
		TooltipModule,
		TooltipModule.forRoot(DefaultTooltipOptions as TooltipOptions),
		CoreRoutingModule,
	],
	providers: [

	]
})
export class CoreModule { }
