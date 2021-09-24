import Head from 'next/head';
import Link from 'next/link';

import { Container } from '@styles/home';

import { Button } from '@components/Button';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetStaticProps } from 'next';
import axios from 'axios';
import { Recipe } from 'typings/Recipe';

type HomeProps = {
  recipes: Recipe[];
}

export default function Home({ recipes }: HomeProps) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Re-ci-pes!</title>
      </Head>
      <Container>
        <h1>Re-ci-pes!</h1>

        <main>
          {recipes.map(recipe => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`} passHref>
              <a><h3>{recipe.name}</h3></a>
            </Link>
          ))}
        </main>

      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/recipes')

  return {
    props: {
      recipes: data.recipes,
    }
  }
}
