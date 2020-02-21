import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    responceRegister: any;

    formModel = this.fb.group({
        userName: ['', Validators.required],
        fullName: ['', Validators.email],
        email: [''],
        password: this.fb.group({
            password: ['',[Validators.required, Validators.minLength(4)]],
            confirmPass: ['', Validators.required]
        }, { validator: this.checkPasswords })
    });

    sendRegInfo(){
        this.http.post("https://localhost:44373/api/Auth/register",  {
            UserName: this.formModel.value.UserName,
            Password: this.formModel.value.password.password,
            Email: this.formModel.value.Email,
            Role: "",
            FullName: this.formModel.value.FullName
        }).subscribe(x => {
            this.responceRegister = x;
        });
    }

    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmPass').value;

        return pass === confirmPass ? null : { notSame: true }     
    }
}
