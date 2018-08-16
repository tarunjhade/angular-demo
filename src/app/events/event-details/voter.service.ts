import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {
    constructor(private http: HttpClient) { }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);

        const options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        const options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        return this.http.post(url, {}, options)
            .pipe(catchError(this.handleError('addVoter')))
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        // check if there is atleast one voter who voted and return true
        return session.voters.some(voter => voter === voterName);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
