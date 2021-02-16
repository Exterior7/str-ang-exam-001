import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {
  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value) || !key) {
      return value;
    }
    return value.sort((a, b) => {
      if (typeof a[key] === 'number' && b[key] === 'number') {
        return a[key] - b[key];
      }
    
      return ('' + a[key]).toLowerCase().localeCompare(('' + b[key]).toLowerCase())
    });
  }
}