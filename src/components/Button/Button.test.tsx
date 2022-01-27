import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import userEvent from '@testing-library/user-event';
import { colors } from '../../styles/colors';
import Button from './Button';

jest.mock('@fortawesome/free-solid-svg-icons');

describe('Button Component', () => {
  let text: string;

  beforeAll(() => {
    text = 'Teste';
  });

  it('Verificar se está sendo renderizado', () => {
    // Given

    // When
    render(<Button>{text}</Button>);

    // Then
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('Estilo secondary está funcionando', () => {
    // Given

    // When
    render(<Button secondary>{text}</Button>);

    // Then
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`background-color: ${colors.white}`);
    expect(button).toHaveStyle(`border-color: ${colors.brand10}`);
    expect(button).toHaveStyle(`color: ${colors.brand10}`);
  });

  it('Estilo tertiary está funcionando', () => {
    // Given

    // When
    render(<Button tertiary>{text}</Button>);

    // Then
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`background-color: ${colors.white}`);
    expect(button).toHaveStyle(`border-color: ${colors.gray10}`);
    expect(button).toHaveStyle(`color: ${colors.gray20}`);
  });

  it('Estilo noBorder está funcionando', () => {
    // Given

    // When
    render(<Button noBorder>{text}</Button>);

    // Then
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`background-color: transparent`);
    expect(button).toHaveStyle(`border: none`);
  });

  it('Bordas retangulares está funcionando', () => {
    // Given

    // When
    render(<Button rectangular>{text}</Button>);

    // Then
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`border-radius: 10px`);
  });

  it('Loading está funcionando', () => {
    // Given

    // When
    render(<Button loading>{text}</Button>);

    // Then
    const button = screen.getByRole('button');
    expect(button).toHaveStyle(`position: relative`);
    expect(button).toHaveStyle(`color: transparent`);
    expect(screen.getByTestId('button-loading')).toBeInTheDocument();
  });

  it('Ícone está sendo exibido', async () => {
    // Given
    const icon = mocked(faPhone);

    // When
    render(<Button icon={icon}>{text}</Button>);

    // Then
    expect(await screen.getByTestId('button-icon')).toBeInTheDocument();
  });

  it('CustomIcon está sendo exibido', () => {
    // Given
    const icon = <div>Icon</div>;

    // When
    render(<Button customIcon={icon}>{text}</Button>);

    // Then
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('Posição do ícone está funcionando', () => {
    // Given
    const icon = mocked(faPhone);

    // When
    const { rerender } = render(<Button icon={icon}>{text}</Button>);

    // console.log(screen.getByRole('button').firstChild);

    // Then
    const button = screen.getByRole('button');

    expect(button.firstChild).toHaveTextContent(text);

    rerender(
      <Button iconPosition="left" icon={icon}>
        {text}
      </Button>,
    );

    const iconButton = screen.getByTestId('button-icon');
    expect(button.firstChild?.firstChild).toEqual(iconButton);
  });

  it('TextFirst está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    // When
    render(<Button textFirst={textFirst} />);

    // Then
    const button = screen.getByText(textFirst);
    expect(button).toBeInTheDocument();
  });

  it('TextEnd está funcionando', () => {
    // Given
    const textEnd = 'Aqui';
    // When
    render(<Button textEnd={textEnd} />);

    // Then
    const button = screen.getByText(textEnd);
    expect(button).toBeInTheDocument();
  });

  it('FirstStrong está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    const textEnd = 'Aqui';

    // When
    render(<Button textFirst={textFirst} textEnd={textEnd} firstStrong />);

    // Then
    const button = screen.getByRole('button');
    expect(button.children[0]).toHaveStyle(`font-weight: bold`);
    expect(button.children[1]).toHaveStyle(`font-weight: normal`);
  });

  it('Strong está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    const textEnd = 'Aqui';

    // When
    render(<Button textFirst={textFirst} textEnd={textEnd} strong />);

    // Then
    const button = screen.getByRole('button');
    expect(button.children[0]).toHaveStyle(`font-weight: bold`);
    expect(button.children[1]).toHaveStyle(`font-weight: bold`);
  });

  it('NotStrong está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    const textEnd = 'Aqui';

    // When
    render(<Button textFirst={textFirst} textEnd={textEnd} notStrong />);

    // Then
    const button = screen.getByRole('button');
    expect(button.children[0]).toHaveStyle(`font-weight: normal`);
    expect(button.children[1]).toHaveStyle(`font-weight: normal`);
  });

  it('Estilo de notificação está funcionando', () => {
    // When
    render(<Button notification amount={2} />);

    // Then
    expect(screen.getByText('notificações')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
  it('Estilo backPurple está funcionando', () => {
    // Given

    // When
    render(<Button backPurple>{text}</Button>);

    // Then
    const button = screen.getByRole('button');
    userEvent.hover(button);
    waitFor(() =>
      expect(button).toHaveStyle(`background-color: ${colors.brand20}`),
    );
  });
});
