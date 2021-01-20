import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import {
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	RouteConfigLoadEnd,
	RouteConfigLoadStart,
	Router,
	RouterOutlet
} from '@angular/router';
import { fadeAnimation } from './shared/animations/fade.animation';

@Component({
	selector: "league-theory-crafter",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
	title = "league-theory-crafter";
	loadingRouteConfig: boolean;
	navbarChecked: boolean = false;

	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart
				|| event instanceof RouteConfigLoadStart) {
				this.loadingRouteConfig = true;
			} else if (event instanceof NavigationEnd ||
				event instanceof NavigationError ||
				event instanceof NavigationCancel ||
				event instanceof RouteConfigLoadEnd) {
				this.loadingRouteConfig = false;
			}
		});
	}
	getRouterOutletState(outlet: RouterOutlet) {
		return outlet.isActivated ? outlet.activatedRoute : '';
	}
	setNav(event: boolean) {
		this.navbarChecked = event;
	}
	closeNav() {
		if (this.navbarChecked) { this.navbarChecked = false; }
	}
	@HostListener('document:keydown', ['$event'])
	handleEsc(event:KeyboardEvent) {
		if (event.key == "Escape" && this.navbarChecked) {
			this.setNav(false);
		}
	}
}
