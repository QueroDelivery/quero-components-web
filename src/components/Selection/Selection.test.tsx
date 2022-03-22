import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Selection from './Selection';
import { colors } from '../../styles/colors';

describe('Selection Component', () => {
  describe('Tipo Switch', () => {
    it('Switch é renderizado', () => {
      // given
      // when

      render(<Selection type="switch" />);

      const selection = screen.queryByRole('switch');
      // then

      expect(selection).toBeInTheDocument();
    });

    it('Função onClick é chamada com sucesso', () => {
      // given
      const onClickMock = jest.fn();

      // when

      render(<Selection type="switch" onClick={onClickMock} />);

      // then
      const selection = screen.getByRole('switch');

      userEvent.click(selection);
      userEvent.click(selection);
      userEvent.click(selection);

      expect(onClickMock).toBeCalledTimes(3);
    });

    it('Quando desabilitado, cursor e cores mudam', () => {
      // given
      // when

      const { rerender } = render(<Selection type="switch" disabled />);

      // then
      const selection = screen.getByRole('switch');
      const control = screen.getByTestId('control');

      expect(selection).toHaveStyle('cursor: not-allowed');
      expect(control).toHaveStyle(`background-color: ${colors.card}`);

      rerender(<Selection type="switch" checked disabled />);

      expect(selection).toHaveStyle({ opacity: 0.5 });
    });
  });

  describe('Tipo ActiveInactive', () => {
    it('ActiveInactive é renderizado', () => {
      // given
      // when

      render(<Selection type="activeInactive" />);

      const selection = screen.queryByRole('switch');
      // then
      expect(selection).toBeInTheDocument();
    });

    it('Função onClick é chamada com sucesso', () => {
      // given
      const onClickMock = jest.fn();

      // when

      render(<Selection type="activeInactive" onClick={onClickMock} />);

      // then
      const selection = screen.getByRole('switch');

      userEvent.click(selection);
      userEvent.click(selection);
      userEvent.click(selection);

      expect(onClickMock).toBeCalledTimes(3);
    });

    it('Texto correto dos botões', () => {
      // given
      // when

      const { rerender } = render(<Selection type="activeInactive" />);

      // then

      expect(screen.queryByText('inativo')).toBeInTheDocument();
      expect(screen.queryByText('ativar')).toBeInTheDocument();

      rerender(<Selection type="activeInactive" checked />);

      expect(screen.queryByText('desativar')).toBeInTheDocument();
      expect(screen.queryByText('ativo')).toBeInTheDocument();
    });

    it('Quando desabilitado, cursor e opacidade mudam', () => {
      // given
      // when

      render(<Selection type="activeInactive" disabled />);

      // then
      const selection = screen.getByRole('switch');

      expect(selection).toHaveStyle('cursor: not-allowed');
      expect(selection).toHaveStyle('opacity: 0.5');
    });
  });

  describe('Tipo Toggle', () => {
    it('Toggle é renderizado', () => {
      // given
      // when

      render(<Selection type="toggle" />);

      const selection = screen.queryByRole('switch');
      // then
      expect(selection).toBeInTheDocument();
    });

    it('Função onClick é chamada com sucesso', () => {
      // given
      const onClickMock = jest.fn();

      // when

      render(<Selection type="toggle" onClick={onClickMock} />);

      // then
      const selection = screen.getByRole('switch');

      userEvent.click(selection);
      userEvent.click(selection);
      userEvent.click(selection);

      expect(onClickMock).toBeCalledTimes(3);
    });

    it('Quando desabilitado, cursor e opacidade mudam', () => {
      // given
      // when

      render(<Selection type="toggle" disabled />);

      // then
      const selection = screen.getByRole('switch');

      expect(selection).toHaveStyle('cursor: not-allowed');
      expect(selection).toHaveStyle('opacity: 0.5');
    });

    it('Quando checado, muda a cor do texto e background mudam', () => {
      // given
      // when

      render(<Selection type="toggle" checked />);

      // then
      const btnLeft = screen.getByTestId('btn-left');
      const btnRight = screen.getByTestId('btn-right');

      expect(btnLeft).toHaveStyle(`background-color: ${colors.white}`);
      expect(btnLeft).toHaveStyle(`color: ${colors.gray20}`);

      expect(btnRight).toHaveStyle(`background-color: ${colors.brand10}`);
      expect(btnRight).toHaveStyle(`color: ${colors.white}`);
    });
  });
});
