import Head from 'next/head';
import Link from 'next/link';

import { Container } from '@styles/home';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Recipe } from 'typings/Recipe';

import { recipes } from '../data/recipes'; 

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

export const getStaticProps: GetStaticProps = () => {



  return {
    props: {
      recipes,
    }
  }
}
