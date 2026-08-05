import { Component, computed, inject, input, InputSignal, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { productRecords } from '../../data/product-records';
import { ProductFilterPipe } from "../../pipes/product-filter-pipe";
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { NoRecord } from '../../../shared/components/no-record/no-record';

@Component({
  selector: 'app-product-list',
  imports: [ProductFilterPipe, NoRecord],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  message = 'no products found'
  products: WritableSignal<Product[]> = signal([]);
  filterText: InputSignal<string> = input<string>('', { alias: 'filterValue' })
  private productSvc: ServiceContract = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)

  ngOnInit(): void {
    this.products.set(this.productSvc.getProducts())
  }

  // toggle() {
  //   if (this.products().length !== 0) {
  //     this.products.set([])
  //   } else {
  //     this.products.set(this.productSvc.getProducts())
  //   }
  // }
}
