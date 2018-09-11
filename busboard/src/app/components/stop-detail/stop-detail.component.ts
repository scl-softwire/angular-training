import { Component, Input } from '@angular/core';

import { Stop } from '../../models/stop';

@Component({
  selector: 'app-stop-detail',
  templateUrl: './stop-detail.component.html',
  styleUrls: ['./stop-detail.component.scss']
})
export class StopDetailComponent {

  @Input() stop: Stop;
  
}
