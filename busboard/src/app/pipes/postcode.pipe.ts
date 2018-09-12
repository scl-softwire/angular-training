import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postcode'
})
export class PostcodePipe implements PipeTransform {

  transform(value: string): string {
    const withoutSpaces = value.replace(/\s/g, '');
    const firstPart = withoutSpaces.slice(0, withoutSpaces.length - 3).toUpperCase();
    const secondPart = withoutSpaces.slice(withoutSpaces.length - 3).toUpperCase();
    return `${firstPart} ${secondPart}`;
  }
}
