import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;
  hobbies: FormArray = this.fb.array([this.fb.control("")]);
  addresses: FormArray = this.fb.array([
    this.fb.group({
      AddLine1: "",
      AddLine2: "",
      AddLine3: "",
      City: "",
      State: ""
    })
  ]);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      FirstName: ["",Validators.required],
      LastName: ["", Validators.required],
      NotificationType: "email",
      MobileNo: "",
      EmailId: ["", [Validators.required, Validators.email]],
      TermsAndConditions: true,
      Subjects: "",
      hobbies: this.hobbies,
      addresses: this.addresses
    });
  }

  OnStudentAdded() {
    console.log(this.studentForm.value);
  }

  AddNewHobby() {
    this.hobbies.push(this.fb.control(""));
  }

  SetNotificationValidation(notificationType: string) {
    let mobileNo = this.studentForm.get("MobileNo");
    if (notificationType === 'mobile') {
      mobileNo.setValidators(Validators.required);
    } else {
      mobileNo.clearValidators();
    }
    mobileNo.updateValueAndValidity();
  }

  AddNewAddress() {
    this.addresses.push(this.fb.group({
      AddLine1: "",
      AddLine2: "",
      AddLine3: "",
      City: "",
      State: ""
    }));
  }

}
