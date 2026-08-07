import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product';
import { Spinner } from "../../../shared/components/spinner/spinner";
import { NoRecord } from "../../../shared/components/no-record/no-record";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Star } from "../../../shared/components/star/star";
import { Subscription } from 'rxjs';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { ProductStoreService } from '../../services/product-store.service';

@Component({
  selector: 'app-product-detail',
  imports: [Spinner, NoRecord, RouterLink, CurrencyPipe, Star, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit, OnDestroy {

  product = signal<Product | undefined>(undefined);
  isRequestOver = signal(false)
  errorMessage = signal('')

  private productSvc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  private currentRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private productStoreSvc = inject(ProductStoreService)
  private fetchSubscription?: Subscription;

  ngOnInit(): void {
    const id = Number(this.currentRoute.snapshot.params["id"])
    this.fetchProductById(id)
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }

  goToEdit() {
    //saving the product to be shared with EditProduct component
    this.productStoreSvc.productStore.set(this.product())

    //redirecting to EditProduct component
    this.router.navigate(['/products/edit'], {
      queryParams: {
        id: this.product()?.productId
      }
    })
  }
  private fetchProductById(id: number) {
    this.fetchSubscription = this.productSvc
      .getProductById(id)
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.product.set(apiResponse.data)
            this.errorMessage.set('')
            this.isRequestOver.set(true)
          } else {
            this.product.set(undefined)
            this.errorMessage.set(apiResponse.message)
            this.isRequestOver.set(true)
          }
        },
        error: (err) => {
          this.product.set(undefined)
          this.errorMessage.set(err.message)
          this.isRequestOver.set(true)
        }
      })
  }
}
