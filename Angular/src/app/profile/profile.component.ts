import { Component, OnInit, DoCheck } from '@angular/core';
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

	ngOnInit(): void {
		
	}
	
	public state: string;
	
}
