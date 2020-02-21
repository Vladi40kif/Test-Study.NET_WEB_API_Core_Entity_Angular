import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from './../../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-registrution',
    templateUrl: './registrution.component.html',
    styleUrls: ['./registrution.component.css']
})
export class RegistrutionComponent implements OnInit {

    constructor(public service:UserService) { }

    register() {
        try{
            this.service.sendRegInfo();
        }
        catch(ex){
            console.log(ex);
        }
    }

    ngOnInit() {
    }

}
