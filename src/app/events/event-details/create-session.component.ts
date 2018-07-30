import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { restrictedWords } from '..';

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
      em{float:right; color:#e056c5; padding-left:10px;}
      .error input, .error select, .error textarea{background-color:#e3c3c5}
      .error ::-webkit-input-placeholder {color : #999;}
  `]
})
export class CreateSessionComponent implements OnInit {
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
        console.log(formValues);
    }
}
