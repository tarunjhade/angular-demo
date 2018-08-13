import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px }
        .event-image { height:100px;}
        a {cursor:pointer;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    // tslint:disable-next-line:no-inferrable-types
    filterBy: string = 'all';
    // tslint:disable-next-line:no-inferrable-types
    sortBy: string = 'votes';
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // + indicates typecasting to number
        // handle route param changes in case of change of route param by searchSession component
        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id']);
            this.addMode = false;
        });
    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
