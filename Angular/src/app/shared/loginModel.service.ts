import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginModelService {

	constructor(){}

	public LoginForm = new FormGroup({
        UserName: new FormControl( '', [
        	Validators.minLength(4),
        	Validators.maxLength(24),
        	Validators.pattern('^[a-z0-9_-]{4,24}') ] ),
        Password: new FormControl( '', Validators.minLength(4))
    });

}