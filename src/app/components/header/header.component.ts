import { Component } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    authenticated:boolean;
    constructor(private authService:AuthService){

    }

    SignIn(){
        this.authService.SignIn();
        this.authenticated=true;
    }

    SignOut(){
        this.authService.SignOut();
        this.authenticated=false;
    }

}