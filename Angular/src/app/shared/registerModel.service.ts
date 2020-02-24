import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class RegisterModelService {

	constructor(private fb: FormBuilder){}

	public Form: FormGroup = this.fb.group({
        userName: ['', [Validators.minLength(4)]],
        fullName: [''],
        email: ['', Validators.email],
        password: this.fb.group({
            password: ['',[Validators.minLength(4)]],
            confirmPass: ['']
        }, { validator: this.checkPasswords })
    });

    private checkPasswords(group: FormGroup) {
        return group.get('password').value === group.get('confirmPass').value ? null : { notSame: true }     
    }
}