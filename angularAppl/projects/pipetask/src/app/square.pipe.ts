import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: any, search: any): any {
    if (search=="") {
      return value
    }
   const newString = value.filter((item: any)=>
    (item.name.includes(search) || item.mob.toString().includes(search))
   )
   return newString
  }

}
