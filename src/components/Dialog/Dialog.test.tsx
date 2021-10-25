import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getMeasurement } from '../../helpers/FnUtil';

import Dialog from './Dialog';

describe('Dialog Component', () => {
  it('Componente renderiza', () => {
    // given

    // when

    render(<Dialog onClose={() => {}} open />);

    // then

    expect(screen.queryByRole('dialog')).toBeInTheDocument();
  });

  it('Deve chamar a funcao onClose com sucesso', () => {
    // given

    const onCloseMock = jest.fn();

    // when

    render(<Dialog open onClose={onCloseMock} />);

    // then

    const dialog = screen.getByRole('dialog');
    const background = screen.getByTestId('background');

    userEvent.click(dialog);

    expect(onCloseMock).not.toBeCalled();

    userEvent.click(background);

    expect(onCloseMock).toBeCalled();
  });

  it('Deve renderizar um loader quando a prop loading está true', () => {
    // given

    // when

    render(<Dialog open onClose={() => {}} loading />);

    // then
    expect(screen.queryByRole('progressbar')).toBeInTheDocument();
  });

  it('Deve renderizar o header quando houver title, onReturn ou closeIcon', () => {
    // given

    const title = 'this is a title';

    // when

    const { rerender } = render(
      <Dialog open onClose={() => {}} title={title} />,
    );

    // then

    expect(screen.queryByRole('heading')).toBeInTheDocument();

    rerender(<Dialog open onClose={() => {}} closeIcon />);

    expect(screen.queryByRole('heading')).toBeInTheDocument();

    rerender(<Dialog open onClose={() => {}} onReturn={() => {}} />);

    expect(screen.queryByRole('heading')).toBeInTheDocument();
  });

  it('Deve renderizar o closeIcon e chamar a função onClose quando clicado', () => {
    // given

    const onCloseMock = jest.fn();

    // when

    render(<Dialog open onClose={onCloseMock} closeIcon />);

    // then

    const closeIcon = screen.getByRole('button', { name: /close/i });

    userEvent.click(closeIcon);
    expect(onCloseMock).toBeCalled();
  });

  it('Não deve chamar o onClose quando clicar no background e o onCloseDimmerClick for false', () => {
    // given

    const onCloseMock = jest.fn();

    // when

    render(<Dialog open onClose={onCloseMock} closeOnDimerClick={false} />);

    // then

    userEvent.click(screen.getByTestId('background'));
    expect(onCloseMock).not.toBeCalled();
  });

  it('Componente deve estar invisível em tela quando open estiver false', () => {
    // given

    // when

    render(<Dialog open={false} onClose={() => {}} />);

    // then

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByTestId('background')).toHaveStyle({
      opacity: 0,
      visibility: 'hidden',
      display: 'none',
    });
  });

  it('Deve mudar o height e estilos quando houver maxHeight', () => {
    // given

    const maxHeight = '500px';

    // when

    render(<Dialog open onClose={() => {}} maxHeight={maxHeight} />);

    // then

    const dialog = screen.getByRole('dialog');

    expect(dialog).toHaveStyle({
      'padding-bottom': '0px',
      height: '100%',
      'max-height': getMeasurement(maxHeight, '100%'),
    });
  });

  it('Deve retirar a borda do header quando noBorder for true', () => {
    // given

    // when

    render(<Dialog open onClose={() => {}} noBorder title="this is a title" />);

    // then

    expect(screen.getByRole('heading')).toHaveStyle({
      'border-bottom': 'none',
    });
  });
});
