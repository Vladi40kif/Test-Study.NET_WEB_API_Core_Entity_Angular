import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../shared/User/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: ProfileService,
		private router: Router) {}

  	ngOnInit(): void {
 	}

}
