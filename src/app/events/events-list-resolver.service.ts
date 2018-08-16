import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) { }
    resolve() {
        // resolver automatically subscribe to observable so no need to make call to subscribe()
        return this.eventService.getEvents();
    }
}
