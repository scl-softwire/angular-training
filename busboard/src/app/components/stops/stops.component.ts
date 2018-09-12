import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Stop } from '../../models/stop';
import { StopsService } from '../../services/stops.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit, OnDestroy {

  postcode: string = 'se20ul';
  radius: number = 1000;
  maxStops: number = 5;

  stops: Stop[];
  private stopsSubscription: Subscription = new Subscription();

  @ViewChild('form') form;

  constructor(private stopsService: StopsService) {
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe(() => this.refreshStops());
    this.refreshStops();
  }

  ngOnDestroy() {
    this.stopsSubscription.unsubscribe();
  }

  refreshStops() {
    this.stops = [];
    this.stopsSubscription.unsubscribe();
    this.stopsSubscription = this.stopsService.getStops(this.postcode, this.radius, this.maxStops).subscribe(stops => this.stops = stops);
  }
}
