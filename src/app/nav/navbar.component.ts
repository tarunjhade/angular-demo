import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[`
    li > a.active {color:#f97924 !important;}
    `]
})
export class NavBarComponent {

}
