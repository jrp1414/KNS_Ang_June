import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private authenticated:boolean=false;
  constructor() { }

  SignIn(){
    this.authenticated=true;
  }

  SignOut(){
    this.authenticated=false;
  }

  IsAuthenticated():boolean{
    return this.authenticated;
  }
}
