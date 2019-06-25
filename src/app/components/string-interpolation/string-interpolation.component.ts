import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  greetingMessage:string = "Hello world, How are you?";
  num:number=10;
  isActive:boolean=false;
  myClass:string = "alert alert-danger";
  imageSrc:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png";
  someMethod():string{
    // this.getGreeting('test','test');
    return "Some Data Returned";
  }

  getGreeting(num1:number,num2:number):number{
    
    // this.getGreeting2("test",'test','test3');
    // this.getGreeting2("test",'test','test3','test4');
    // return "Hello "+firstName+" "+lastName;
    return num1+num2;
  }

  getGreeting2(...vals:any[]):number{
    console.log(vals);

    this.getGreeting3(15);
    this.getGreeting3(15,10);
    return 10;    
  }

  getGreeting3(num1:number,num2?:number):number{
    let prod = new Product();   
    return num1+num2;
  }
}

class Product{

}


//https://www.npmjs.com/package/bootstrap