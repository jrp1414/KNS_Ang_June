import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  // selector: 'app-main',
  // selector: '[app-main]',
  selector: '.app-main',
  // template:"<h1>Hello World</h1><div>Inline Template Example </div>",
  // template:`<h1>Hello World</h1>
  //   <div class="myClass1">Multiple Line Template Example </div>
  //   <h1>Some other H1</h1>
  //   <app-header></app-header>
  //   `,
templateUrl: './app.component.html',
//   styles:[
//     `h1{background-color: yellow}`,
//     `.myClass1{color:blue}`
// ]
styleUrls:[
  "./app.component.css"
],
// providers:[LoggingService]
})
export class AppComponent {
  title = 'KNSAng';
}
