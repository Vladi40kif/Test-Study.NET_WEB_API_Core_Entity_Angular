import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProfileModelArrayService {

	constructor() {
		this.Data = new Array<Array<string>>(
			['Full Name', ''],
			['Username', '' ],
			['Email', '' ],
			['Email Confirm', '' ],
			['Phone', '' ],
			['Phone Confirm', '' ],
			['Two Faktor', '' ]
			);
	}

	Data: Array<Array<string>>; 

}
