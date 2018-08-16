import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot) {
        // !! typecast to boolean
        // const eventExist = !!this.eventService.getEvent(+route.params['id']);
        const eventExist = true;
        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}
