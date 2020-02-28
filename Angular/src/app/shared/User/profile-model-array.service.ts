import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProfileModelArrayService {

	constructor() {
		this.Data = new Array<Array<string>>(
			['Full Name', '', "fullName"],
			['Username', '',  "username" ],
			['Email', '', "email" ],
			['Email Confirm', '', "emailConfirm" ],
			['Phone', '',"phone"  ],
			['Phone Confirm', '',  "phoneConfirm"],
			['Two Faktor', '', "twoFaktor" ]
			);
	}

	Data: Array<Array<string>>;


 

}
