import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from './../../shared/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-registrution',
  templateUrl: './registrution.component.html',
  styleUrls: ['./registrution.component.css']
})
export class RegistrutionComponent implements OnInit {

  constructor(public service:UserService, private http: HttpClient) { }

  register() {
  	console.log(this.service.formModel.value.password.password);
  	try{

  		 const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(this.http.post("https://localhost:44373/api/Auth/register",  {
      UserName: this.service.formModel.value.UserName,
      Email: this.service.formModel.value.Email,
      FullName: this.service.formModel.value.FullName,
      Password: this.service.formModel.value.password.password
    }, {headers: myHeaders}));
	
		console.log(this.http.get("https://localhost:44382/weatherforecast/"));

	}
	catch(ex){
		console.log(ex);
	}
  }

  ngOnInit() {
  }

}
