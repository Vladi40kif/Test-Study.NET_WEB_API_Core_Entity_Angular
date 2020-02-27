
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';

import { ProfileModelService } from './profile-model.service';
import { EditProfileModelService } from './edit-profile-model.service';
import { ProfileModelArrayService } from './profile-model-array.service';
import { State } from './StateEnum';

@Injectable({
	providedIn: 'root'
})

export class ProfileService implements OnInit {

	constructor(private http: HttpClient,
				public model: ProfileModelService,
				public modelAsArray: ProfileModelArrayService,
				public editFormModel: EditProfileModelService  ) 
	{
		if(localStorage.getItem('token') != null)
			this.getData();
		
		this.getState().subscribe(
		x =>{
			if(x == State.valid){
				this.initArray();
				this.initEditForm();	
			}
		});
	}
	
	mainUrl: string = "https://localhost:44373/api";  

	public States = State;

	private state = new BehaviorSubject(State.unset);

	ngOnInit(): void{}

	getData(){
		if(localStorage.getItem('token') == null)
			this.state.next(State.unset);
		
		else{

			this.state.next(State.loading);
	
			this.http.get(this.mainUrl + "/UserProfile").subscribe(
			resp => {
				this.initModel(resp);
				this.state.next(State.valid);
			},
			error => {
				this.state.next(State.error);
			});
		}	
	}

	getState(): Observable<State>{
		return this.state;
	}

	private initModel(resp: any){
		this.model.username    = resp['username']; 
		this.model.fullName    = resp['fullName'];
		this.model.email       = resp['email'];
		this.model.emailConfirm= resp['emailConfirm'];
		this.model.phone       = resp['phone'];
		this.model.phoneConfirm= resp['phoneConfirm'];
		this.model.twoFaktor   = resp['twoFaktor'];
	}

	private initArray(){

		this.modelAsArray.Data[0] = ['Full Name',  this.model.fullName];
		this.modelAsArray.Data[1] = ['Username', this.model.username];
		this.modelAsArray.Data[2] = ['Email', this.model.email];
		this.modelAsArray.Data[3] = ['Email Confirm', String(this.model.emailConfirm)];
		this.modelAsArray.Data[4] = ['Phone', this.model.phone];
		this.modelAsArray.Data[5] = ['Phone Confirm', String(this.model.phoneConfirm)];
		this.modelAsArray.Data[6] = ['Two Faktor', String(this.model.twoFaktor)];
	}

	private initEditForm(){

		this.editFormModel.Form.controls['fullName'].setValue(this.model.fullName);
		this.editFormModel.Form.controls['username'].setValue(this.model.username);
		this.editFormModel.Form.controls['email'].setValue(this.model.email);
		this.editFormModel.Form.controls['emailConfirm'].setValue(this.model.emailConfirm);
		this.editFormModel.Form.controls['phone'].setValue(this.model.phone);
		this.editFormModel.Form.controls['phoneConfirm'].setValue(this.model.phoneConfirm);
		this.editFormModel.Form.controls['twoFaktor'].setValue(this.model.twoFaktor);
	}
}
