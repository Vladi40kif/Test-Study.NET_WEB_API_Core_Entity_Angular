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

    constructor(public service:UserService, public tostar: ToastrService) { }

    register() {
       this.service.sendRegInfo().subscribe(resp => {
            if(resp.succeeded){
                this.tostar.success("Register OK");
                this.service.registerModel.Form.reset();
            }
            else{
                this.tostar.error(resp.errors[0].code + resp.errors[0].description);
            }
        });
       
    }

    ngOnInit() {
    }

}
