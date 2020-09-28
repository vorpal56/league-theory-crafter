import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms';

@Directive({
	selector: '[max]',
	providers: [{ provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true }]
})
export class MaxValidatorDirective implements Validator {

	@Input() max: number;

	// https://stackblitz.com/edit/angular-min-max-validation
	validate(control: AbstractControl): { [key: string]: any; } {
		return Validators.max(this.max)(control);
	}

}
