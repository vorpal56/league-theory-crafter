import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { environment } from 'src/environments/environment';
@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
	TYPES: object[] = [
		{ "typeLabel": "General feedback", "typeValue": "General feedback" },
		{ "typeLabel": "Feature request", "typeValue": "Feature request" },
		{ "typeLabel": "Bug report", "typeValue": "Bug report" },
	];
	subjectType: string = this.TYPES[0]["typeValue"];
	submitted: boolean = false;
	isLoading: boolean = false;
	form: FormGroup;
	name = new FormControl("", [Validators.required]);
	email = new FormControl("", [Validators.required, Validators.email]);
	message = new FormControl("", [Validators.required, Validators.maxLength(256)]);
	honeypot = new FormControl("");
	responseMessage: string;
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
		if (this.email.hasError("required")) { return "Please enter your email"; }
		return this.email.hasError("email") ? "Not a valid email" : "";
	}
	onSubmit() {
		if (this.form.status == "VALID" && this.honeypot.value == "") {
			this.form.disable(); //disable the form so there can't be any inputs while it's being run
			var formData: any = new FormData();
			formData.append("name", this.form.get("name").value);
			formData.append("email", this.form.get("email").value);
			formData.append("type", this.form.get("type").value);
			formData.append("message", this.form.get("message").value);
			this.isLoading = true;
			this.submitted = false;
			this.http.post(`${environment.apiContactUrl}`, formData).subscribe(
				(response) => {
					if (response["result"] == "success") {
						this.responseMessage = "Thanks for the message! I'll get back to you soon!";
					} else {
						this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
					}
					this.form.enable();
					this.submitted = true;
					this.isLoading = false;
				},
				(error) => {
					this.responseMessage = "Oops. Something went wrong... Reload the page and try again.";
					this.form.enable();
					this.submitted = true;
					this.isLoading = false;
					console.log(error);
				}
			);
		}
	}
}
