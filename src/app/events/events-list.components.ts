import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
    // tslint:disable-next-line:component-selector
    template: `
    <div>
        <h2 class="text-white">Upcoming Angular Events</h2>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-5">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

}

