import { Injectable } from '@angular/core';
import { ServiceContract } from './service-contract';
import { Product } from '../models/product';
import { productRecords } from '../data/product-records';

@Injectable()
export class ProductService implements ServiceContract {
  getProducts(): Product[] {
    return [...productRecords]
  }
}
