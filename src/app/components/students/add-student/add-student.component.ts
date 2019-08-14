import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { RangeValidator } from "../../../shared/RangeValidator";
import { Match } from 'src/app/shared/MatchValidator'

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
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      NotificationType: "email",
      MobileNo: "",
      Email: this.fb.group({
        EmailId: ["", [Validators.required, Validators.email]],
        ConfirmEmailId: ["", [Validators.required, Validators.email]]
      },{validator:Match("EmailId","ConfirmEmailId")}),
      TermsAndConditions: true,
      Subjects: "",
      // Age:[0,RangeValidator],
      Age: [0, RangeValidator(8, 18)],
      hobbies: this.hobbies,
      addresses: this.addresses
    });

    this.studentForm.get("NotificationType").valueChanges.subscribe((val) => {
      this.SetNotificationValidation(val);
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
