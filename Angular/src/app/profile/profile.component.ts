import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../shared/User/profile.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(public service: ProfileService,
		private router: Router) 
	{}

	profileMap = new Array< Array<string> >();
	loading : boolean;
	
	ngOnInit(): void {
		if(!this.service.model.Valid)
			this.loadingMode();
		else
			this.initData();
	}

	loadingMode(){
		this.loading = true;
		var refreshIntervalId = setInterval(func => {
			if(this.service.model.Valid){
				this.initData();
				this.loading = false;
				clearInterval(refreshIntervalId); 
			}
		}, 1000);
	}

	initData(){
			this.profileMap.push( ['Full Name', this.service.model.FullName]);
			this.profileMap.push( ['Username', this.service.model.Username ]);
			this.profileMap.push( ['Email', this.service.model.Email ]);
			this.profileMap.push( ['Email Confirm', String(this.service.model.EmailConfirm) ]);
			this.profileMap.push( ['Phone', this.service.model.Phone ]);
			this.profileMap.push( ['Phone Confirm', String(this.service.model.PhoneConfirm) ]);
			this.profileMap.push( ['Two Faktor', String(this.service.model.TwoFaktor) ]);
	}

}
