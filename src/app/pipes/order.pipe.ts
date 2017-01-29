import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a: Object, b: Object) => a[args] > b[args]);
  }

}
