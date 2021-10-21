import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Input from './Input';

describe('Input Component', () => {
  it('Deve renderizar o component com sucesso', () => {
    // given

    // when
    render(<Input />);

    // then

    expect(screen.queryByRole('group')).toBeInTheDocument();
  });
});
