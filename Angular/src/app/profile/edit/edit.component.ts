import { Component, OnInit } from '@angular/core';
import { EditProfileService } from './../../shared/editProfile/edit-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 	constructor(public service: EditProfileService,
				private router: Router) { }

	ngOnInit(): void {}

}
