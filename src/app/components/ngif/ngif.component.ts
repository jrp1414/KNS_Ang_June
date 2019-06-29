import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent{
  age:number=0;
  GetAge(){
    this.age = parseInt(prompt("Enter Age"));

  }
}
