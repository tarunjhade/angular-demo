import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsAppComponent } from './events-app.component';


@NgModule({
  declarations: [
    EventsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
