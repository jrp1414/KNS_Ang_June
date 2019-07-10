import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { StructDirectivesComponent } from './components/struct-directives/struct-directives.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ConvertToPipe } from './pipes/convert-to.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import {BasicHighlightDirective} from './directives/basicHighlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    NgifComponent,
    StructDirectivesComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    ConvertToPipe,
    FilterProductPipe,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
