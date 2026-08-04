import { Component, computed, input, InputSignal, signal, Signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { productRecords } from '../../data/product-records';
import { ProductFilterPipe } from "../../pipes/product-filter-pipe";

@Component({
  selector: 'app-product-list',
  imports: [ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: WritableSignal<Product[]> = signal(productRecords);
  filterText: InputSignal<string> = input<string>('', { alias: 'filterValue' })
  // products: Signal<Product[]> = computed(
  //   () => {
  //     if (this.filterText() && this.filterText() !== '') {
  //       return productRecords.filter(
  //         p => p.productName
  //           .toLocaleLowerCase()
  //           .includes(this.filterText().toLocaleLowerCase())
  //       )
  //     } else
  //       return productRecords
  //   }
  // )
}
