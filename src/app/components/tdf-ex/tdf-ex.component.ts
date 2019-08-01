import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-ex',
  templateUrl: './tdf-ex.component.html',
  styleUrls: ['./tdf-ex.component.css']
})
export class TdfExComponent {

  constructor() { }
  color="yellow";
  OnSubmit(f){
    console.log(f);
  }

}



