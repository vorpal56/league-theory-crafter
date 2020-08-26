import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule } from "@ng-select/ng-select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from "./app.component";
import { ChampionComponent } from "./champion/champion.component";
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { ItemFilterPipe } from './item-selector/item-filter.pipe';
import { RunesComponent } from './runes/runes.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EpicMonstersComponent } from './epic-monsters/epic-monsters.component';
import { CalculationsComponent } from './calculations/calculations.component';

@NgModule({
	declarations: [AppComponent, ChampionComponent, ItemSelectorComponent, ItemFilterPipe, RunesComponent, InventoryComponent, EpicMonstersComponent, CalculationsComponent],
	imports: [BrowserModule, NgSelectModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
