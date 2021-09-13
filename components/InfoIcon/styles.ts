import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 6rem;
  color: ${ COLORS.gray[300] };

  svg {
    color: ${ COLORS.primary };
    margin-right: .4rem
  }
`