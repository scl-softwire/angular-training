import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LatLon } from '../../models/lat-lon';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class PostcodesApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http, 'https://api.postcodes.io', {});
  }

  private apiUrlFor(postcode: string): string {
    return new URL(postcode, 'api.postcodes.io/postcodes').href;
  }

  getLatLon(postcode: string): Observable<LatLon> {
    const response$ = this.makeGetRequest<PostcodesApiResponse>(`postcodes/${postcode}`, {});
    return response$.pipe(map(res => ({
      lat: res.result.latitude,
      lon: res.result.longitude
    })));
  }
}

interface PostcodesApiResponse {
  result: {
    latitude: number;
    longitude: number;
  };
}