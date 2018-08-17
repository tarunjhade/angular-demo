import { ISession } from '../shared/event.model';
import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
    let component: SessionListComponent,
        mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('It should filter sessions correctly', () => {
            component.sessions = <ISession[]>[{ name: 'session 1', level: 'intermediate' },
            { name: 'session 2', level: 'intermediate' },
            { name: 'session 3', level: 'begginer' }];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSession.length).toBe(2);
        });

        it('It should sort sessions correctly', () => {
            component.sessions = <ISession[]>[{ name: 'session 1', level: 'intermediate' },
            { name: 'session 3', level: 'intermediate' },
            { name: 'session 2', level: 'begginer' }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSession[2].name).toBe('session 3');
        });
    });

});
