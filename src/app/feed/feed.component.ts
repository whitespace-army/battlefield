import { Component, OnInit } from '@angular/core';
import { SandwichService } from '../sandwich/sandwich.service';
import { Sandwich } from '../sandwich/sandwich';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.styl']
})
export class FeedComponent implements OnInit {
  private filterValue: string;
  private searchValue: string;

  private filters: Array<any> = [{
    name: 'ID',
    value: 'id'
  }, {
    name: 'Title',
    value: 'title'
  }, {
    name: 'Rate',
    value: 'rating'
  }];

  feed: Array<Sandwich> = [];

  constructor(private sandwichService: SandwichService) {}

  getSandwich(): Array<Sandwich> {
     return this.sandwichService.getSandwiches();
  }

  ngOnInit(): void {
    this.feed = this.getSandwich();
  }
}
