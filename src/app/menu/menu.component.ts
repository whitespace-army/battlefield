import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {
  menuItems: Array<string> = ['Menu Item', 'Menu Item', 'Menu Item'];
  constructor() { }

  ngOnInit() {
  }

}
