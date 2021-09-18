import { render, screen } from '@testing-library/react';
import { BackButton } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        back: () => null,
      }
    }
  }
})

describe('Test back button', () => {
  it('button renders correctly', () => {
    render(
      <BackButton />
    );
  
    expect(screen.getByTestId('arrow-back-icon')).toBeInTheDocument()
  })
})
