import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent {
  name:string="";
  address:string="";
  mobileNo:string="";
  grade:string="";

  students=[
    {name:"Avinash",address:"Pune",mobileNo:"977463466",grade:'A'},
    {name:"Amol",address:"Pune",mobileNo:"977463466",grade:'B'},
    {name:"Kapil",address:"Pune",mobileNo:"977463466",grade:'A'},
    {name:"Shiv",address:"Pune",mobileNo:"977463466",grade:'D'},
    {name:"Nagarjun",address:"Pune",mobileNo:"977463466",grade:'B'}
  ];


  AddStudent(){
    this.students.push({name:this.name,address:this.address,mobileNo:this.mobileNo,grade:this.grade});
    this.name="";
    this.address="";
    this.mobileNo="";
    this.grade="";
  }

  //Write Some code to actually call to my backend service and fetch the data 
  //from there
  
}
