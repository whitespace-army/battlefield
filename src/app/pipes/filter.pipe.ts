import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, query?: any): any {
    return value.filter(x => RegExp(query, 'i').test(x.title));
  }

}
