import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../components/users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private authenticated:boolean=false;
baseUrl:string="http://localhost:51529/";  
constructor(private http:HttpClient) { }

  SignIn(userName:string,password:string){
    return this.http.post(this.baseUrl+"Authenticate",{UserName:userName,Password:password});
  }

  Register(user:User){
    return this.http.post(this.baseUrl+"Register",user);
  }

  SignOut(){
    this.authenticated=false;
  }

  IsAuthenticated():boolean{
    return this.authenticated;
  }
}
