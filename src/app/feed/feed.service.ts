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
      },{
        id: 5,
        image: 'http://cdn.akamai.steamstatic.com/steam/apps/236390/header.jpg?t=1485264405',
        title: 'War Thunder',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 6,
        image: 'http://cdn.akamai.steamstatic.com/steam/apps/210970/header.jpg?t=1478021777',
        title: 'The Witness',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 7,
        image: 'http://cdn.akamai.steamstatic.com/steam/apps/261550/header.jpg?t=1476892962',
        title: 'Mount & Blade II: Bannerlord',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 8,
        image: 'http://cdn.akamai.steamstatic.com/steam/apps/314790/header.jpg?t=1484574482',
        title: 'Silence',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      },{
        id: 9,
        image: 'http://cdn.akamai.steamstatic.com/steam/apps/456670/header.jpg?t=1482127108',
        title: 'Hand of Fate 2',
        description: 'We will make Murica great again!',
        date: '20.01.2017'
      }
    ];
  }

}
