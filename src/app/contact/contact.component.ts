import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	SUBJECTS: object[] = [
		{ "subjectLabel": "General feedback", "subjectValue": "General feedback" },
		{ "subjectLabel": "Report a bug", "subjectValue": "Report a bug" },
		{ "subjectLabel": "Feature request", "subjectValue": "Feature request" },
	];
	targetSubject: string = this.SUBJECTS[0]["subjectValue"];
	constructor() { }

	ngOnInit(): void {
	}

}
