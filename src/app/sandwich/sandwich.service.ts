import { Injectable } from '@angular/core';
import { Sandwich } from './sandwich';

@Injectable()
export class SandwichService {

  constructor() {}

  private sandwiches: Array<Sandwich> = [
    {
      id: 1,
      rating: 3,
      stats: {},
      calorie: 460,
      image: '/assets/sandwiches/sandwich-1.jpg',
      title: 'Rednecker',
      description: 'We will make Murica great again!',
      ingredients: []
    },{
      id: 2,
      rating: 5,
      stats: {},
      calorie: 620,
      image: '/assets/sandwiches/sandwich-2.jpg',
      title: 'Caviar Sandwich',
      description: 'We will make Murica great again!',
      ingredients: []
    },{
      id: 3,
      rating: 2.5,
      stats: {
        cost: 3,
        taste: 4,
        satiety: 4
      },
      calorie: 690,
      image: '/assets/sandwiches/sandwich-3.jpg',
      title: 'Borderlands',
      description: 'We will make Murica great again!',
      ingredients: [{
        type: 'bread',
        mode: 'white',
        name: 'white bread'
      },{
        type: 'vegetable',
        mode: 'carrot',
        name: 'carrot'
      },{
        type: '',
        mode: 'pate',
        name: 'pate'
      },{
        type: '',
        mode: 'salad',
        name: 'salad'
      },{
        type: '',
        mode: 'arugua',
        name: 'arugua',
      },{
        type: 'vegetables',
        mode: 'corn',
        name: 'corn'
      }]
    },{
      id: 4,
      rating: 2,
      stats: {},
      calorie: 548,
      image: '/assets/sandwiches/sandwich-4.jpg',
      title: 'Roastbeeffo',
      description: 'We will make Murica great again!',
      ingredients: []
    },{
      id: 5,
      rating: 4.5,
      stats: {},
      calorie: 678,
      image: '/assets/sandwiches/sandwich-5.jpg',
      title: 'Shrimp sandwich',
      description: 'We will make Murica great again!',
      ingredients: []
    },{
      id: 6,
      rating: 5,
      stats: {},
      calorie: 490,
      image: '/assets/sandwiches/sandwich-6.jpg',
      title: 'La baguette',
      description: 'We will make Murica great again!',
      ingredients: []
    }
  ];

  getSandwich(id: number): Sandwich {
    return this.sandwiches.find(item => item.id === id);
  }

  getSandwiches(): Array<Sandwich> {
    return this.sandwiches;
  }
}
