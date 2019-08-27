import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  isAuthenticated:boolean;
  passwordPattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");

  OnSignUp(data){
    this.auth.Register(<User>data).subscribe(()=>{
      this.isAuthenticated = false;
      this.router.navigate([""]);
    });
  }

}
