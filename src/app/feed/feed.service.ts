import { Injectable } from '@angular/core';
import { FeedItem } from './feed-item';

@Injectable()
export class FeedService {

  constructor() {}

  getFeed(): Array<FeedItem> {
    return [
      {
        id: 1,
        image: 'http://cdn.edgecast.steamstatic.com/steam/apps/292030/header.jpg?t=1479919850',
        title: 'The Witcher 3: Wild Hunt',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 2,
        image: 'http://cdn.edgecast.steamstatic.com/steam/apps/385730/header.jpg?t=1459871443',
        title: 'WWE 2K16',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 3,
        image: 'http://cdn.edgecast.steamstatic.com/steam/apps/261640/header.jpg?t=1485219157',
        title: 'Borderlands: The Pre-Sequel',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 4,
        image: 'http://cdn.edgecast.steamstatic.com/steam/apps/252950/header.jpg?t=1481660452',
        title: 'Rocket League',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      }
    ];
  }

}
