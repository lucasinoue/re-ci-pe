import styled from 'styled-components';
import { COLORS } from './colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Inter', sans-serif;
    font-size: 4.5rem;
    color: ${ COLORS.gray[300] }
  }

  > main {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;

    > h3 {
      font-weight: 300;
      color: ${ COLORS.primary }
    }
  }

`