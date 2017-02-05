import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { FeedItem } from './feed-item';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.styl']
})
export class FeedComponent implements OnInit {

  constructor(private feedService: FeedService) {}

  filterValue: string;

  searchValue: string;

  filters: Array<any> = [{
    name: 'ID',
    value: 'id'
  },{
    name: 'Title',
    value: 'title'
  }];

  feed: Array<FeedItem> = [];

  getFeed(): Array<FeedItem> {
     return this.feedService.getFeed();
  }

  ngOnInit(): void {
    this.feed = this.getFeed();
  }
}
