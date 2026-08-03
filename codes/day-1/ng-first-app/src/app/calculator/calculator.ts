import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  calculationChoice = signal(0)
  // first = signal(0)
  // second = signal(0)
  first = '0'
  second = '0'
  result = signal(0)

  // updateSecond(val: string) {
  //   this.second = val
  // }
  calculate() {
    console.log(this.first, this.second);
    
    switch (this.calculationChoice()) {
      case 1:
        //this.result.set(this.first() + this.second())
        this.result.set(Number(this.first) + Number(this.second))
        break;

      default:
        break;
    }
  }
}
