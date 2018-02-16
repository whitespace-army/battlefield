import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sandwich-card',
  templateUrl: './sandwich-card.component.html',
  styleUrls: ['./sandwich-card.component.styl']
})
export class SandwichCardComponent {
  @Input() sandwich: any;
}
