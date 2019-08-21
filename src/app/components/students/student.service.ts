import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './Student';

@Injectable()
export class StudentService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:51529/";
  GetStudents(){
    return this.http.get(this.baseUrl+"GetStudents");
  }

  GetStudent(id:number){
    return this.http.get(this.baseUrl+"GetStudent/"+id);
  }

  AddStudent(student:Student){
    return this.http.post(this.baseUrl+"AddStudent/",student);
  }

  EditStudent(id:number,student:Student){
    return this.http.put(this.baseUrl+"UpdateStudent/"+id,student);
  }

  DeleteStudent(id:number){
    return this.http.delete(this.baseUrl+"DeleteStudent/"+id);
  }

  RefreshData:EventEmitter<Student[]>=new EventEmitter<Student[]>();
}
