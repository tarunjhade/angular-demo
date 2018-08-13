import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    // adding alias name for input property modal-trigger
    // tslint:disable-next-line:no-input-rename
    @Input('modal-trigger') modalId: string;

    constructor(refEl: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = refEl.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
