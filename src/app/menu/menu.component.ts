import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {
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
