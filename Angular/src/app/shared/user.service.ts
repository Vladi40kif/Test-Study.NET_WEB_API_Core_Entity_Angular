import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterModelService } from './registerModel.service';
import { LoginModelService } from './loginModel.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public loginModel: LoginModelService, public registerModel: RegisterModelService, private http: HttpClient) { }

    mainUrl: string = "https://localhost:44373/api";    

    sendRegInfo(): any{     
        var registerBody: any = {
            UserName: this.registerModel.Form.controls['userName'].value ,
            Password: this.registerModel.Form.controls['password'].value.password, //  unsave??? 
            Email: this.registerModel.Form.controls['email'].value,
            Role: "",
            FullName: this.registerModel.Form.controls['fullName'].value 
        };
        //console.log(registerBody);
        return this.http.post(this.mainUrl + "/Auth/register", registerBody);
    }
}
