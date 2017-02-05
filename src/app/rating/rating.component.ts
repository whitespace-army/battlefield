import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.styl']
})
export class RatingComponent implements OnInit {
  private stars: Array<any>;
  @Input() max: number = 5;
  @Input() set rate(rate: number) {
    this.stars = Array(+this.max).fill('').map((i, index) => {
      return rate >= index + 1 ? '' : rate >= index + 0.5 ? '_half' : '_border';
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
