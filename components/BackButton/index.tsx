import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi'
import { Container } from './styles';

export function BackButton() {

  const { back } = useRouter();

  const handleBack = () => {
    back();
  }

  return (
    <Container onClick={handleBack} title="Voltar" data-cy="back-to-route" >
      <BiArrowBack fontSize="1rem" data-testid="arrow-back-icon" />
    </Container>
  );
}
