import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-temp-products',
  templateUrl: './temp-products.component.html',
  styleUrls: ['./temp-products.component.css'],
  // providers:[ProductService]
})
export class TempProductsComponent implements OnInit {

  constructor(private ls: LoggingService, private ps: ProductService) { }
  logData: string;
  ngOnInit() {

    this.ps.notifyParent.subscribe((data) => {
      this.logData = data;
    });
  }

}
