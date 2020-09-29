import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
	TYPES: object[] = [
		{ "typeLabel": "General feedback", "typeValue": "General feedback" },
		{ "typeLabel": "Bug report", "typeValue": "Bug report" },
		{ "typeLabel": "Feature request", "typeValue": "Feature request" },
	];
	subjectType: string = this.TYPES[0]["typeValue"];
	form: FormGroup;
	submitted: boolean = false;
	name = new FormControl("", [Validators.required]);
	email = new FormControl("", [Validators.required, Validators.email]);
	message = new FormControl("", [Validators.required, Validators.maxLength(256)]);
	isLoading: boolean = false;
	honeypot = new FormControl("");
	constructor(private http: HttpClient, private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			name: this.name,
			email: this.email,
			type: [this.subjectType],
			message: this.message,
			honeypot: this.honeypot
		});
	}
	ngOnInit(): void { }
	isSubmittedClass() {
		return this.submitted ? "submitted" : "unsubmitted";
	}
	emailErrorMessage() {
		if (this.email.hasError("required")) {
			return "Please enter your email";
		}
		return this.email.hasError("email") ? "Not a valid email" : "";
	}
	isValidForm(): boolean {
		if (this.honeypot.value != "") {
			return false;
		}
		if (this.name.hasError("required")) {
			return false;
		}
		if (this.email.hasError("required") || this.email.hasError("email")) {
			return false;
		}
		if (this.message.hasError("required") || this.message.hasError("maxLength")) {
			return false;
		}
		return true;
	}
	onSubmit() {
		if (this.isValidForm()) {
			let nameValue = this.form.get("name").value;
			let emailValue = this.form.get("email").value;
			let typeValue = this.form.get("type").value;
			let messageValue = this.form.get("message").value;
			var formData: any = new FormData();
			formData.append("name", nameValue);
			formData.append("email", emailValue);
			formData.append("type", typeValue);
			formData.append("message", messageValue);
			this.isLoading = true;
			this.http.post("https://script.google.com/macros/s/AKfycbyfUDllSTGFFdQDNqI1LjmpmgA_YU9V-Mm8tW6agoafoOK_eFo/exec", formData).subscribe(
				(response) => {
					this.submitted = true;
					this.isLoading = false;
				},
				(error) => console.log(error)
			);
		}
	}

}
