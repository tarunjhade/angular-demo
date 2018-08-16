import { Component, Input, Output, EventEmitter } from '@angular/core';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'upvote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton mt-1">
                <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
            </div>
            <div class="badge badge-inverse votingCount mt-1">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
    @Input() count: number;
    // using input setter
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit({});
    }
}
