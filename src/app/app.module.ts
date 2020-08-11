import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChampionComponent } from "./champion/champion.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { ItemFilterPipe } from './item-selector/item-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RunesComponent } from './runes/runes.component';


@NgModule({
	declarations: [AppComponent, ChampionComponent, ItemSelectorComponent, ItemFilterPipe, RunesComponent],
	imports: [BrowserModule, NgSelectModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatIconModule, MatButtonModule, MatCheckboxModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
