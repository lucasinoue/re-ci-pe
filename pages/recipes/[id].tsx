import { Pill } from '@components/Pill';

import { RiCake3Line } from 'react-icons/ri'
import { InfoIcon } from '@components/InfoIcon';
import { BackButton } from '@components/BackButton';
import { Container } from '@styles/recipe';
import { Table } from '@components/Table';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Recipe } from 'typings/Recipe';
import { recipes } from  '../../data/recipes'

type RecipeProps = {
  recipe: Recipe
}

function RecipeScreen({ recipe }: RecipeProps ) {
  return (
    <Container>
      <div>
        <BackButton />
        <Pill>{recipe.category}</Pill>
        <h1 data-cy="recipe-name">{recipe.name}</h1>

        <section>
          <InfoIcon 
            caption={`${recipe.servings} porções`} 
            icon={<RiCake3Line size="1.8rem"/>} 
          />
        </section>

      </div>

      <section>
        <Table data={recipe.ingredients} />
      </section>

    </Container>
  );
}


export const getStaticPaths: GetStaticPaths = () => {
  const data = [...recipes];

  return {
    paths: data.map(el => ({ params: { id: el.id.toString() } })),
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const recipe = recipes.find(el => el.id === id);

  return {
    props: {
      recipe
    }
  }
}

export default RecipeScreen;
