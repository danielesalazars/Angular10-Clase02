import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish';
import { Ingredient } from '../interfaces/ingredient';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  private _name: string;
  private _ingredients: Array<Ingredient>;
  private _totalIngredient: number;

  @Input() set dish(value: Dish){
    this._name = value.name;
    this._ingredients = value.ingredients;
    this._totalIngredient = value.ingredients.length;
  };

  constructor() { }

  ngOnInit(): void {
  }

  get name(): string{
    return this._name;
  }

  get ingredients(): Array<Ingredient>{
    return this._ingredients;
  }
  
  get totalIngredient(): number{
    return this._totalIngredient;
  }
  
}
