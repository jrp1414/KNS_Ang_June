import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let id = +route.params["id"];
    if (this.ps.getProduct(id)) {      
      return true;
    }
    alert("Invalid Product Id");
    this.router.navigate(["/products"]);    
  }
  constructor(private ps:ProductService,private router: Router) { }
}
