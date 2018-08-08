import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class EventsAppComponent {
  title = 'app';
}
