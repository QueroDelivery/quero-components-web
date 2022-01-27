import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Radio from './Radio';

describe('Radio Component', () => {
  it('Renderizou corretamente', () => {
    // given
    const onChangeMock = jest.fn();
    const labelText = 'texto';

    // when
    render(<Radio onChange={onChangeMock} label={labelText} />);
    // then
    expect(screen.queryByRole('radio')).toBeInTheDocument();
    expect(screen.queryByText(labelText)).toBeInTheDocument();
  });

  it('onClick funciona ao clicar no radio', () => {
    // given
    const onChangeMock = jest.fn();
    // when
    render(<Radio onChange={onChangeMock} />);

    //  then
    const containerRadio = screen.getByRole('radio');

    userEvent.click(containerRadio);
    userEvent.click(containerRadio);
    userEvent.click(containerRadio);

    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });

  it('Ao ser desabilitado(disable), muda seu style e onClick não funciona', () => {
    // given
    const onChangeMock = jest.fn();
    const labelText = 'texto';

    // when
    render(<Radio onChange={onChangeMock} disabled label={labelText} />);

    //  then
    const containerRadio = screen.getByRole('radio');
    const label = screen.getByText(labelText);

    userEvent.click(containerRadio);

    expect(onChangeMock).not.toHaveBeenCalled();

    expect(containerRadio).toHaveStyle('cursor: default');
    expect(label).toHaveStyle('opacity: 0.5');
  });
});
