import { Component, input, signal, Signal, WritableSignal } from '@angular/core';
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
  filterText = input<string>('', { alias: 'filterValue' })
}
