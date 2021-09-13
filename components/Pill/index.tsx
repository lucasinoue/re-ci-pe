import { ReactNode } from 'react';
import { Container } from './styles';

interface PillProps {
  children: ReactNode;
}

export function Pill({ children }: PillProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
