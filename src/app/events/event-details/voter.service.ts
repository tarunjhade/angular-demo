import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {

    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string) {
        // check if there is atleast one voter who voted and return true
        return session.voters.some(voter => voter === voterName);
    }

}
