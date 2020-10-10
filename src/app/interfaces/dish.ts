import { Ingredient } from './ingredient';

export interface Dish {
  id: number;
  name: string;
  ingredients: Ingredient[];
  rating: number;
  category: string;
  price: number;
  stock: boolean;
  inventoryStatus: string;
  image: string;
}
