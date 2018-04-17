import {Injectable} from '@angular/core';
import {Sandwich} from './sandwich';

@Injectable()
export class SandwichService {

    private sandwiches: Array<Sandwich> = [
        {
            id: 1,
            rating: 3,
            stats: {},
            calorie: 460,
            image: '/assets/img/sandwiches/sandwich-1.jpg',
            title: 'Rednecker',
            description: 'We will make Murica great again!',
            ingredients: ['white bread', 'tomato', 'pepper', 'cheese', 'arugua']
        }, {
            id: 2,
            rating: 5,
            stats: {},
            calorie: 620,
            image: '/assets/img/sandwiches/sandwich-2.jpg',
            title: 'Caviar Sandwich',
            description: 'We will make Murica great again!',
            ingredients: ['white bread', 'salmon caviar']
        }, {
            id: 3,
            rating: 2.5,
            stats: {
                cost: 3,
                taste: 4,
                satiety: 4
            },
            calorie: 690,
            image: '/assets/img/sandwiches/sandwich-3.jpg',
            title: 'Borderlands',
            description: 'We will make Murica great again!',
            ingredients: ['white bread', 'carrot', 'pate', 'salad', 'arugua', 'corn']
        }, {
            id: 4,
            rating: 2,
            stats: {},
            calorie: 548,
            image: '/assets/img/sandwiches/sandwich-4.jpg',
            title: 'Roastbeeffo',
            description: 'We will make Murica great again!',
            ingredients: ['white bread', 'beef', 'carrot', 'cucumber', 'lettuce', 'pepper']
        }, {
            id: 5,
            rating: 4.5,
            stats: {},
            calorie: 678,
            image: '/assets/img/sandwiches/sandwich-5.jpg',
            title: 'Shrimp sandwich',
            description: 'We will make Murica great again!',
            ingredients: ['white bread', 'shrimp', 'cabbage', 'egg']
        }, {
            id: 6,
            rating: 5,
            stats: {},
            calorie: 490,
            image: '/assets/img/sandwiches/sandwich-6.jpg',
            title: 'La baguette',
            description: 'We will make Murica great again!',
            ingredients: ['baguette', 'smoked sausage']
        }
    ];

    constructor() {
    }

    getSandwich(id: number): Sandwich {
        return this.sandwiches.find(item => item.id === id);
    }

    getSandwiches(): Array<Sandwich> {
        return this.sandwiches;
    }
}
