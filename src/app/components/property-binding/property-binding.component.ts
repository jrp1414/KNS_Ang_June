import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  imageSrc:string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png";
  imageWidth:string="100";
  imageHeight:string="100";
  hideError:boolean=true;
  constructor() {
    //let tempthis = this; 
    setTimeout(()=>{
      this.hideError = !this.hideError;
    }, 5000);
  }
  ngOnInit() {
    
  }

  getErrorMessageDisplayStatus(){
    return this.hideError;
  }

  getClass(){
    return 'alert alert-info';
  }

}
