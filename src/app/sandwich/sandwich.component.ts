import { Component, OnInit } from '@angular/core';
import { SandwichService } from './sandwich.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Sandwich } from './sandwich';

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.styl']
})
export class SandwichComponent implements OnInit {

  private sandwich: Sandwich;

  private stats: Array<String>;

  constructor(private route: ActivatedRoute, private sandwichService: SandwichService) { }

  ngOnInit() {
    this.getSandwich();
  }

  getSandwich() {
    this.route.params.forEach((params: Params) => {
      this.sandwich = this.sandwichService.getSandwich(parseInt(params['id']));
      this.getStats();
    });
  }

  getStats() {
    this.stats = Object.keys(this.sandwich.stats);
  }
}
