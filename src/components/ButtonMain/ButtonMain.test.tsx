import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles/colors';
import ButtonMain from './ButtonMain';

jest.mock('@fortawesome/free-solid-svg-icons');

describe('Button Main Component', () => {
  let text: string;

  beforeAll(() => {
    text = 'Teste';
  });

  it('Verificar se está sendo renderizado', () => {
    // Given

    // When
    const wrapper = render(<ButtonMain>{text}</ButtonMain>);

    // Then
    expect(wrapper.getByText(text)).toBeInTheDocument();
  });

  it('Estilo secondary está funcionando', () => {
    // Given

    // When
    const wrapper = render(<ButtonMain secondary>{text}</ButtonMain>);

    // Then
    const button = wrapper.getByRole('button');
    expect(button).toHaveStyle(`background-color: ${colors.white}`);
    expect(button).toHaveStyle(`border-color: ${colors.brand10}`);
    expect(button).toHaveStyle(`color: ${colors.brand10}`);
  });

  it('Estilo tertiary está funcionando', () => {
    // Given

    // When
    const wrapper = render(<ButtonMain tertiary>{text}</ButtonMain>);

    // Then
    const button = wrapper.getByRole('button');
    expect(button).toHaveStyle(`background-color: ${colors.white}`);
    expect(button).toHaveStyle(`border-color: ${colors.gray10}`);
    expect(button).toHaveStyle(`color: ${colors.gray20}`);
  });

  it('Estilo noBorder está funcionando', () => {
    // Given

    // When
    const wrapper = render(<ButtonMain noBorder>{text}</ButtonMain>);

    // Then
    const button = wrapper.getByRole('button');
    expect(button).toHaveStyle(`background-color: transparent`);
    expect(button).toHaveStyle(`border: none`);
  });

  it('Bordas retangulares está funcionando', () => {
    // Given

    // When
    const wrapper = render(<ButtonMain rectangular>{text}</ButtonMain>);

    // Then
    const button = wrapper.getByRole('button');
    expect(button).toHaveStyle(`border-radius: 10px`);
  });

  it('Loading está funcionando', () => {
    // Given

    // When
    const wrapper = render(<ButtonMain loading>{text}</ButtonMain>);

    // Then
    const button = wrapper.getByRole('button');
    expect(button).toHaveStyle(`position: relative`);
    expect(button).toHaveStyle(`color: transparent`);
    expect(wrapper.getByTestId('button-loading')).toBeInTheDocument();
  });

  it('Ícone está sendo exibido', async () => {
    // Given
    const icon = mocked(faPhone);

    // When
    const wrapper = render(<ButtonMain icon={icon}>{text}</ButtonMain>);

    // Then
    expect(await wrapper.getByTestId('button-icon')).toBeInTheDocument();
  });

  it('CustomIcon está sendo exibido', () => {
    // Given
    const icon = <div>Icon</div>;

    // When
    const wrapper = render(<ButtonMain customIcon={icon}>{text}</ButtonMain>);

    // Then
    expect(wrapper.getByText('Icon')).toBeInTheDocument();
  });

  it('Posição do ícone está funcionando', () => {
    // Given
    const icon = mocked(faPhone);

    // When
    const wrapper = render(<ButtonMain icon={icon}>{text}</ButtonMain>);

    // console.log(wrapper.getByRole('button').firstChild);

    // Then
    const button = wrapper.getByRole('button');

    expect(button.firstChild).toHaveTextContent(text);

    wrapper.rerender(
      <ButtonMain iconPosition="left" icon={icon}>
        {text}
      </ButtonMain>,
    );

    const iconButton = wrapper.getByTestId('button-icon');
    expect(button.firstChild?.firstChild).toEqual(iconButton);
  });

  it('TextFirst está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    // When
    const wrapper = render(<ButtonMain textFirst={textFirst} />);

    // Then
    const button = wrapper.getByText(textFirst);
    expect(button).toBeInTheDocument();
  });

  it('TextEnd está funcionando', () => {
    // Given
    const textEnd = 'Aqui';
    // When
    const wrapper = render(<ButtonMain textEnd={textEnd} />);

    // Then
    const button = wrapper.getByText(textEnd);
    expect(button).toBeInTheDocument();
  });

  it('FirstStrong está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    const textEnd = 'Aqui';

    // When
    const wrapper = render(
      <ButtonMain textFirst={textFirst} textEnd={textEnd} firstStrong />,
    );

    // Then
    const button = wrapper.getByRole('button');
    expect(button.children[0]).toHaveStyle(`font-weight: bold`);
    expect(button.children[1]).toHaveStyle(`font-weight: normal`);
  });

  it('Strong está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    const textEnd = 'Aqui';

    // When
    const wrapper = render(
      <ButtonMain textFirst={textFirst} textEnd={textEnd} strong />,
    );

    // Then
    const button = wrapper.getByRole('button');
    expect(button.children[0]).toHaveStyle(`font-weight: bold`);
    expect(button.children[1]).toHaveStyle(`font-weight: bold`);
  });

  it('NotStrong está funcionando', () => {
    // Given
    const textFirst = 'Clique';
    const textEnd = 'Aqui';

    // When
    const wrapper = render(
      <ButtonMain textFirst={textFirst} textEnd={textEnd} notStrong />,
    );

    // Then
    const button = wrapper.getByRole('button');
    expect(button.children[0]).toHaveStyle(`font-weight: normal`);
    expect(button.children[1]).toHaveStyle(`font-weight: normal`);
  });

  it('Estilo de notificação está funcionando', () => {
    // When
    const wrapper = render(<ButtonMain notification amount={2} />);

    // Then
    expect(wrapper.getByText('notificações')).toBeInTheDocument();
    expect(wrapper.getByText('2')).toBeInTheDocument();
  });
});
