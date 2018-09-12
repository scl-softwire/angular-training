import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TflApiService } from './api/tfl.api.service';
import { Arrival } from '../models/arrival';

@Injectable({
  providedIn: 'root'
})
export class ArrivalsService {

  constructor(private tflApi: TflApiService) { }

  getArrivals(naptanId: string): Observable<Arrival[]> {
    return this.tflApi.getArrivalsForStop(naptanId).pipe(map(arrivals =>
      arrivals.sort((a, b) => a.arrivalInSeconds - b.arrivalInSeconds)
    ));
  }
}
