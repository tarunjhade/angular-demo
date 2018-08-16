import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
      em{float:right; color:#e056c5; padding-left:10px;}
      .error input{background-color:#e3c3c5}
      .error ::-webkit-input-placeholder {color : #999;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(private auth: AuthService, private route: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) { }
  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.route.navigate(['events']);
  }

  saveProfile(formValue) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValue.firstName, formValue.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Saved');
        });
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
