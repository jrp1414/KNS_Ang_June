import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  

  constructor() { }

  numberSubs:Subscription;

  ngOnInit() {

    // let numberSubs = Observable.interval(2000).map((num)=>num);

    // numberSubs.subscribe((data)=>{
    //   console.log(data);
    // });

    // let customObs=Observable.create((observer:Observer<string>)=>{
    //  setTimeout(() => {
    //    observer.next("First Data Released");
    //  }, 2000); 
    //  setTimeout(() => {
    //   observer.next("Second Data Released");
    // }, 4000); 

    // // setTimeout(() => {
    // //   observer.error("Some Error Occurred");
    // // }, 4000); 

    
    // setTimeout(() => {
    //   observer.next("Third Data Released");
    // }, 6000); 
    
    // setTimeout(() => {
    //   observer.complete();
    // }, 8000);

    // });

    // customObs.subscribe(
    //   (data)=>{console.log(data);},
    //   (error)=>{console.error(error)},
    //   ()=>{console.warn("Process Completed")}
    // );







    let numberSubs = Observable.interval(1000).map((num)=>num);
    let counter=1;
    this.numberSubs =  numberSubs.subscribe((data)=>{
      console.log(data);
      counter++;
      if(counter>10){
        this.numberSubs.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.numberSubs.unsubscribe();
  }

}
