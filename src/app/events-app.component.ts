import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

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
export class EventsAppComponent implements OnInit {
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthStatus().subscribe();
  }
}
