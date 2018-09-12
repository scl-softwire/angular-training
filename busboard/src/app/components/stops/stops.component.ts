import { Component, OnInit } from '@angular/core';

import { Stop } from '../../models/stop';
import { StopsService } from '../../services/stops.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {

  stops: Stop[];
  selectedStop: Stop;

  constructor(private stopsService: StopsService) {
  }

  ngOnInit() {
    this.stops = this.stopsService.getStops();
  }

  onSelected(stop: Stop): void {
    this.selectedStop = stop;
  }
}
