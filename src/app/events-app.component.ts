import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
