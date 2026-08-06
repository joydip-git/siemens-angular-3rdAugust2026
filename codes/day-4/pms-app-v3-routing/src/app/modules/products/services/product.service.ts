import { inject, Injectable, signal } from '@angular/core';
import { ServiceContract } from './service-contract';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { PRODUCT_API_URL } from '../../../config/constants';

@Injectable()
export class ProductService implements ServiceContract {
  private _http = inject(HttpClient)
  
  getProducts(): Observable<ApiResponse<Product[]>> {
    return this._http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
  }
}
