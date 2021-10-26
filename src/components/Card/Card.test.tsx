import { faPlane } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import Card from './Card';

describe('Card Component', () => {
  it('Deve renderizar todos os tipos de card', () => {
    // given

    // when

    // tipo shadow
    const { rerender } = render(<Card type="shadow" />);
    expect(screen.queryByTestId('card')).toBeInTheDocument();

    // tipo min-shadow
    rerender(<Card type="min-shadow" />);
    expect(screen.queryByTestId('card')).toBeInTheDocument();

    // tipo button
    rerender(<Card type="button" />);
    expect(screen.queryByTestId('card')).toBeInTheDocument();

    // tipo border
    rerender(<Card type="border" />);
    expect(screen.queryByTestId('card')).toBeInTheDocument();

    // tipo none
    rerender(<Card type="none" />);
    expect(screen.queryByTestId('card')).toBeInTheDocument();
  });

  it('Deve renderizar um loader quando a prop loading está true', () => {
    // given

    // when

    render(<Card loading />);

    // then
    expect(screen.queryByRole('progressbar')).toBeInTheDocument();
  });

  it('Deve renderizar o Complement do card', () => {
    const complement = <button>button</button>;

    render(<Card complement={complement} />);

    expect(
      screen.queryByRole('button', { name: /button/i }),
    ).toBeInTheDocument();
  });

  it('Deve renderizar um icone, no card do tipo button', () => {
    render(<Card type="button" icon={faPlane} />);

    expect(screen.queryByLabelText('icon')).toBeInTheDocument();
  });

  it('Deve renderizar a cor passada para o texto do button', () => {
    const text = 'this is a text';
    const color = '#912837';

    render(<Card type="button" text={text} colorText={color} />);

    expect(screen.getByText(text)).toHaveStyle(`color: ${color}`);
  });
});
