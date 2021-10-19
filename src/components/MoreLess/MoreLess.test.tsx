import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';

import MoreLess from './MoreLess';

describe('MoreLess Component', () => {
  it('Componente deve renderizar', () => {
    // given
    const onChangeMock = jest.fn();
    // when

    render(<MoreLess onChange={onChangeMock} value={0} />);
    // then

    expect(screen.queryByRole('group')).toBeInTheDocument();
  });
});
