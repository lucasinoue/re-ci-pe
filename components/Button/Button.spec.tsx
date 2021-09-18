import { render, screen } from '@testing-library/react'
import { Button } from '.';

describe('testing button', () => {
  it('button renders correctly', () => {
    render(<Button>Test!</Button>)

    expect(screen.getByRole('button', { name: /Test/ })).toBeInTheDocument();
  })

})
