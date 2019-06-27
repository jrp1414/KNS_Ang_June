import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  paraClass:string="";
  OneWayData:string="";
  TwoWayData:string="";
  onMouseEntered(){
    this.paraClass = "alert alert-success";
  }
  onMouseLeft(){
    this.paraClass = "";
  }

  SomeMethod(){
    console.log("Test");
  }

  SomeMethodDblClick(){
    alert("Double Clicked");
  }

  textChanged(data){
    console.log(data.target.value);
  }

  textChanged2(data){
    this.OneWayData= data.target.value;
  }

  EditOneWayData(){
    this.OneWayData = "Some Random Text";
  }

  EditTwoWayData(){
    this.TwoWayData = "Some Random Text";
  }

  TwoWayDataChanged(d:string){
   this.TwoWayData = d.toUpperCase();
  }

}
