import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginModelService {

	constructor(private fb: FormBuilder){}

	public loginModel: any = this.fb.group({
        UserName: ['', Validators.minLength(4)],
        Password: ['', Validators.minLength(4)]
    });

    public checkPasswords(group: FormGroup) {
        return group.get('password').value === group.get('confirmPass').value ? null : { notSame: true }     
    }
}