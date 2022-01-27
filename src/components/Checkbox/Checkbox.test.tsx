import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { colors } from '../../styles/colors';

import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('Component renderiza', () => {
    // given

    // when

    render(<Checkbox />);

    // then

    expect(screen.queryByRole('group')).toBeInTheDocument();
  });

  it('Deve desabilitar o checkbox, quando disabled for true', () => {
    // given

    const onChangeMock = jest.fn();

    // when

    render(<Checkbox disabled onChange={onChangeMock} value="oi" />);

    // then

    const checkbox = screen.getByTestId('checkbox');
    const container = screen.getByRole('group');

    expect(checkbox).toBeDisabled();

    userEvent.click(checkbox);
    userEvent.click(container);
    expect(onChangeMock).not.toBeCalled();
  });

  it('Deve mudar a aparência quando estiver checked', () => {
    // given

    const labelText = 'this is a label';

    // when

    render(<Checkbox checked label={labelText} onChange={() => {}} />);

    // then

    const icon = screen.getByLabelText('check');

    expect(icon).toHaveStyle(`color: ${colors.white}`);
  });
});
