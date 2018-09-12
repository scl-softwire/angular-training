import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Stop } from '../models/stop';
import { PostcodesApiService } from './api/postcodes.api.service';
import { TflApiService } from './api/tfl.api.service';

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  constructor(private postcodesApi: PostcodesApiService, private tflApi: TflApiService) { }

  getStops(postcode: string, radius: number, maxStops: number): Observable<Stop[]> {
    const latLon$ = this.postcodesApi.getLatLon(postcode);
    const stops$ = latLon$.pipe(mergeMap(latLon => this.tflApi.getStopsWithinRadius(latLon, radius)));
    return stops$.pipe(map(stops => stops.slice(0, maxStops)));
  }
}
