import { COLORS } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  border: none;
  transition: all ease .2s;
  color: ${ COLORS.gray[800] };

  &:hover {
    background: #F0f0f0;
  }

`;