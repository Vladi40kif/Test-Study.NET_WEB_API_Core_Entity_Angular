import { Injectable } from '@angular/core';
import { EditProfileModelService } from './edit-profile-model.service';
import { ProfileService } from './../profile/profile.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  
 	constructor(
 		private http: 			HttpClient,
 		public editFormModel: 	EditProfileModelService,
 		public serviceProfile:	ProfileService) 
 	{ 
 		serviceProfile.serviceUser.getState().subscribe(
			state => {
				if(state == serviceProfile.serviceUser.States.valid )
					this.initEditForm();
			}
		);
 	}

 	mainUrl: string = "https://localhost:44373/api";  

 	sendNewData(){
		var	editBody: any =  {
	  		username: 	  this.editFormModel.Form.controls['username'].value,    
		    fullName: 	  this.editFormModel.Form.controls['fullName'].value,
		    email: 	  	  this.editFormModel.Form.controls['email'].value,       
		    emailConfirm: this.editFormModel.Form.controls['emailConfirm'].value,
		    phone: 		  this.editFormModel.Form.controls['phone'].value,       
		    phoneConfirm: this.editFormModel.Form.controls['phoneConfirm'].value,
		    twoFaktor: 	  this.editFormModel.Form.controls['twoFaktor'].value
		}   

		return this.http.post(this.mainUrl + "/UserProfile", editBody);
	}


	private initEditForm(){

		this.editFormModel.Form.controls['fullName'].setValue(this.serviceProfile.serviceUser.model.fullName);
		this.editFormModel.Form.controls['username'].setValue(this.serviceProfile.serviceUser.model.username);
		this.editFormModel.Form.controls['email'].setValue(this.serviceProfile.serviceUser.model.email);
		this.editFormModel.Form.controls['emailConfirm'].setValue(this.serviceProfile.serviceUser.model.emailConfirm);
		this.editFormModel.Form.controls['phone'].setValue(this.serviceProfile.serviceUser.model.phone);
		this.editFormModel.Form.controls['phoneConfirm'].setValue(this.serviceProfile.serviceUser.model.phoneConfirm);
		this.editFormModel.Form.controls['twoFaktor'].setValue(this.serviceProfile.serviceUser.model.twoFaktor);
	}
}
