import { Stop } from '../models/stop';

export const STOPS: Stop[] = [
    {
        id: '1',
        name: 'Eynsham Drive / Blithdale Road',
        arrivals: [
            {
                lineNumber: 177,
                destination: 'Peckham',
                minutesUntilArrival: 1
            },
            {
                lineNumber: 469,
                destination: 'Queen Elizabeth Hospital',
                minutesUntilArrival: 2
            },
            {
                lineNumber: 177,
                destination: 'Peckham',
                minutesUntilArrival: 10
            },
            {
                lineNumber: 469,
                destination: 'Queen Elizabeth Hospital',
                minutesUntilArrival: 18
            },
            {
                lineNumber: 177,
                destination: 'Peckham',
                minutesUntilArrival: 20
            }
        ]
    },
    {
        id: '2',
        name: 'Cassilda Road',
        arrivals: [
            {
                lineNumber: 180,
                destination: 'Lewisham, Shopping Centre',
                minutesUntilArrival: 1
            },
            {
                lineNumber: 177,
                destination: 'Peckham',
                minutesUntilArrival: 11
            },
            {
                lineNumber: 180,
                destination: 'Lewisham, Shopping Centre',
                minutesUntilArrival: 19
            },
            {
                lineNumber: 177,
                destination: 'Peckham',
                minutesUntilArrival: 20
            }
        ]
    },
    {
        id: '3',
        name: 'Bostall Gardens',
        arrivals: [
            {
                lineNumber: 180,
                destination: 'Belvedere, Industrial Area',
                minutesUntilArrival: 4
            },
            {
                lineNumber: 180,
                destination: 'Belvedere, Industrial Area',
                minutesUntilArrival: 16
            },
            {
                lineNumber: 180,
                destination: 'Belvedere, Industrial Area',
                minutesUntilArrival: 29
            }
        ]
    }
]
