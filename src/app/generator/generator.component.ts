import {Component, Input, OnInit} from '@angular/core';
import {Sandwich} from '../sandwich/sandwich';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.styl']
})
export class GeneratorComponent implements OnInit {
  public ingredients: string[] = ['white bread', 'beef', 'carrot', 'cucumber', 'lettuce', 'pepper', 'arugua', 'corn'];
  public selectIngredients: string[] = [];
  constructor() { }

  ngOnInit() { }

  public toggleIngredient(ingredient: string): void {
    if (!this.selectIngredients.includes(ingredient)) {
      this.selectIngredients.push(ingredient);
    } else {
      this.selectIngredients = this.selectIngredients.filter(function(value) {
        return value !== ingredient;
      });
    }
  }
}
