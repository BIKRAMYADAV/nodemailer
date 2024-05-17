export interface Event {
    id : string;
    title : string;
    start : Date;
    end : Date;
    meetLink : string;
    researcher : string;
    participantName : string;
    participantEmail : string;
    comments : string;
    status?: string;
}

export const event: Event = {
    id: '1',
    title: 'Research Meeting',
    start: new Date('2024-06-01T10:00:00Z'),
    end: new Date('2024-06-01T11:00:00Z'),
    meetLink: 'https://meet.example.com/12345',
    researcher: 'Dr. Selina',
    participantName: 'Bikram Yadav',
    participantEmail: 'bikram.deep.yadav.11@gmail.com',
    comments: 'Discussing research progress',
    status: 'scheduled'
};