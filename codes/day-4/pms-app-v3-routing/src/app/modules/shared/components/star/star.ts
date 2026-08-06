import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.css',
})
export class Star implements OnChanges {
  @Input() ratingValue: number | undefined = 0
  outerDivWidth = 100
  ngOnChanges(changes: SimpleChanges): void {
    if (this.ratingValue)
      this.outerDivWidth = this.ratingValue * 15.75;
  }
}
