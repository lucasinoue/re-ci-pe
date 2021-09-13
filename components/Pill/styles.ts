import styled from 'styled-components';
import { COLORS } from '@styles/colors'

export const Container = styled.span`
  border-radius: 1rem;
  background-color: ${ COLORS.gray[150] };
  color: ${ COLORS.gray[700] };
  font-weight: 700;
  height: 1rem;
  padding: 0.6rem 0.8rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`