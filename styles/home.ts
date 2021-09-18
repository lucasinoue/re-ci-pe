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
    font-size: 6rem;
    background: #E55D87;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #5FC3E4, #E55D87);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #5FC3E4, #E55D87); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > main {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;

    > a:hover {
      text-decoration: underline;
    }

    > a > h3 {
      font-weight: 800;
      color: ${ COLORS.gray[800] };
      margin: 1rem 0rem;
    }
  }

`