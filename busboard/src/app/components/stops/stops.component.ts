import { Component, OnInit } from '@angular/core';

import { Stop } from '../../models/stop';
import { StopsService } from '../../services/stops.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {

  private postcode: string = 'se20ul';
  private radius: number = 1000;
  private maxStops: number = 5;

  stops: Stop[];

  constructor(private stopsService: StopsService) {
  }

  ngOnInit() {
    this.stopsService.getStops(this.postcode, this.radius, this.maxStops).subscribe(stops => this.stops = stops);
  }
}
