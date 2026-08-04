import { Component, output, OutputEmitterRef, signal } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  imports: [],
  templateUrl: './filter-product.html',
  styleUrl: './filter-product.css',
})
export class FilterProduct {
  filterValue = signal('')
  filterValueChanged: OutputEmitterRef<string> = output<string>({ alias: 'filterValueUpdated' })

  updateFilterValue(value: string) {
    this.filterValue.set(value)
    this.filterValueChanged.emit(value)
  }
}
