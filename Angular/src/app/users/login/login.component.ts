import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/Auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../../shared/User/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private profileService: UserService, 
				public service: AuthService, 
				private tostar: ToastrService, 
				private router: Router) { }

	ngOnInit() {
    	if (localStorage.getItem('token') != null)
      		this.router.navigateByUrl('/home');
  	}

	public login(){

		this.service.sendLoginInfo().subscribe(
			(res: any) => {
			localStorage.setItem('token', res.token);
			this.profileService.getData();
			this.tostar.success('Login OK');
			this.tostar.info(res.token);
			this.router.navigateByUrl('/home');
		},
			err => {
			if (err.status == 400)
				this.tostar.error('Incorrect username or password.', 'Authentication failed.');
			else
				console.log(err);
		});
	
	}
}
