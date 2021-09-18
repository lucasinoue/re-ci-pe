import { Ingredient } from './Ingredient';

export type Recipe = {
  id: number;
  name: string;
  ingredients: Ingredient[];
  servings: number;
  category: 'Sobremesa' | 'Sopa'
}
