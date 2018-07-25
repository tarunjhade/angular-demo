import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
