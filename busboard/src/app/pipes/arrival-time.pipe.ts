import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrivalTime'
})
export class ArrivalTimePipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) {
      return 'due';
    } else if (value === 1) {
      return '1 minute';
    } else {
      return `${value} minutes`;
    }
  }
}
