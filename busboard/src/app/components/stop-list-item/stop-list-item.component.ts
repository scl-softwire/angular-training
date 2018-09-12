import { Component, Input } from '@angular/core';

import { Stop } from '../../models/stop';

@Component({
  selector: 'app-stop-list-item',
  templateUrl: './stop-list-item.component.html',
  styleUrls: ['./stop-list-item.component.scss']
})
export class StopListItemComponent {
  @Input() stop: Stop;
}
