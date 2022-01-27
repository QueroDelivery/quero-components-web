import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('Componente renderiza', () => {
    // given
    // when
    render(<Pagination totalCount={180} />);
    // then
    expect(screen.queryByRole('group')).toBeInTheDocument();
  });

  it('Se totalCount for 0, nada é renderizado', () => {
    // given
    // when
    render(<Pagination totalCount={0} />);
    // then
    expect(screen.queryByRole('group')).not.toBeInTheDocument();
  });

  it('Botões são renderizados corretamente', () => {
    // given
    // when
    render(
      <Pagination
        totalCount={270}
        limitPerPage={30}
        doubleJumpArrow
        currentPage={5}
      />,
    );
    // then
    const buttons = screen.getAllByRole('button');
    buttons.map(button => {
      userEvent.click(button);
    });

    expect(buttons.length).toEqual(13);
  });

  it('onPageChange funcionando', () => {
    // given
    const onPageChangeMock = jest.fn();

    // when
    render(
      <Pagination
        totalCount={240}
        doubleJumpArrow
        onPageChange={onPageChangeMock}
      />,
    );

    // then
    const buttons = screen.getAllByRole('button');
    buttons.map(button => {
      userEvent.click(button);
    });
    expect(onPageChangeMock).toHaveBeenCalledTimes(buttons.length - 4); // 4 buttons not clicked = currentPage, 2 arrows buttons and ... button
  });

  it('Quando desabilitado, nenhum botão funciona', () => {
    // given
    const onPageChangeMock = jest.fn();

    // when
    render(
      <Pagination
        totalCount={240}
        doubleJumpArrow
        onPageChange={onPageChangeMock}
        disabled
      />,
    );

    // then
    const buttons = screen.getAllByRole('button');
    buttons.map(button => {
      userEvent.click(button);
    });
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });
});
