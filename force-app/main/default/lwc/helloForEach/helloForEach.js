import { LightningElement, track } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: 'Amy Weinstein 2nd Edit',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones 3rd Edit',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu 1st AKTest1 Edit',
            Title: 'CEO',
        },
    ];
}