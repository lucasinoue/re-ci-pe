import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@styles/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Re-ci-pes!</title>
      </Head>
      <Container>
        <h1>Re-ci-pe</h1>

        <main>
          <h3>Últimas receitas</h3>
        
          <Link href="/recipe/10">Receita A</Link>
          <Link href="/recipe/11">Receita B</Link>
          <Link href="/recipe/12">Receita C</Link>

        </main>

      </Container>
    </>
  )
}
