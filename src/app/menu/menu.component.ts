import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../interfaces/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dish: Dish;

  dishes: Dish[] = [
    { 
      name: "Arroz con pollo",
      ingredients: [
        { name: "Pollo", qty: 1 },
        { name: "Culantro", qty: 1 },
        { name: "Espinaca", qty: 1 },
        { name: "Arbeja", qty: 1 },
      ]
    },
    { 
     name: "Papa a la huancaina",
     ingredients: [
       { name: "Papa", qty: 2 },
       { name: "Queso", qty: 1 },
       { name: "Galleta", qty: 1 },
       { name: "Lechuga", qty: 1 },
     ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
