import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
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
    render(
      <Accordion open title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(screen.getByText(textBody)).toBeInTheDocument();
  });

  it('Verificar se o onClick está funcionando', () => {
    // Given

    // When
    render(
      <Accordion open title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    const accordion = screen.getByRole('button');
    userEvent.click(accordion);
    expect(onChangeMock).toBeCalled();
  });

  it('Verificar se está aberto ou fechado', () => {
    // Given

    // When
    const { rerender } = render(
      <Accordion open title={title} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    const body = screen.getByText(textBody);

    expect(body).toHaveAttribute('open');

    rerender(
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
    render(
      <Accordion open title={title} subtitle={subtitle} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('Verificar se está mostrando o value', () => {
    // Given
    const value = 'R$10,00';

    // When
    render(
      <Accordion open title={title} value={value} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  it('Verificar se está mostrando o ícone', async () => {
    // Given
    const icon = jest.mocked(faPhone);

    // When
    render(
      <Accordion open title={title} icon={icon} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(await screen.getByTestId('accordion-icon')).toBeInTheDocument();
  });

  it('Verificar se está mostrando o customIcon', () => {
    // Given
    const icon = <div>Icon</div>;

    // When
    render(
      <Accordion open title={title} customIcon={icon} onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('Verificar se está mudando para o estilo secundary', () => {
    // Given

    // When
    render(
      <Accordion open title={title} secondary onClick={onChangeMock}>
        {textBody}
      </Accordion>,
    );

    // Then
    const accordion = screen.getByRole('button');
    expect(accordion).toHaveStyle(`background-color: ${colors.card}`);
  });
});
