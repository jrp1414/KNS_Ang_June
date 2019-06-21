import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  greetingMessage:string = "Hello world, How are you?";
  num:number=10;
}


//https://www.npmjs.com/package/bootstrap