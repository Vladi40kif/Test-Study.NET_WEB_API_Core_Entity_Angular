import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../shared/profile/profile.service';
import { Router } from '@angular/router';
import { trigger, transition, animate, style , state } from '@angular/animations'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service: ProfileService,
              private router: Router) 
        {}

  	ngOnInit(): void {}



  public slides = [
    { src: 'assets/img/slider1.jpg', title: 'Title 1' },
    { src: 'assets/img/slider2.png', title: 'Title 2' },
    { src: 'assets/img/slider3.jpg', title: 'Title 3' },
  ];

}
