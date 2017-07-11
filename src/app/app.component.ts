import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1><img src='../assets/VISAlogo.gif' height=22> &nbsp; &nbsp; {{title}}</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Holidays';
}