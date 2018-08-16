import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em{float:right; color:#e056c5; padding-left:10px;}
    `]
})
export class LoginComponent {
    userName;
    password;
    loginInvalid = false;
    constructor(private authService: AuthService, private route: Router) { }
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe(res => {
                if (!res) {
                    this.loginInvalid = true;
                } else {
                    this.route.navigate(['events']);
                }
            });
    }

    cancel() {
        this.route.navigate(['events']);
    }
}
