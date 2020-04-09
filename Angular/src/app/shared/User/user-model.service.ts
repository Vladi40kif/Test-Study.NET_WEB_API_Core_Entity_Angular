import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserModelService {
  
  	public username    : string = null;
  	public fullName    : string = null;
  	public email       : string = null;
  	public emailConfirm: boolean = null;
  	public phone       : string = null;
  	public phoneConfirm: boolean = null;
  	public twoFaktor   : boolean = null;

}
