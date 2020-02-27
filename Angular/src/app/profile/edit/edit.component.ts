import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../shared/User/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public service: ProfileService,
				private router: Router) { }

  ngOnInit(): void {
  }

}
