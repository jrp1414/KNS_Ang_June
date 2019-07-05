import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductThumbnailComponent {
  
  @Input('productDetails') product:Product;
  @Output('pd') parentData:EventEmitter<string>=new EventEmitter<string>();

  SendDataToParent(){
    this.parentData.emit("Some Random Data emitted from child...");
  }

}
