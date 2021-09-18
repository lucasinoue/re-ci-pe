import { render, screen } from '@testing-library/react';

import { Table } from '.'

describe('testing table', () => {

  it('renders the recipe table correctly', () => {
    render(
      <Table data={[]} />
    )

    expect(screen.getByRole('table')).toBeInTheDocument();

  })

})