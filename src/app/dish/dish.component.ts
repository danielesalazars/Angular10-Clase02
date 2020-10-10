import { Component, Input, OnInit } from '@angular/core';
import * as dishes from './../../assets/dishes.json';
import { Dish } from '@app/models';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss'],
})
export class DishComponent implements OnInit {
  _name: string;
  _spicy: number;
  //private _name: string;
  //private _ingredients: Array<Dish>;
  //private _totalIngredient: number;

  @Input() set dish(value: Dish) {
    this._name = value.name;
    this._spicy = value.spicy;
    //this._ingredients = value.ingredients;
    //this._totalIngredient = value.ingredients.length;
  }

  constructor() {
    // console.log(this._name);
  }

  ngOnInit(): void {}

  get name(): string {
    return this._name;
  }

  get spicy(): number {
    return this._spicy;
  }

  /*get ingredients(): Array<Ingredient> {
    return this._ingredients;
  }

  get totalIngredient(): number {
    return this._totalIngredient;
  }*/
}
