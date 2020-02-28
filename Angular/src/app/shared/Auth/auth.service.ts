import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegisterModelService } from './registerModel.service';
import { LoginModelService } from './loginModel.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(public loginModel: LoginModelService, 
                public registerModel: RegisterModelService, 
                private http: HttpClient) { }

    mainUrl: string = "https://localhost:44373/api";    

    sendLoginInfo(): any{     

        var loginBody: any = {
            UserName: this.loginModel.LoginForm.controls['UserName'].value,
            Password: this.loginModel.LoginForm.controls['Password'].value
        };
       
        return this.http.post(this.mainUrl + "/Auth/login", loginBody);
    }

    sendRegInfo(): any{     

        var registerBody: any = {
            UserName: this.registerModel.InfoForm.controls['userName'].value,
            Password: this.registerModel.PassForm.controls['password'].value, 
            Email: this.registerModel.InfoForm.controls['email'].value,
            Role: "",
            FullName: this.registerModel.InfoForm.controls['fullName'].value 
        };
       
        return this.http.post(this.mainUrl + "/Auth/register", registerBody);
    }
    
}
