import { Component, OnInit } from '@angular/core';
import { FeedItem } from './feed-item';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.styl']
})
export class FeedComponent implements OnInit {
  feed: Array<FeedItem> = [{
    image: '/assets/logo.png',
    title: 'Trump for The Best',
    description: 'We will make Murica great again!',
    date: '20.01.2017'
  }];
  constructor() { }

  ngOnInit() {
  }

}
