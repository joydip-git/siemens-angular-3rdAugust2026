import { inject, Injectable } from '@angular/core';
import { ServiceContract } from './service-contract';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { PRODUCT_API_URL } from '../../../config/constants';

@Injectable()
export class ProductService implements ServiceContract {
  private _http = inject(HttpClient)


  addProduct(p: Product): Observable<ApiResponse<Product[]>> {
    return this._http.post<ApiResponse<Product[]>>(PRODUCT_API_URL, p)
  }

  deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
    return this._http.delete<ApiResponse<Product[]>>(`${PRODUCT_API_URL}/${id}`)
  }

  getProductById(id: number): Observable<ApiResponse<Product>> {
    return this._http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
  }

  getProducts(): Observable<ApiResponse<Product[]>> {
    return this._http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
  }

  updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }
}
