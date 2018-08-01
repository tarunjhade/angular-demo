import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { restrictedWords, ISession } from '../shared/index';
import { EventEmitter } from 'events';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
      em{float:right; color:#e056c5; padding-left:10px;}
      .error input, .error select, .error textarea{background-color:#e3c3c5}
      .error ::-webkit-input-placeholder {color : #999;}
  `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();
    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(formValues) {
        // tslint:disable-next-line:prefer-const
        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: formValues.duration,
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit('cancel');
    }
}
