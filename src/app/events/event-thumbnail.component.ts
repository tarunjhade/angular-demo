import {Component, Input} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-thumbnail',
    template: `
    <div class="card bg-light thumbnail">
        <div class="card-body">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Date: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span>&nbsp;</span>
                <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">Online URL: {{events?.onlineUrl}}</div>
        </div>
    </div>`,
    styles: [ `
    .thumbnail{ min-height:210px;}
    ` ]
})
export class EventThumbnailComponent {
    @Input() event: any;
    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['text-success'];
        } else if (this.event && this.event.time === '10:00 am') {
            return ['text-danger'];
        }
        return [];
    }
}