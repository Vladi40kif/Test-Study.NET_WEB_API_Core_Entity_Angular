import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class EditProfileModelService {
	constructor() { }

	public Form = new FormGroup({

		username: new FormControl('', [
			Validators.minLength(4),
			Validators.maxLength(24),
			Validators.pattern('^[a-z0-9_-]{4,24}') ] ), 
		fullName: new FormControl('', [
			Validators.minLength(4),
			Validators.pattern('^[A-Z][A-Za-z `]{2,}') ]),
		email: new FormControl('', [ 
			Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$') ]),
		emailConfirm: new FormControl('', [

			]), 
		phone: new FormControl('', [

			]), 
		phoneConfirm: new FormControl('', [

			]), 
		twoFaktor: new FormControl('', [

			]) 

	}); 

}
