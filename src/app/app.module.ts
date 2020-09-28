import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { NgSelectModule } from "@ng-select/ng-select";
import { NgxSliderModule } from '@m0t0r/ngx-slider';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TooltipOptions } from 'ng2-tooltip-directive';
import { DefaultTooltipOptions } from './tooltip-options';

import { AppComponent } from "./app.component";
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		NavbarComponent,
		AboutComponent,
	],
	imports: [
		AppRoutingModule,
		FormsModule,
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		NgSelectModule,
		NgxSliderModule,
		TooltipModule,
		TooltipModule.forRoot(DefaultTooltipOptions as TooltipOptions)
	],
	providers: [{
		provide: RouteReuseStrategy,
		useClass: CustomRouteReuseStrategy,
	}],
	bootstrap: [AppComponent],
})
export class AppModule { }
