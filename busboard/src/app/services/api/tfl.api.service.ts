import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LatLon } from '../../models/lat-lon';
import { BaseApiService } from './base-api.service';
import { Stop } from '../../models/stop';

@Injectable({
  providedIn: 'root'
})
export class TflApiService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http, 'https://api.tfl.gov.uk', {
      app_id: '07b2b2b4',
      app_key: '39b80112283c09159030675d88b103a8'
    });
  }

  private mapApiResponseToStop(apiStop: StopApiObject): Stop {
    const towardsProperty = apiStop.additionalProperties.find(prop => prop.category === 'Direction' && prop.key === 'Towards');
    return {
      id: apiStop.naptanId,
      name: apiStop.commonName,
      towards: towardsProperty && towardsProperty.value
    };
  }

  getStopsWithinRadius(location: LatLon, radiusInMetres: number): Observable<Stop[]> {
    const response$ = this.makeGetRequest<StopsApiResponse>('StopPoint', {
      stopTypes: 'NaptanPublicBusCoachTram',
      modes: 'bus',
      lat: location.lat.toString(),
      lon: location.lon.toString(),
      radius: radiusInMetres.toString()
    });
    return response$.pipe(map(res => res.stopPoints.map(apiStop => this.mapApiResponseToStop(apiStop))));
  }
}

interface StopApiObject {
  naptanId: string;
    commonName: string;
    additionalProperties: [{
      category: string;
      key: string;
      value: string;
    }]
}

interface StopsApiResponse {
  stopPoints: StopApiObject[];
}