import { Provider } from "@angular/core";
import { PRODUCT_SERVICE_TOKEN } from "./constants";
import { ProductService } from "../modules/products/services/product.service";

export const provideProductService = (): Provider => {
    return {
        provide: PRODUCT_SERVICE_TOKEN,
        useClass: ProductService
    }
}