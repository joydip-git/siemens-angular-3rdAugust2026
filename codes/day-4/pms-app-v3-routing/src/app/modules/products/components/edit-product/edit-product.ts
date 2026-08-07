import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductStoreService } from '../../services/product-store.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit, OnDestroy {
  private currentRoute = inject(ActivatedRoute)
  private productSvc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  private formBuilder = inject(FormBuilder)
  private productStoreSvc = inject(ProductStoreService)
  private router = inject(Router)
  private updateSub?: Subscription;

  productForm?: FormGroup;
  productInfo?: Product;

  ngOnInit(): void {
    const queryParams = this.currentRoute.snapshot.queryParams;
    const id = Number(queryParams["id"])
    //this.fetchSub = this.productSvc.getProductById(id).subscribe()
    this.productInfo = this.productStoreSvc.productStore()
    if (this.productInfo) {
      this.productForm = this.formBuilder.group({
        productId: [this.productInfo.productId],
        productName: [this.productInfo.productName],
        productCode: [this.productInfo.productCode],
        description: [this.productInfo.description],
        releaseDate: [this.productInfo.releaseDate],
        price: [this.productInfo.price],
        starRating: [this.productInfo.starRating],
        imageUrl: [this.productInfo.imageUrl]
      })
    }
  }

  ngOnDestroy(): void {
    this.updateSub?.unsubscribe()
  }

  update() {
    if (window.confirm('update?')) {
      const p = this.productForm?.value as Product;
      this.updateSub = this.productSvc.updateProduct(p.productId, p).subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            window.alert('updated')
          } else {
            window.alert('could not update')
          }
        },
        error: (err) => {
          window.alert(err.message)
        },
        complete: () => {
          this.router.navigate(['/products'])
        }
      })
    }
  }
}
