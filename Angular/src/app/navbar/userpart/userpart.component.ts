import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../shared/User/profile.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-userpart',
	templateUrl: './userpart.component.html',
	styleUrls: ['./userpart.component.css']
})
export class UserpartComponent implements OnInit {

	constructor(public service: ProfileService,
				private router: Router) {}

	ngOnInit(): void {
	}

	public logout(){
		localStorage.removeItem('token');
		this.router.navigateByUrl('/users/login');
		this.service.getData();
	}

}
