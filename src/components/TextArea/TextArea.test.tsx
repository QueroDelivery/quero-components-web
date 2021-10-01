import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import TextArea from './TextArea';
import { colors } from '../../styles/colors';

describe('TextArea Component', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let onChangeMock: jest.Mock<any, any>;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  it('TextArea renderizou', () => {
    // given

    // when
    const wrapper = render(<TextArea onChange={onChangeMock} />);

    // then
    const textbox = wrapper.getByRole('textbox');

    expect(textbox).toBeInTheDocument();
    expect(textbox).not.toHaveAttribute('disabled');
  });

  it('Verificar o funcionamento da função onChange', () => {
    // given

    const textToWrite = 'Olá mundo';

    // when

    const wrapper = render(<TextArea onChange={onChangeMock} />);

    // then
    const textbox = wrapper.getByRole('textbox');

    userEvent.type(textbox, textToWrite);
    expect(onChangeMock).toHaveBeenCalledTimes(textToWrite.length);
    expect(textbox).toHaveValue(textToWrite);
  });

  it('A label é renderizada e mostra o texto correto', () => {
    // given
    const labelText = 'Test';
    // when
    const wrapper = render(
      <TextArea label={labelText} onClick={onChangeMock} />,
    );

    // then
    const label = wrapper.getByText(labelText);

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelText);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('LenghtInfo é criado e mostra valores corretos', () => {
    // given
    const text = 'Teste length';
    const maxLenght = 200;

    // when

    const wrapper = render(
      <TextArea
        value={text}
        lengthInfo
        maxLength={maxLenght}
        onChange={onChangeMock}
      />,
    );

    // then

    const containerLenghtInfo = wrapper.getByText('caracteres', {
      exact: false,
    });

    expect(containerLenghtInfo).toBeDefined();
    expect(containerLenghtInfo).toHaveTextContent(
      `${text.length}/${maxLenght} caracteres`,
    );

    const textTwo = `${text}${text}`;

    wrapper.rerender(
      <TextArea
        value={textTwo}
        lengthInfo
        maxLength={maxLenght}
        onChange={onChangeMock}
      />,
    );

    expect(containerLenghtInfo).toBeDefined();
    expect(containerLenghtInfo).toHaveTextContent(
      `${text.length * 2}/${maxLenght} caracteres`,
    );
  });

  it('Ao haver mensagem de erro, o componente deve mostrar o erro e mudar sua cor', () => {
    // given
    const labelText = 'Test';
    const text = 'Teste length';
    const errorText = 'Obrigatório';
    const errorColor = colors.danger10;

    // when

    const wrapper = render(
      <TextArea
        value={text}
        onChange={onChangeMock}
        errorMessage={errorText}
        label={labelText}
      />,
    );

    // then

    const textbox = wrapper.getByRole('textbox');
    const labelContainer = wrapper.getByText(labelText);
    const errorContainer = wrapper.getByText(errorText);

    expect(textbox).toHaveStyle(`border-color: ${colors.danger20}`);
    expect(labelContainer).toHaveStyle(`color: ${colors.danger20}`);
    expect(errorContainer).toHaveStyle(`color: ${colors.danger20}`);

    wrapper.rerender(
      <TextArea
        value={text}
        onChange={onChangeMock}
        errorMessage={errorText}
        label={labelText}
        errorColor={errorColor}
      />,
    );

    expect(textbox).toHaveStyle(`border-color: ${errorColor}`);
    expect(labelContainer).toHaveStyle(`color: ${errorColor}`);
    expect(errorContainer).toHaveStyle(`color: ${errorColor}`);
  });
});
