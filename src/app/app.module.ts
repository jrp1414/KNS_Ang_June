import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import * as c from "./components/components.index";
import {ShortenPipe,ConvertToPipe,FilterProductPipe} from "./pipes/pipes.index";  
import {BasicHighlightDirective,BetterHighlightDirective,UnlessDirective} from "./directives/directives.index";
import { AppComponent } from './app.component';
import { LoggingService } from './services/logging.service';

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
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
