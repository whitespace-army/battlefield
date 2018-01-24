import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.styl']
})
export class IngredientsComponent implements OnInit {
  @Input() ingredients: string[];
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public addIngredient(ingredient: string): void {
    this.selected.emit(ingredient);
  }
}
