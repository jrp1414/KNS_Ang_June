import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student:Student;
  constructor(private ss:StudentService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      let id = +params["id"];
      this.ss.GetStudent(id).subscribe((data)=>{
        this.student = <Student>data;
      });
    });
  }

  OnStudentDelete(){
    let message = this.student?this.student.FirstName+" "+this.student.LastName:"New User";
    if(confirm("Are you sure you want to delete "+message+" ?")){
      this.ss.DeleteStudent(this.student.StudentId).subscribe((data)=>{
        this.ss.RefreshData.emit(<Student[]>data);

        this.router.navigate(["students"],{relativeTo:this.route.root});        
      });
    }

  }

}
