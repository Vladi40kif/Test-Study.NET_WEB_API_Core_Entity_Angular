
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModelService } from './user-model.service';

import { State } from './StateEnum';


@Injectable({
	providedIn: 'root'
})
export class UserService implements OnInit {

	constructor(private http: HttpClient,
				public model: UserModelService
				) 
	{
		if(localStorage.getItem('token') != null)
			this.getData();
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

}
