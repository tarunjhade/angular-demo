import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-6">
        <h3>[Create Event form]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="submit" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class CreateEventComponent {
    isDirty:boolean = true;
    constructor(private router: Router) {

    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
