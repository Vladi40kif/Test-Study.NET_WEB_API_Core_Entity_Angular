
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProfileModelService } from './profile-model.service';
import { ProfileModelArrayService } from './profile-model-array.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ProfileService implements OnInit {

	constructor(private http: HttpClient,
				public model: ProfileModelService,
				public modelAsArray: ProfileModelArrayService) 
	{

		console.log(this.state.value);

		if(localStorage.getItem('token') != null){
			this.getData();
		}

		this.getState().subscribe(
		x =>{
			if(x == 'valid'){

				console.log('update Array ' + this.model.FullName);

				this.modelAsArray.Data[0] = ['Full Name',  this.model.FullName];
				this.modelAsArray.Data[1] = ['Username', this.model.Username];
				this.modelAsArray.Data[2] = ['Email', this.model.Email];
				this.modelAsArray.Data[3] = ['Email Confirm', String(this.model.EmailConfirm)];
				this.modelAsArray.Data[4] = ['Phone', this.model.Phone];
				this.modelAsArray.Data[5] = ['Phone Confirm', String(this.model.PhoneConfirm)];
				this.modelAsArray.Data[6] = ['Two Faktor', String(this.model.TwoFaktor)];
				
				console.log(this.modelAsArray.Data);
			}
		});
	}
	
	mainUrl: string = "https://localhost:44373/api";  

	private state = new BehaviorSubject('unset');

	ngOnInit(): void{}

	getData(){
		if(localStorage.getItem('token') == null){

			this.state.next('unset');
			
			console.log(this.state.value);
		
		}
		else{

			this.state.next('loading');
			console.log(this.state.value);
			
			this.http.get(this.mainUrl + "/UserProfile").subscribe(
			resp => {
				this.model.Username    = resp['username']; 
				this.model.FullName    = resp['fullName'];
				this.model.Email       = resp['email'];
				this.model.EmailConfirm= resp['emailConfirm'];
				this.model.Phone       = resp['phone'];
				this.model.PhoneConfirm= resp['phoneConfirm'];
				this.model.TwoFaktor   = resp['twoFaktor'];
				
				this.state.next('valid');
				console.log(this.state.value);
			},
			error => {
				console.log("err 7");
				this.state.next('err');
				console.log(this.state.value);
			});
		}	
	}

	getState(): Observable<string>{
		return this.state;
	}


}
		