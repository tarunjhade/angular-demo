import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient) { }
    loginUser(userName: string, password: string) {
        const loginInfo = { username: userName, password: password };
        const options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
        const url = '/api/login';
        return this.http.post(url, loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
