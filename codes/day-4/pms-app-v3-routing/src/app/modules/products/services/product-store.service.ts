import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductStoreService {
    productStore = signal<Product | undefined>(undefined)
}