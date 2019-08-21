import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { RangeValidator } from "../../../shared/RangeValidator";
import { Match } from 'src/app/shared/MatchValidator'
import { StudentService } from '../student.service';
import { Student } from '../Student';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private fb: FormBuilder,
              private ss:StudentService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      "FirstName": "",
      "LastName": "",
      "MobileNo": "",
      "EmailId": "",
      "Address":this.fb.group({
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
    })    
  });
    
  }

  OnStudentAdded() {
    this.ss.AddStudent(this.studentForm.value).subscribe((data)=>{
      this.ss.RefreshData.emit(<Student[]>data);

      this.router.navigate(["students"],{relativeTo:this.route.root});
    });
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
