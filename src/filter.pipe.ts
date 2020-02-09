import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })

  export class FilterPipe implements PipeTransform {
    transform(country: any[], searchText: string): any[] {
      if(!country) return [];
      if(!searchText) return country;
  searchText = searchText.toLowerCase();
  return country.filter( it => {
        return it.toLowerCase().includes(searchText);
      });
    }
}