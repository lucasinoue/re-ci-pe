import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1.5rem;

  @media(max-width: 480px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 20%;
  }

  > section {
    flex: 1;
    margin-left: 1rem;
  }

  h1 {
    margin-top: 0.6rem;
  }

`