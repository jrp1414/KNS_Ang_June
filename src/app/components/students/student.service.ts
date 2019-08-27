import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './Student';

@Injectable()
export class StudentService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:51529/";
  GetStudents(){
    return this.http.get(this.baseUrl+"GetStudents",this.SetOptions());
  }

  GetStudent(id:number){
    return this.http.get(this.baseUrl+"GetStudent/"+id,this.SetOptions());
  }

  AddStudent(student:Student){
    return this.http.post(this.baseUrl+"AddStudent/",student,this.SetOptions());
  }

  EditStudent(id:number,student:Student){
    return this.http.put(this.baseUrl+"UpdateStudent/"+id,student,this.SetOptions());
  }

  DeleteStudent(id:number){
    return this.http.delete(this.baseUrl+"DeleteStudent/"+id,this.SetOptions());
  }

  RefreshData:EventEmitter<Student[]>=new EventEmitter<Student[]>();

  SetOptions(){
    let token = sessionStorage.getItem("token");
    let header:HttpHeaders= new HttpHeaders({"authorization":"Bearer "+token});
    let options:{[name:string]:HttpHeaders}={headers:header};

    return options;
  }
}
