import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArrivalsService } from '../../services/arrivals.service';
import { Arrival } from '../../models/arrival';
import { StopsService } from '../../services/stops.service';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.scss']
})
export class StopDetailComponent implements OnInit {

  arrivals: Arrival[];
  stopName: string;

  constructor(private stopsService: StopsService,
              private arrivalsService: ArrivalsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const stopId = this.route.snapshot.paramMap.get('id');
    this.stopsService.getStopName(stopId).subscribe(name => this.stopName = name);
    this.arrivalsService.getArrivals(stopId).subscribe(arrivals => {console.log(arrivals); this.arrivals = arrivals});
  }
}
