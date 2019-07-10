import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/product-list/product-list.component';

@Pipe({
  name: 'filterProduct',
  pure:false
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], filter:string): Product[] {
    let filteredProducts:Product[]=[];

    if (filter.length<3) {
      return value;
    }

    value.forEach((prod)=>{
      if(prod.productName.toLowerCase().indexOf(filter.toLowerCase())!=-1){
        filteredProducts.push(prod);
      }
    });

    return filteredProducts;
  }

}
