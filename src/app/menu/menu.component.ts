import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {
  links: Array<any> = [
    {
      href: '',
      title: 'Main Page'
    }, {
      href: '/cheese/',
      title: 'Sandwiches with cheese'
    }, {
      href: '/meat/',
      title: 'Sandwiches with meat'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
