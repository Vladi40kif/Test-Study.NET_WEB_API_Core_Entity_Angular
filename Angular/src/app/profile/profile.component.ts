import { Component, OnInit, DoCheck } from '@angular/core';
import { EditProfileService } from './../shared/editProfile/edit-profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	constructor(public service: EditProfileService,
				private router: Router,
				private toster: ToastrService) 
	{}

	ngOnInit(): void {
		
	}
	
	public state: string;
	
	public saveChange(){
		this.service.serviceProfile.serviceUser.States;
		this.toster.show("Information send");
  		this.service.sendNewData().subscribe(
	  		resp => this.toster.success("ok"),
	  		err  => this.toster.error("error")
  		);
  }
}
