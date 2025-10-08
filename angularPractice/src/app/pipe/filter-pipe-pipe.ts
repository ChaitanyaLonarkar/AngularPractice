import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  searchText:string='';


  transform(items: any[], searchText: any): any[] {
    searchText = searchText.toLowerCase();
    if (items && items.length) {
      return items.filter(item => item.name.toLowerCase().includes(searchText) || item.email.toLowerCase().includes(searchText));
    }
    return [];
  }

}
