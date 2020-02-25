import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/Auth/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-registrution',
    templateUrl: './registrution.component.html',
    styleUrls: ['./registrution.component.css']
})
export class RegistrutionComponent{

    constructor(public service:AuthService, 
                public tostar: ToastrService) {   }

    register() {
       this.service.sendRegInfo().subscribe(resp => {
           console.log(resp);
            if(resp.succeeded){
                this.tostar.success("Register OK");
                this.service.registerModel.InfoForm.reset();
                this.service.registerModel.PassForm.reset();
            }
            else{
                this.tostar.error(resp.errors[0].code + resp.errors[0].description);
            }
        });
       
    }

}
