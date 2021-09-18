import { COLORS } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.table`
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid ${ COLORS.gray[700] };
  }

  thead, th {
    background-color: white;
  }

  th h1 {
    font-weight: bold;
    font-size: 1em;
    text-align: left;
    color: #185875;
  }

  td {
    font-weight: normal;
    font-size: 1em;
  }

  td, th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left:2%;  
  }

  tbody > tr > td:first-child {
    text-align: right;
  }

/* Background-color of the odd rows */
  tr:nth-child(odd) {
    background-color: #F5F5F5;
  }

  /* Background-color of the even rows */
  tr:nth-child(even) {
    background-color: white;
  }

  tr:hover {
    background-color: #FAFAFA;
  }

  @media (max-width: 800px) {
    td:nth-child(4),
    th:nth-child(4) { display: none; }
  }

  @media (max-width: 480px) {

    margin-top: 3rem;

    th {
      font-size: 0.8rem;
    }
  }

`;
