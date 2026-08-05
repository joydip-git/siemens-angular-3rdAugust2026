import { Component, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-no-record',
  imports: [],
  templateUrl: './no-record.html',
  styleUrl: './no-record.css',
})
export class NoRecord implements OnInit, OnChanges, OnDestroy {
  message = input<string>('', { alias: 'noRecordMessage' })

  constructor() {
    console.log('no record created');
  }

  ngOnInit(): void {
    console.log('init happened');
  }
  ngOnChanges(changes: SimpleChanges): void {    
    console.log('changes happened');
    console.log(this.message());
  }
  ngOnDestroy(): void {
    console.log('destroyed...');
  }
}
