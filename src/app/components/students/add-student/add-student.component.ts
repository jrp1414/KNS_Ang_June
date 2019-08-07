import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.studentForm= new FormGroup({
      FirstName:new FormControl(""),
      LastName:new FormControl(""),
      MobileNo:new FormControl(""),
      EmailId:new FormControl(""),
      AddLine1:new FormControl(""),
      AddLine2:new FormControl(""),
      AddLine3:new FormControl(""),
      City:new FormControl(""),
      State:new FormControl("")
    });
  }

  OnStudentAdded(){
    console.log(this.studentForm);
  }

}
