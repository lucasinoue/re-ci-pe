import { Ingredient } from './Ingredient';

export type Recipe = {
  id: string;
  name: string;
  ingredients: Ingredient[];
  servings: number;
  category: 'Sobremesa' | 'Sopa'
}
