import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/index';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    li > a.active {color:#f97924 !important;}
    `]
})
export class NavBarComponent {
    // tslint:disable-next-line:no-inferrable-types
    searchTerm: string = '';
    foundSessions: ISession[];
    constructor(public auth: AuthService, private eventService: EventService) { }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }

}
