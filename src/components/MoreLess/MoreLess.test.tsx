import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import MoreLess from './MoreLess';

describe('MoreLess Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let onChangeMock: jest.Mock<any, any>;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });
  it('Componente deve renderizar', () => {
    // given
    // when

    render(<MoreLess onChange={onChangeMock} value={0} />);
    // then

    expect(screen.queryByRole('group')).toBeInTheDocument();
  });

  it('Deve desabilitar o botão de diminuir(minus) e mudar seu estilo quando o value for igual ao minimum', () => {
    // given
    const value = 0;
    // when

    render(<MoreLess onChange={onChangeMock} value={value} minimum={value} />);

    const decreaseButton = screen.getByRole('button', { name: /minus/i });

    expect(decreaseButton).toBeDisabled();
    expect(decreaseButton).toHaveStyle('opacity: 0.25');
  });

  it('Deve desabilitar o botão de aumentar(plus) e mudar seu estilo quando o value for igual ao maximum', () => {
    // given
    const value = 10;
    // when

    render(<MoreLess onChange={onChangeMock} value={value} maximum={value} />);

    const increaseButton = screen.getByRole('button', { name: /plus/i });

    expect(increaseButton).toBeDisabled();
    expect(increaseButton).toHaveStyle('opacity: 0.25');
  });

  it('Quando estiver desabilitado, nenhum campo deve estar habilitado', () => {
    // given
    const value = 10;
    // when

    render(<MoreLess onChange={onChangeMock} value={value} disabled />);

    const increaseButton = screen.getByRole('button', { name: /plus/i });
    const decreaseButton = screen.getByRole('button', { name: /minus/i });
    const inputBox = screen.getByRole('spinbutton');

    expect(increaseButton).toBeDisabled();
    expect(increaseButton).toHaveStyle('opacity: 0.25');

    expect(decreaseButton).toBeDisabled();
    expect(decreaseButton).toHaveStyle('opacity: 0.25');

    expect(inputBox).toHaveAttribute('readOnly');
  });

  it('Deve retornar somente os valores dentro do escopo de maximum e minimum', () => {
    // given
    const value = 10;
    const minimum = -1;
    const maximum = 49;

    const difference = maximum - minimum;

    // when

    render(
      <MoreLess
        onChange={onChangeMock}
        value={value}
        minimum={minimum}
        maximum={maximum}
        quantityToChange={difference + 10}
      />,
    );
    const increaseButton = screen.getByRole('button', { name: /plus/i });
    const decreaseButton = screen.getByRole('button', { name: /minus/i });
    const inputBox = screen.getByRole('spinbutton');

    userEvent.click(increaseButton);
    expect(onChangeMock).toHaveBeenLastCalledWith(maximum);

    userEvent.click(decreaseButton);
    expect(onChangeMock).toHaveBeenLastCalledWith(minimum);

    userEvent.clear(inputBox);
    userEvent.type(inputBox, `${maximum + 10}`);
    expect(onChangeMock).toHaveBeenLastCalledWith(maximum);

    userEvent.clear(inputBox);
    userEvent.type(inputBox, `${difference - 10}`);
    expect(onChangeMock).toHaveBeenLastCalledWith(difference - 10);
  });
});
