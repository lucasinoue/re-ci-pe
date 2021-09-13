import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }


  body {
    background: white;
    color: ${ COLORS.gray[850] };
  }

  body, input, textarea, select, button {
    font: 400 1rem "Inter", sans-serif
  } 

  h1, h2, h3, h4, h5, h6 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`