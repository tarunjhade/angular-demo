import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { of } from 'rxjs';

describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('It should remove the voter from the list of voter', () => {
            const session = { id: 6, voters: ['Joe', 'John'] };
            // add a return observable for http delete mock method
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'Joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('John');
        });
    });

    describe('deleteVoter', () => {
        it('It should call http.delete with correct URL', () => {
            const session = { id: 6, voters: ['Joe', 'John'] };
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'Joe');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Joe');
        });
    });

    describe('addVoter', () => {
        it('It should call http.post with correct URL', () => {
            const session = { id: 6, voters: ['John'] };
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, 'Joe');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Joe', {}, jasmine.any(Object));
        });
    });
});
