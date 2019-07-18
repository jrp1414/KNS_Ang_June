import { Component, OnInit } from '@angular/core';
import { Product } from '../components.index';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product;

  constructor(
      private ps:ProductService,
      private route:ActivatedRoute,
      private router:Router
      ) { }

  ngOnInit() {
    //Snapshot Approach
    // let id = +this.route.snapshot.params["id"];
    // this.product = this.ps.getProduct(id); 

    // //ParamsMap Approach
    // this.route.paramMap.subscribe((params)=>{
    //   let id = +params.get("id");
    //   this.product = this.ps.getProduct(id); 
    // });

    //ParamsMap Approach
    this.route.params.subscribe((params)=>{
      console.log(params);
      let id = +params["id"];
      this.product = this.ps.getProduct(id); 
    });
    
  }

  Redirect(){
    this.router.navigate(["/home"]);
  }

  LoadNewProduct(){
    // let newId=+prompt("Enter the Id you want to navigate");
    // this.router.navigate(["/products",newId]);
    //this.router.navigate([newId],{relativeTo:this.route.root}); // This is not going to work in this scenario 
    //this.router.navigate(["products"],{relativeTo:this.route.root}); // This is not going to work in this scenario 
    // this.router.navigate([newId],{relativeTo:this.route.parent}); 
    //localhost:4200/products/5 - localhost:4200/products/new
    // this.router.navigate(["/5"]); // This wont work as it will add 5 to the root
    //this.router.navigate(["5"],{relativeTo:this.route.parent}); // This wont work as it will add 5 to the root
  }

  AddNewProduct(){
    // this.router.navigate(["new"],{relativeTo:this.route}); //localhost:4200/products/2/new // This won't work
    this.router.navigate(["new"],{relativeTo:this.route.parent}); //localhost:4200/products/2/new // This won't work
  }

  EditProduct(){
    this.router.navigate(["edit"],{relativeTo:this.route}); // /products/2/edit
  }

  LoadWrongProduct(){
    this.router.navigate(["2344"],{relativeTo:this.route.parent});
  }
}
