export type Ingredient = {
  id: string;
  name: string;
  quantity: number;
  unit: 'g' | 'gts' | 'un';
}