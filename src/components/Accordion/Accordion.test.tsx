import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import userEvent from '@testing-library/user-event';
import Accordion from './Accordion';
import { colors } from '../../styles/colors';

jest.mock('@fortawesome/free-solid-svg-icons');

describe('Accordion Component', () => {
  let title: string;
  let textBody: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let onChangeMock: jest.Mock<any, any>;

  beforeAll(() => {
    title = 'Teste';
    onChangeMock = jest.fn();
    textBody = 'Testando';
  });

  it('Verificar se está sendo renderizado', () => {
    // Given

    // When
    const wrapper = render(
      <Accordion open title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(wrapper.getByText(textBody)).toBeInTheDocument();
  });

  it('Verificar se o onClick está funcionando', () => {
    // Given

    // When
    const wrapper = render(
      <Accordion open title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    const accordion = wrapper.getByTestId('accordion-component');
    userEvent.click(accordion);
    expect(onChangeMock).toBeCalled();
  });

  it('Verificar se está aberto ou fechado', () => {
    // Given

    // When
    const wrapper = render(
      <Accordion open title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    const body = wrapper.getByText(textBody);

    expect(body).toHaveAttribute('open');

    wrapper.rerender(
      <Accordion open={false} title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    expect(body).not.toHaveAttribute('open');
  });

  it('Verificar se está mostrando o subtitle', () => {
    // Given
    const subtitle = 'Subtitulo';

    // When
    const wrapper = render(
      <Accordion open title={title} subtitle={subtitle} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(wrapper.getByText(subtitle)).toBeInTheDocument();
  });

  it('Verificar se está mostrando o value', () => {
    // Given
    const value = 'R$10,00';

    // When
    const wrapper = render(
      <Accordion open title={title} value={value} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(wrapper.getByText(value)).toBeInTheDocument();
  });

  it('Verificar se está mostrando o ícone', async () => {
    // Given
    const icon = mocked(faPhone);

    // When
    const wrapper = render(
      <Accordion open title={title} icon={icon} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(await wrapper.getByTestId('accordion-icon')).toBeInTheDocument();
  });

  it('Verificar se está mostrando o customIcon', () => {
    // Given
    const icon = <div>Icon</div>;

    // When
    const wrapper = render(
      <Accordion open title={title} customIcon={icon} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(wrapper.getByText('Icon')).toBeInTheDocument();
  });

  it('Verificar se está mudando para o estilo secundary', () => {
    // Given

    // When
    const wrapper = render(
      <Accordion open title={title} secondary onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    const accordion = wrapper.getByTestId('accordion-component');
    expect(accordion).toHaveStyle(`background-color: ${colors.card}`);
  });

  it('Verificar se está mostrando as cores customizadas ', async () => {
    // Given
    const subtitle = 'Subtitulo';
    const value = 'R$10,00';
    const colorTitle = colors.brand10;
    const colorSubtitle = colors.brandGreen;
    const colorValue = colors.info10;

    // When
    const wrapper = render(
      <Accordion
        open
        title={title}
        subtitle={subtitle}
        value={value}
        onClick={onChangeMock}
      >
        {textBody}
      </Accordion>,
    );

    // Then
    const titleWrapper = wrapper.getByText(title);
    const subtitleWrapper = wrapper.getByText(subtitle);
    const valueWrapper = wrapper.getByText(value);

    expect(titleWrapper).toHaveStyle(`color: ${colors.gray20}`);
    expect(subtitleWrapper).toHaveStyle(`color: ${colors.gray10}`);
    expect(valueWrapper).toHaveStyle(`color: ${colors.gray20}`);

    wrapper.rerender(
      <Accordion
        open
        title={title}
        colorTitle={colorTitle}
        subtitle={subtitle}
        colorSubtitle={colorSubtitle}
        value={value}
        colorValue={colorValue}
        onClick={onChangeMock}
      >
        {textBody}
      </Accordion>,
    );

    expect(titleWrapper).toHaveStyle(`color: ${colorTitle}`);
    expect(subtitleWrapper).toHaveStyle(`color: ${colorSubtitle}`);
    expect(valueWrapper).toHaveStyle(`color: ${colorValue}`);
  });
});
