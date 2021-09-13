import { Ingredient } from 'typings/Ingredient';
import { Recipe } from 'typings/Recipe';
import uuid from 'uuid-v4';

const test: Ingredient[] = [
  {
    id: uuid(),
    name: 'Sugar',
    quantity: 300,
    unit: 'g'
  },
  {
    id: uuid(),
    name: 'Egg',
    quantity: 50,
    unit: 'g'
  }
];

const petitGateau: Ingredient[] = [
  {
    id: uuid(),
    name: 'Manteiga',
    quantity: 250,
    unit: 'g'
  },
  {
    id: uuid(),
    name: 'Chocolate meio amargo',
    quantity: 300,
    unit: 'g'
  },
  {
    id: uuid(),
    name: 'Gema',
    quantity: 90,
    unit: 'g'
  },
  {
    id: uuid(),
    name: 'Ovo',
    quantity: 250,
    unit: 'g'
  },
  {
    id: uuid(),
    name: 'Açucar',
    quantity: 170,
    unit: 'g'
  },
  {
    id: uuid(),
    name: 'Farinha de trigo',
    quantity: 100,
    unit: 'g'
  },
]

export const recipes: Recipe[] = [
  {
    id: 10,
    name: 'Petit Gateau',
    ingredients: petitGateau,
    servings: 6,
  },
  {
    id: 11,
    name: 'Test',
    ingredients: test,
    servings: 12,
  }
] 
