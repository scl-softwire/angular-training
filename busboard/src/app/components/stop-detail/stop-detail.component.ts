import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Stop } from '../../models/stop';
import { StopsService } from '../../services/stops.service';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.scss']
})
export class StopDetailComponent implements OnInit {

  stop: Stop;

  constructor(private stopsService: StopsService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.stop = this.stopsService.getStop(id);
  }
}
