import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi'
import { Container } from './styles';

export function BackButton() {

  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <Container onClick={handleBack} title="Voltar">
      <BiArrowBack fontSize="1rem"/>
    </Container>
  );
}
