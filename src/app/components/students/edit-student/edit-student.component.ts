import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../Student';

@Component({
  selector: 'app-edit-student', 
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;
  student:Student;
  constructor(
    private fb: FormBuilder,
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
  this.route.params.subscribe((params)=>{
    let id=+params["id"];

    this.ss.GetStudent(id).subscribe((data)=>{
      this.student = <Student>data;
      this.studentForm.patchValue(this.student);
    });
  });
  }

  OnStudentEdited() {
    this.ss.EditStudent(this.student.StudentId,this.studentForm.value).subscribe((data)=>{
      this.ss.RefreshData.emit(<Student[]>data);

      this.router.navigate(["students"],{relativeTo:this.route.root});
    });
  }

}
