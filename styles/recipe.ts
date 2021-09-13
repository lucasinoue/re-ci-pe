import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1.5rem;


  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;



  }

  > section {
    flex: 1;
    margin-left: 1rem;
  }

  h1 {
    margin-top: 0.6rem;
  }

  /* @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

`