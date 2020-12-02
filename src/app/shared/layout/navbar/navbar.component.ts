import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'navbar-details',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	currentPatch = "10.24";
	@Input('navbarChecked') navbarChecked: boolean;
	@Output('navbarCheckedChange') navbarCheckedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	show: boolean = !environment.production;
	constructor() { }

	ngOnInit(): void {

	}
	emit(event: boolean) {
		this.navbarCheckedChange.emit(event);
	}
	closeNav() {
		if (this.navbarChecked) { this.navbarChecked = false; }
	}
}
