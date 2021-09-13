import { COLORS } from '@styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-height: 4rem;
  border: 1px solid ${ COLORS.gray[150] };

  &:not(:first-child) {
    margin: 1rem 0;
  }

`;
