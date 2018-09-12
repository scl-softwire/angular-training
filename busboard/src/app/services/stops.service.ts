import { Injectable } from '@angular/core';

import { Stop } from '../models/stop';
import { STOPS } from '../data/mock-stops';

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  getStops(): Stop[] {
    return STOPS;
  }
}
