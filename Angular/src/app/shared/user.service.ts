import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
            UserName: this.registerModel.InfoForm.controls['userName'].value,
            Password: this.registerModel.PassForm.controls['password'].value, 
            Email: this.registerModel.InfoForm.controls['email'].value,
            Role: "",
            FullName: this.registerModel.InfoForm.controls['fullName'].value 
        };
       
        return this.http.post(this.mainUrl + "/Auth/register", registerBody);
    }
}
