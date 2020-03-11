import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../shared/profile/profile.service';
import { Router } from '@angular/router';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public service: ProfileService,
        private router: Router,
        config: NgbCarouselConfig) {
          config.interval = 10000;
        }

  	ngOnInit(): void {
 	}

}
