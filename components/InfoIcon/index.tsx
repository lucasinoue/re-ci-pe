import { ReactNode } from 'react';
import { Container } from './styles';

interface InfoIconProps {
  icon: ReactNode;
  caption: string;
}

export function InfoIcon({ icon, caption }: InfoIconProps) {
  return (
    <Container>
      {icon}
      {caption}
    </Container>
  );
}

