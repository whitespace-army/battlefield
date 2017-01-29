import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, prop: any): any {
    return value.sort((a: Object, b: Object) => {
      a = typeof a[prop] === 'string' ? a[prop].toLowerCase() : a[prop];
      b = typeof b[prop] === 'string' ? b[prop].toLowerCase() : b[prop];
      return a > b;
    });
  }

}
