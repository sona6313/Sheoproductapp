import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(items: any[], searchItem: string): any[] {
    const data =items
      if(!items || !searchItem){
        return items;
      }

      searchItem = searchItem.toLowerCase();

      return items.filter(item =>{

        return item.title.toLowerCase().includes(searchItem);
      });
      items.push(data)
  }

}
