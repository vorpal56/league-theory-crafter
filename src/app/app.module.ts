import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { NgSelectModule } from "@ng-select/ng-select";
import { Ng5SliderModule } from 'ng5-slider';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TooltipOptions } from 'ng2-tooltip-directive';
import { DefaultTooltipOptions } from './tooltip-options';

import { AppComponent } from "./app.component";
import { ChampionComponent } from "./champion/champion.component";
import { ItemSelectorComponent } from "./item-selector/item-selector.component";
import { ItemFilterPipe } from "./item-selector/item-filter.pipe";
import { RunesComponent } from "./runes/runes.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { EpicMonstersComponent } from "./epic-monsters/epic-monsters.component";
import { CalculationsComponent } from "./calculations/calculations.component";
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MinValidatorDirective } from './calculations/min-validator.directive';
import { MaxValidatorDirective } from './calculations/max-validator.directive';
import { FloorPipe } from './calculations/floor.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ChampionComponent,
		ItemSelectorComponent,
		ItemFilterPipe,
		RunesComponent,
		InventoryComponent,
		EpicMonstersComponent,
		CalculationsComponent,
		FooterComponent,
		NavbarComponent,
		MinValidatorDirective,
		MaxValidatorDirective,
		FloorPipe,
	],
	imports: [
		FormsModule,
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		// MatProgressSpinnerModule,
		NgSelectModule,
		Ng5SliderModule,
		TooltipModule,
		TooltipModule.forRoot(DefaultTooltipOptions as TooltipOptions)
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
