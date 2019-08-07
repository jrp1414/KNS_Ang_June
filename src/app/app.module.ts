import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Route, Routes } from "@angular/router";

import * as c from "./components/components.index";
import { ShortenPipe, ConvertToPipe, FilterProductPipe } from "./pipes/pipes.index";
import { BasicHighlightDirective, BetterHighlightDirective, UnlessDirective } from "./directives/directives.index";
import { AppComponent } from './app.component';
import { LoggingService } from './services/logging.service';
import { ProductService } from './services/product.service';
import { TempProductsComponent } from './components/temp-products/temp-products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductGuardService } from './services/product-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TdfExComponent } from './components/tdf-ex/tdf-ex.component';
import { SignUpComponent } from './components/users/sign-up/sign-up.component';
import { PasswordCompareDirective } from './directives/password-compare.directive';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';

// const routes:Route[]=[];
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "tdf", component: TdfExComponent },
  { path: "signup", component: SignUpComponent },
  {
    path: "products", component: c.ProductListComponent, canActivateChild: [AuthGuardService], children: [
      { path: "new", component: AddProductComponent },  //products/new
      { path: ":id", component: ProductDetailsComponent, canActivate: [ProductGuardService] }, // /proudcts/2344
      { path: ":id/edit", component: EditProductComponent } // /products/5/edit    
      // {path:"new",component:AddProductComponent, canActivate:[AuthGuardService]},  //products/new
      // {path:":id",component:ProductDetailsComponent,canActivate:[ProductGuardService,AuthGuardService]}, // /proudcts/2344
      // {path:":id/edit",component:EditProductComponent, canActivate:[AuthGuardService]} // /products/5/edit    
    ]
  },
  {
    path: "students", component: StudentsComponent, children: [
      { path: "new", component: AddStudentComponent }
    ]
  }
  // {path:"productdetails",component:c.ProductThumbnailComponent},
  // {path:"",redirectTo:"home",pathMatch:"full"},
  // {path:"**",redirectTo:"home"}

];

@NgModule({
  declarations: [
    AppComponent,
    c.HeaderComponent,
    c.FooterComponent,
    c.StringInterpolationComponent,
    c.PropertyBindingComponent,
    c.EventBindingComponent,
    c.NgifComponent,
    c.StructDirectivesComponent,
    c.ProductListComponent,
    c.ProductThumbnailComponent,
    ShortenPipe,
    ConvertToPipe,
    FilterProductPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent,
    HomeComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    TdfExComponent,
    SignUpComponent,
    PasswordCompareDirective,
    StudentsComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
