import { Injectable } from '@angular/core';
import { ProfileModelArrayService } from './profile-model-array.service';
import { Fild } from './fild-model';
import { UserService } from './../User/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  	constructor( 
  				public modelAsArray: ProfileModelArrayService,
  				public serviceUser: UserService) 
	{
		serviceUser.getState().subscribe(
			state => {
				if(state == serviceUser.States.valid )
					this.initArray();
			}
		);
	}

  	private initArray(){
		this.modelAsArray.Data[0].value = this.serviceUser.model.fullName;
		this.modelAsArray.Data[1].value = this.serviceUser.model.username;
		this.modelAsArray.Data[2].value = this.serviceUser.model.email;
		this.modelAsArray.Data[3].value = String(this.serviceUser.model.emailConfirm);
		this.modelAsArray.Data[4].value = this.serviceUser.model.phone;
		this.modelAsArray.Data[5].value = String(this.serviceUser.model.phoneConfirm);
		this.modelAsArray.Data[6].value = String(this.serviceUser.model.twoFaktor);
	}

}

