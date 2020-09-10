import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'navbar-details',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	currentPatch = "10.18";
	constructor() { }

	ngOnInit(): void {
	}

}
