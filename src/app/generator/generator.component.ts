import {Component, OnInit} from '@angular/core';
import { Sandwich } from '../sandwich/sandwich';
import { SandwichService } from '../sandwich/sandwich.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.styl']
})
export class GeneratorComponent implements OnInit {
  public ingredients: string[] = ['white bread', 'beef', 'carrot', 'cucumber', 'lettuce', 'pepper', 'arugua', 'corn'];
  public selectIngredients: string[] = [];
  availableSandwich: Array<Sandwich> = [];

  constructor(private sandwichService: SandwichService) { }

  getSandwich(): Array<Sandwich> {
    return this.sandwichService.getSandwiches();
  }

  ngOnInit(): void {
    this.availableSandwich = this.getSandwich();
  }

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
