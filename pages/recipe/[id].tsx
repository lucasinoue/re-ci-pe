import { Pill } from '@components/Pill';

import { RiCake3Line } from 'react-icons/ri'
import { InfoIcon } from '../../components/InfoIcon';
import { Container } from '@styles/recipe';
import Table from '@components/Table';
import { GetServerSideProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { Recipe } from 'typings/Recipe';

type RecipeProps = {
  recipe: Recipe
}

function RecipeScreen({ recipe }: RecipeProps ) {
  return (
    <Container>
      <div>
        <Pill>Sobremesa</Pill>
        <h1>{recipe.name}</h1>

        <section>
          <InfoIcon caption={`${recipe.servings} porções`} icon={<RiCake3Line size="1.8rem"/>} />
        </section>
      </div>

      <section>
        <Table data={recipe.ingredients} />
      </section>

    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const { data } = await axios.get(`http://localhost:3000/api/recipes/${id}`);

  return {
    props: {
      recipe: data
    }
  }
}

export default RecipeScreen;
