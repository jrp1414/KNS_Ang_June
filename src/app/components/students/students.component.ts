import { Component, OnInit } from '@angular/core';
import { Student, Students } from './Student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[];
  constructor(public ss:StudentService) { }

  ngOnInit() {
    this.ss.GetStudents().subscribe((data)=>{
      this.students = <Student[]>data;
    });

    this.ss.RefreshData.subscribe((data)=>{
      this.students = data;
    });
  }

}
