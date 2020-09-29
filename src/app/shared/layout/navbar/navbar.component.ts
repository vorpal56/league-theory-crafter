import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'navbar-details',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	currentPatch = "10.19";
	@Input('navbarChecked') navbarChecked: boolean;
	@Output('navbarCheckedChange') navbarCheckedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	show: boolean = false;
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
