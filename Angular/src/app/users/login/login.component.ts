import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from './../../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor(public service:UserService, public tostar: ToastrService) { }

	public login(){

		this.service.sendLoginInfo().subscribe(
			(res: any) => {
			localStorage.setItem('token', res.token);
			this.tostar.success('Login OK');
			this.tostar.info(res.token);
			//this.router.navigateByUrl('/home');
		},
			err => {
			if (err.status == 400)
				this.tostar.error('Incorrect username or password.', 'Authentication failed.');
			else
				console.log(err);
		});
	
	}
}
