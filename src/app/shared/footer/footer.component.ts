import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'footer-details',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	constructor() { }

	credit: boolean = false;
	ngOnInit(): void {
	}

}
