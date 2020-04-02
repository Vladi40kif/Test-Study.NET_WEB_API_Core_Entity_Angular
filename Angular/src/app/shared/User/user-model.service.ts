import { Injectable } from '@angular/core';
import { Deserializable } from '../deserializable.model';
@Injectable({
  providedIn: 'root'
})
export class UserModelService implements Deserializable {
  
  	public username    : string = null;
  	public fullName    : string = null;
  	public email       : string = null;
  	public emailConfirm: boolean = null;
  	public phone       : string = null;
  	public phoneConfirm: boolean = null;
  	public twoFaktor   : boolean = null;


	public deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
