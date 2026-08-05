import { Component, inject, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculationService, ServiceContract } from '../services/calculation.service';
import { SERVICE_TOKEN } from '../config/constants';
import { CalculationManagerService } from '../services/calculation-manager.service';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  // providers: [
  //   {
  //     provide: CalculationService,
  //     useClass: CalculationService
  //   }
  // ]
})
export class Calculator {
  calculationChoice = signal(0)
  first = signal(0)
  second = signal(0)
  result = signal(0)

  //1. token and the service class name are same
  //private svc: CalculationService;
  // constructor(svc: CalculationService) {
  //   // this.svc = new CalculationService()
  //   this.svc = svc
  // }
  //or
  //private svc=inject(CalculationService)

  //2. custom token 
  //private svc: ServiceContract;
  // constructor(@Inject(SERVICE_TOKEN) svc: ServiceContract) {
  //   this.svc = svc
  // }
  //or
  //private svc: ServiceContract = inject<ServiceContract>(SERVICE_TOKEN);
  private svc: CalculationManagerService;
  constructor(svc: CalculationManagerService) {
    this.svc = svc
  }
  
  calculate() {
    const res = this.svc.performCalculation(this.calculationChoice(), this.first(), this.second())
    if (res)
      this.result.set(res)
  }
}
