import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.styl']
})
export class FeaturesComponent implements OnInit {
  menu: Array<any> = [
    {
      image: 'assets/menu/owl.jpg',
      title: 'Sandwich Constructor',
      description: 'Create a prefect sandwich!'
    }, {
      image: 'assets/menu/bird.jpg',
      title: 'Sandwich Generator',
      description: 'Construct a sandwich from food you already have!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
