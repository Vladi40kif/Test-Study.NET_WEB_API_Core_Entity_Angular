import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../shared/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	constructor(public service: ProfileService,
				private router: Router) { }

  ngOnInit(): void {
  }

}
