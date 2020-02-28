import { Injectable } from '@angular/core';
import { Fild } from './fild-model';

@Injectable({
	providedIn: 'root'
})
export class ProfileModelArrayService {

	constructor() {
		console.log(this.Data);
	}

	Data = new Array<Fild>(
			new Fild('Full Name','', "fullName"),
			new Fild('Username', '',  "username" ),
			new Fild('Email', '', "email"),
			new Fild('Email Confirm', '', "emailConfirm", false, true),
			new Fild('Phone', '',"phone" ),
			new Fild('Phone Confirm', '',  "phoneConfirm", false, true),
			new Fild('Two Faktor', '', "twoFaktor", true, true, true, ['true', 'false'])
		);
}