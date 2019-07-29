import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable, Observer, Subscription, Subject } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  constructor() { }

  numberSubs: Subscription;

  subjectExample: Subject<string> = new Subject<string>();
  subjectSubscription: Subscription;

  eeExample: EventEmitter<string> = new EventEmitter<string>();

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







    // let numberSubs = Observable.interval(1000).map((num)=>num);
    // let counter=1;
    // this.numberSubs =  numberSubs.subscribe((data)=>{
    //   console.log(data);
    //   counter++;
    //   if(counter>10){
    //     this.numberSubs.unsubscribe();
    //   }
    // });



    // setTimeout(() => {
    //   this.subjectExample.next("Released first Data load using Subject");
    // }, 2000);

    // setTimeout(() => {
    //   this.subjectExample.next("Released Second Data load using Subject");
    // }, 4000);

    // setTimeout(() => {
    //   this.subjectExample.complete();
    // }, 5000);

    // setTimeout(() => {
    //   this.subjectExample.next("Released Third Data load using Subject");
    // }, 6000);

    // this.subjectSubscription= this.subjectExample.subscribe(
    //   (data) => { console.log(data); },
    //   (error) => { console.log(error); },
    //   () => { console.log("Completed"); }
    // );



    setTimeout(() => {
      this.eeExample.emit("First Data from Event Emitter");
    }, 2000);

    setTimeout(() => {
      this.eeExample.emit("Second Data from Event Emitter");
    }, 4000);

    setTimeout(() => {
      this.eeExample.complete();
    }, 5000);

    setTimeout(() => {
      this.eeExample.emit("Third Data from Event Emitter");
    }, 6000);


    this.eeExample.subscribe(
      (data) => { console.log(data); },
      (error) => { console.log(error); },
      () => { console.log("Completed"); }
    );


  }

  ngOnDestroy(): void {
    //this.numberSubs.unsubscribe();
    this.subjectSubscription.unsubscribe();
  }

}
