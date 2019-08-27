import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
    ngOnInit(): void {
        let token = sessionStorage.getItem("token");
        if(token){
            this.authenticated = true;
        }
    }
    authenticated: boolean;
    constructor(private authService: AuthService,private router:Router) {

    }

    SignIn(value) {
        this.authService.SignIn(value.EmailId, value.Password).subscribe((data) => {
            //localStorage.setItem("token",data.toString());
            sessionStorage.setItem("token",data.toString());
            this.authenticated= true;
        }, (error) => {
            console.log(error);
        });
    }

    SignOut() {
        sessionStorage.removeItem("token");
        this.authenticated = false;
        this.router.navigate([""]);
    }

}