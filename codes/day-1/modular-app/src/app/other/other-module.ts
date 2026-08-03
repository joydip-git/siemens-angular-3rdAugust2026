import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculator } from './calculator/calculator';



@NgModule({
  declarations: [Calculator],
  imports: [CommonModule],
  exports: [Calculator]
})
export class OtherModule { }
