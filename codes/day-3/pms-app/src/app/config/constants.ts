import { InjectionToken } from "@angular/core";
import { ServiceContract } from "../modules/products/services/service-contract";

export const PRODUCT_SERVICE_TOKEN = new InjectionToken<ServiceContract>("PRODUCT_SERVICE_TOKEN")