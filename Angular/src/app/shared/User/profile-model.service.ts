import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileModelService {
  	constructor() { }

  	public Valid       : boolean = false;

  	public Username    : string = null;
  	public FullName    : string = null;
  	public Email       : string = null;
  	public EmailConfirm: boolean = null;
  	public Phone       : string = null;
  	public PhoneConfirm: boolean = null;
  	public TwoFaktor   : boolean = null;

}
