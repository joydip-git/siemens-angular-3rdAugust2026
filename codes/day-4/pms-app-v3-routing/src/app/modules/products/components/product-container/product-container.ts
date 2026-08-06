import { Component, signal } from '@angular/core';
import { FilterProduct } from "../filter-product/filter-product";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-product-container',
  imports: [FilterProduct, ProductList],
  templateUrl: './product-container.html',
  styleUrl: './product-container.css',
})
export class ProductContainer {
  filterData = signal('')
}
