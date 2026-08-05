import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], ...args: string[]): Product[] {
    if (args[0] && args[0] !== '') {
      return value.filter(
        p => p.productName
          .toLocaleLowerCase()
          .includes(args[0].toLocaleLowerCase())
      )
    } else
      return value
  }
}
