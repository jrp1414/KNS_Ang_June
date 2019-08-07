import { Component, OnInit } from '@angular/core';
import { Student, Students } from './Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[]=Students;
  constructor() { }

  ngOnInit() {
  }

}
