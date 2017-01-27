import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { FeedItem } from './feed-item';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.styl']
})
export class FeedComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  feed: Array<FeedItem> = [];

  getFeed(): Array<FeedItem> {
     return this.feedService.getFeed();
  }

  ngOnInit(): void {
    this.feed = this.getFeed();
  }
}
