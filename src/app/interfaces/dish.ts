import { Ingredient } from './ingredient';

export interface Dish {
  id: number;
  name: string;
  ingredients: Ingredient[];
  rating: number;
  category: string;
  price: number;
  stock: boolean;
  spicy: number;
  inventoryStatus: string;
  image: string;
}
