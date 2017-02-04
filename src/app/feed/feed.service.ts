import { Injectable } from '@angular/core';
import { FeedItem } from './feed-item';

@Injectable()
export class FeedService {

  constructor() {}

  getFeed(): Array<FeedItem> {
    return [
      {
        id: 1,
        image: '/assets/sandwiches/sandwich-1.jpg',
        title: 'Rednecker',
        description: 'We will make Murica great again!'
      },{
        id: 2,
        image: '/assets/sandwiches/sandwich-2.jpg',
        title: 'Caviar Sandwich',
        description: 'We will make Murica great again!'
      },{
        id: 3,
        image: '/assets/sandwiches/sandwich-3.jpg',
        title: 'Borderlands',
        description: 'We will make Murica great again!'
      },{
        id: 4,
        image: '/assets/sandwiches/sandwich-4.jpg',
        title: 'Roastbeeffo',
        description: 'We will make Murica great again!'
      },{
        id: 5,
        image: '/assets/sandwiches/sandwich-5.jpg',
        title: 'Shrimp sandwich',
        description: 'We will make Murica great again!'
      },{
        id: 5,
        image: '/assets/sandwiches/sandwich-6.jpg',
        title: 'La baguette',
        description: 'We will make Murica great again!'
      }
    ];
  }

}
