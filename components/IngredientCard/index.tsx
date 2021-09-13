import { ReactNode } from 'react';
import { Ingredient } from 'typings/Ingredient';

import { Container } from './styles';

interface IngredientCardProps {
  ingredient: Ingredient
}

export function IngredientCard({ ingredient }: IngredientCardProps) {

  const { name, unit, quantity } = ingredient;

  return (
    <Container>
      <div>{ `${quantity} ${unit}` }</div>
      <div>{name}</div>
    </Container>
  );
};
