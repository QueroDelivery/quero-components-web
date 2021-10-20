import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';

import Loader from './Loader';
import { colors } from '../../styles/colors';

describe('Loader Component', () => {
  it('Componente deve renderizar', () => {
    // given

    // when

    render(<Loader />);
    // then

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('Deve trocar a cor do loading quando passadas as props color e outsideColor', () => {
    // given
    const color = colors.brand30;
    const outsideColor = colors.brandLight;
    // when

    render(<Loader color={color} outsideColor={outsideColor} />);
    // then
    const loader = screen.getByRole('progressbar');

    expect(loader).toHaveStyle(`border-color: ${outsideColor}`);
    expect(loader).toHaveStyle(`border-top-color: ${color}`);
  });
});
