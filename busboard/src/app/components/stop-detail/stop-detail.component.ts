import { Component } from '@angular/core';

import { Stop } from '../../models/stop';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.scss']
})
export class StopDetailComponent {

  stop: Stop;

  constructor() {
    this.stop = {
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
    }
  }
}
