import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import userEvent from '@testing-library/user-event';

import Input from './Input';
import { colors } from '../../styles/colors';

enum Positions {
  left = 'left',
  right = 'right',
}

describe('Input Component', () => {
  it('Deve renderizar o component com sucesso', () => {
    // given

    // when
    render(<Input />);

    // then

    expect(screen.queryByRole('group')).toBeInTheDocument();
  });

  it('Deve renderizar uma mensagem de erro', () => {
    // given
    const errorMessage = 'Obrigatório';

    // when
    render(<Input errorMessage={errorMessage} />);

    // then
    const errorContainer = screen.queryByText(errorMessage);

    expect(errorContainer).toBeInTheDocument();
  });

  it('Deve renderizar um icone no input', () => {
    // given

    // when
    render(<Input icon={faPlay} />);

    // then

    expect(screen.queryByLabelText('icon')).toBeInTheDocument();
  });

  it('Deve renderizar uma action no input', () => {
    // given
    const onClickMock = jest.fn();

    // when
    render(<Input action={{ icon: faPlay, onClick: onClickMock }} />);

    // then

    expect(screen.queryByLabelText('action-icon')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('action-icon'));
    expect(onClickMock).toBeCalled();
  });

  it('Quando desabilitado deve mudar seu estilo', () => {
    // given

    // when
    render(<Input disabled />);

    // then

    expect(screen.getByTestId('input-container')).toHaveStyle('opacity: 0.5');
  });

  it('Quando o input tem value o estado isFieldActive deve ser estar ativo', () => {
    // given

    const value = 'field is active';
    const onChangeMock = jest.fn();

    // when
    render(
      <Input type="text" value={value} onChange={onChangeMock} disabled />,
    );

    // then
    const input = screen.getByRole('textbox');
    const container = screen.getByTestId('input-container');

    expect(input).toHaveStyle('background-color: transparent');

    expect(container).toHaveStyle({
      opacity: 0.5,
    });
  });

  it('Função de onFocus é chamada com sucesso', () => {
    // given

    const value = 'field is active';
    const onFocusMock = jest.fn();
    const onChangeMock = jest.fn();

    // when

    render(
      <Input onFocus={onFocusMock} value={value} onChange={onChangeMock} />,
    );

    // then

    const input = screen.getByRole('textbox');

    input.focus();
    expect(onFocusMock).toBeCalled();
  });

  it('Função de onBlur é chamada com sucesso', () => {
    // given

    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();

    // when

    render(<Input onBlur={onBlurMock} onChange={onChangeMock} />);

    // then

    const input = screen.getByRole('textbox');

    input.focus();
    input.blur();
    expect(onBlurMock).toBeCalled();
  });

  it('IconPosition funcionando', () => {
    // given

    const labelText = 'this is a label';

    // when

    const { rerender } = render(
      <Input iconPosition={Positions.left} icon={faPlay} label={labelText} />,
    );

    // then
    const input = screen.getByRole('textbox');
    const label = screen.getByText(labelText);
    const iconContainer = screen.getByTestId('icon-container');

    expect(input).toHaveStyle({
      'padding-left': '40px',
      'padding-right': '0',
    });

    expect(label).toHaveStyle({
      left: '40px',
    });

    rerender(
      <Input iconPosition={Positions.right} icon={faPlay} label={labelText} />,
    );

    expect(input).toHaveStyle({
      'padding-left': '15px',
      'padding-right': '40px',
    });

    expect(label).toHaveStyle({
      left: '15px',
    });

    expect(iconContainer).toHaveStyle({
      right: '0',
    });
  });

  it('ActionPosition funcionando', () => {
    // given

    const labelText = 'this is a label';
    const onClickMock = jest.fn();

    // when

    const { rerender } = render(
      <Input
        action={{
          icon: faPlay,
          position: Positions.left,
          onClick: onClickMock,
        }}
        label={labelText}
      />,
    );

    // then
    const input = screen.getByRole('textbox');
    const label = screen.getByText(labelText);
    const actionContainer = screen.getByTestId('action-container');

    expect(input).toHaveStyle({
      'padding-left': '40px',
      'padding-right': '0px',
    });

    expect(label).toHaveStyle({
      left: '40px',
    });

    expect(actionContainer).toHaveStyle({
      left: '0px',
    });

    rerender(
      <Input
        action={{
          icon: faPlay,
          position: Positions.right,
          onClick: onClickMock,
        }}
        label={labelText}
      />,
    );

    expect(input).toHaveStyle({
      'padding-left': '15px',
      'padding-right': '40px',
    });

    expect(label).toHaveStyle({
      left: '15px',
    });

    expect(actionContainer).toHaveStyle({
      right: '0px',
    });
  });

  it('Se houver action e icon, deve aumentar os paddings laterais', () => {
    // given

    const labelText = 'this is a label';
    const onClickMock = jest.fn();

    // when

    render(
      <Input
        action={{
          icon: faPlay,
          position: Positions.left,
          onClick: onClickMock,
        }}
        icon={faPlay}
        iconPosition={Positions.left}
        label={labelText}
      />,
    );

    // then
    const input = screen.getByRole('textbox');
    const label = screen.getByText(labelText);

    expect(input).toHaveStyle({
      'padding-left': '40px',
      'padding-right': '40px',
    });

    expect(label).toHaveStyle({
      left: '40px',
    });
  });

  it('Error color funcionando', () => {
    // given

    const errorMessage = 'error';
    const errorColor = colors.brand30;
    const labelText = 'this is a label';
    const valueText = 'this is a value';

    // when

    const { rerender } = render(
      <Input
        errorColor={errorColor}
        errorMessage={errorMessage}
        label={labelText}
        value={valueText}
        onChange={() => {}}
      />,
    );

    // then

    const errorContainer = screen.getByText(errorMessage);
    const labelContainer = screen.getByTestId('label-container');
    const label = screen.getByText(labelText);

    expect(errorContainer).toHaveStyle(`color: ${errorColor}`);

    expect(labelContainer).toHaveStyle(`border-bottom-color: ${errorColor}`);

    expect(label).toHaveStyle(`color: ${errorColor}`);

    rerender(
      <Input
        errorColor={errorColor}
        errorMessage={errorMessage}
        label={labelText}
        value=""
      />,
    );

    expect(label).toHaveStyle(`color: ${errorColor}`);

    rerender(<Input errorMessage={errorMessage} label={labelText} value="" />);

    expect(label).toHaveStyle(`color: ${colors.danger20}`);
  });
});
