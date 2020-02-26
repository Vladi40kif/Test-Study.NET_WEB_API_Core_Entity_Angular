import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProfileModelService } from './profile-model.service';

@Injectable({
	providedIn: 'root'
})

export class ProfileService implements OnInit {

	constructor(private http: HttpClient,
				public model: ProfileModelService) 
	{
		this.getData();
	}

	mainUrl: string = "https://localhost:44373/api";    

	ngOnInit(): void{
	}

	getData(): ProfileModelService{

		if(localStorage.getItem('token') == null)
			return null;	

		try{
			this.http.get(this.mainUrl + "/UserProfile").subscribe(resp => {
				this.model.Valid = true;
				this.model.Username    = resp['username']; 
				this.model.FullName    = resp['fullName'];
				this.model.Email       = resp['email'];
				this.model.EmailConfirm= resp['emailConfirm'];
				this.model.Phone       = resp['phone'];
				this.model.PhoneConfirm= resp['phoneConfirm'];
				this.model.TwoFaktor   = resp['twoFaktor'];
			});
		}
		catch(ex){
			this.model.Valid = false;
		}
		return this.model;
	}
}
