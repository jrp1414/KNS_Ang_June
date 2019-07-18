import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { LoggingService } from '../../services/logging.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductThumbnailComponent {

  constructor(private ls:LoggingService,private ps:ProductService){

  }
  
  @Input('productDetails') product:Product;
  @Output('pd') parentData:EventEmitter<string>=new EventEmitter<string>();

  SendDataToParent(){
    //this.parentData.emit("Some Random Data emitted from child...");
    //this.ls.logData("From Thumbnail Component");

    this.ps.notifyParent.emit(this.product.productName+" is Emitted");
  }



}
