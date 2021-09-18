import { HTMLProps, ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps & HTMLProps<HTMLButtonElement>) {
  return (
    <Container>
      {children}
    </Container>
  );
};
