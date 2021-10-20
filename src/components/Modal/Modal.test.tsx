import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Modal from './Modal';

describe('Modal component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let onCloseMock: jest.Mock<any, any>;

  beforeEach(() => {
    onCloseMock = jest.fn();
  });

  it('Deve renderizar o componente em tela', () => {
    // given

    // when
    render(<Modal onClose={onCloseMock} open />);

    // then

    expect(screen.queryByRole('dialog')).toBeInTheDocument();

    userEvent.click(screen.getByRole('dialog'));
    expect(onCloseMock).not.toBeCalled();
  });

  it('Deve esconder o componente caso open seja false', () => {
    // given

    // when
    render(<Modal onClose={onCloseMock} open={false} />);

    // then
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('Deve chamar onChangeFunction quando clicar ESC, ou no botão de fechar', () => {
    // given
    let clicksCount = 0;

    // when

    render(<Modal onClose={onCloseMock} open closeOnDimerClick />);

    // then
    const container = screen.getByTestId('modal-background');
    const closeButton = screen.getByRole('button', { name: 'close' });

    userEvent.click(container);
    clicksCount++;
    expect(onCloseMock).toHaveBeenCalledTimes(clicksCount);

    userEvent.type(container, '{esc}', { skipClick: true });
    clicksCount++;
    expect(onCloseMock).toHaveBeenCalledTimes(clicksCount);

    userEvent.click(closeButton);
    clicksCount++;
    expect(onCloseMock).toHaveBeenCalledTimes(clicksCount);
  });

  it('Deve chamar a return function e renderizar o botão de return', () => {
    // given
    const onReturnMock = jest.fn();

    // when
    render(<Modal onClose={onCloseMock} open onReturnClick={onReturnMock} />);
    // then
    const button = screen.getByRole('button', { name: /return/i });

    userEvent.click(button);
    expect(onReturnMock).toBeCalled();
  });

  it('Deve renderizar um loader quando a prop loading está true', () => {
    // given
    // when
    render(<Modal onClose={onCloseMock} open loading />);
    // then

    expect(screen.queryByRole('progressbar')).toBeInTheDocument();
  });

  it('Deve renderizar um container de ações quando a prop actions retorna true', () => {
    // given
    const buttonText = 'ola';

    // when
    render(
      <Modal
        onClose={onCloseMock}
        open
        loading
        actions={
          <div>
            <button>{buttonText}</button>
          </div>
        }
      />,
    );
    // then

    expect(
      screen.queryByRole('button', { name: buttonText }),
    ).toBeInTheDocument();
  });

  it('Deve estar com a largura passada por meio da prop width', () => {
    // given
    const width = '75%';
    // when

    render(<Modal onClose={onCloseMock} open width={width} />);
    // then

    expect(screen.getByRole('dialog')).toHaveStyle(`width: ${width}`);
  });

  it('Deve retirar a borda do header quando a prop noBorder estiver true', () => {
    // given
    // when

    render(<Modal onClose={onCloseMock} open noBorder />);

    // then

    expect(screen.queryByRole('heading')).toBeInTheDocument();
  });
});
