import { Component } from '@angular/core';

import { Stop } from '../../models/stop';
import { STOPS } from '../../data/mock-stops';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent {

  stops: Stop[];
  selectedStop: Stop;

  constructor() {
    this.stops = STOPS;
  }

  onSelected(stop: Stop): void {
    this.selectedStop = stop;
  }
}
