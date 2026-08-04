import { ClassProvider, InjectionToken, Provider } from "@angular/core"
import { CalculationService, ServiceContract } from "../services/calculation.service"

//export const SERVICE_TOKEN = 'SERVICE_TOKEN'
export const SERVICE_TOKEN = new InjectionToken<ServiceContract>('SERVICE_TOKEN')

export const provideCalculationService = (): ClassProvider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: CalculationService
    }
}