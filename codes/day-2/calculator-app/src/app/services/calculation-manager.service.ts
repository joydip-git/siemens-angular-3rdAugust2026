import { inject, Inject, Injectable } from "@angular/core";
import { ServiceContract } from "./calculation.service"
import { SERVICE_TOKEN } from "../config/constants";

//@Injectable()
// @Injectable({
//     providedIn:'root'
// })
//or
//@Service()
//providers:[CalculationManagerService]

export class CalculationManagerService {
    private calcSvc: ServiceContract = inject<ServiceContract>(SERVICE_TOKEN);
    //private calcSvc: ServiceContract;
    // constructor(@Inject(SERVICE_TOKEN) svc: ServiceContract) {
    //     this.calcSvc = svc
    // }
    performCalculation(choice: number, a: number, b: number): number | undefined {
        switch (choice) {
            case 1:
                return this.calcSvc.add(a, b)

            case 2:
                return this.calcSvc.subtract(a, b)
            case 3:
                return this.calcSvc.multiply(a, b)
            case 4:
                return this.calcSvc.divide(a, b)

            default:
                return undefined
        }
    }
}