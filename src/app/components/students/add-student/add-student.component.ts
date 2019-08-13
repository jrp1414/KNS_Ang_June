import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;
  hobbies:FormArray= new FormArray([new FormControl()]);
  addresses:FormArray = new FormArray([
    new FormGroup({
      AddLine1: new FormControl(""),
      AddLine2: new FormControl(""),
      AddLine3: new FormControl(""),
      City: new FormControl(""),
      State: new FormControl("")
    })
  ]);
  constructor() { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      FirstName: new FormControl("",Validators.required),
      LastName: new FormControl("",Validators.required),
      NotificationType: new FormControl("email"),
      MobileNo: new FormControl(""),
      EmailId: new FormControl("",[Validators.required,Validators.email]),
      Addresses: this.addresses,
      TermsAndConditions: new FormControl(),
      Subjects: new FormControl(),
      hobbies:this.hobbies,
      addresses:this.addresses
    });
  }

  OnStudentAdded() {
    console.log(this.studentForm.value);
  }

  AddNewHobby(){
    this.hobbies.push(new FormControl(""));
  }

  OnNotificationChange(notificationType:string){
    let mobileNo = this.studentForm.get("MobileNo");
    if(notificationType==='mobile'){      
      mobileNo.setValidators(Validators.required);
    }else{
      mobileNo.clearValidators();
    }
    mobileNo.updateValueAndValidity(); 
  }

  AddNewAddress(){
    this.addresses.push(new FormGroup({
      AddLine1: new FormControl(""),
      AddLine2: new FormControl(""),
      AddLine3: new FormControl(""),
      City: new FormControl(""),
      State: new FormControl("")
    }));
  }

}
