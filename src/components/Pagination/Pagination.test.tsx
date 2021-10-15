import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('Componente renderiza', () => {
    // given
    // when
    render(<Pagination totalCount={180} />);
    // then
    expect(screen.queryByRole('group')).toBeInTheDocument();
  });
});
