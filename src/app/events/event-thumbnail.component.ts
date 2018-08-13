import { Component, Input } from '@angular/core';
import { IEvent } from '.';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="card bg-secondary thumbnail mb-2 text-white shadow">
        <div class="card-body">
            <h3>{{event?.name | uppercase}}</h3>
            <div>Date: {{event?.date | date:'shortDate'}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Date: {{event?.price | currency:'USD'}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span>&nbsp;</span>
                <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">Online URL: {{events?.onlineUrl}}</div>
        </div>
    </div>`,
    styles: [`
    .thumbnail{ min-height:210px;}
    ` ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['text-success'];
        } else if (this.event && this.event.time === '10:00 am') {
            return ['text-danger'];
        }
        return [];
    }
}
