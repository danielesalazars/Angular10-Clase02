import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '@app/models';
import * as dishesJSON from './../../assets/dishes.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  //dishes: Array<Dish>;
  dishes: Dish[];

  constructor() {
    this.dishes = dishesJSON.dishes;
    console.log(this.dishes);
  }

  ngOnInit(): void {}
}
