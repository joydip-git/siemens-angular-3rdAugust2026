import { Component, inject, input, InputSignal, OnDestroy, OnInit, signal, , WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductFilterPipe } from "../../pipes/product-filter-pipe";
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { NoRecord } from '../../../shared/components/no-record/no-record';
import { Observable, Subscription } from 'rxjs';
import { Spinner } from "../../../shared/components/spinner/spinner";
import { ApiResponse } from '../../models/api-response';

@Component({
  selector: 'app-product-list',
  imports: [ProductFilterPipe, NoRecord, Spinner],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {
  message = 'no products found'
  products: WritableSignal<Product[]> = signal([]);
  errorInfo = signal('')
  isRequestOver = signal(false)
  filterText: InputSignal<string> = input<string>('', { alias: 'filterValue' })
  private fetchSubscription?: Subscription;
  private productSvc: ServiceContract = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)

  ngOnInit(): void {
    this.fetchProducts()
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
  private fetchProducts() {
    const obs: Observable<ApiResponse<Product[]>> = this.productSvc
      .getProducts();
    this.fetchSubscription =
      obs.subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.products.set(apiResponse.data)
            this.errorInfo.set('')
            this.isRequestOver.set(true)
          } else {
            this.products.set([])
            this.errorInfo.set(apiResponse.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.products.set([])
          this.errorInfo.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
