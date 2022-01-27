import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import Dropdown, { OptionsProps } from './Dropdown';

describe('Dropdown Component', () => {
  let defaultOptions: OptionsProps[];

  beforeAll(() => {
    defaultOptions = [
      {
        key: 'key1',
        text: 'text1',
        value: 'value1',
      },
      {
        key: 'key2',
        text: 'text2',
        value: 'value2',
      },
      {
        key: 'key3',
        text: 'text3',
        value: 'value3',
      },
    ];
  });
  it('Componente renderiza ', () => {
    // given

    // when

    render(<Dropdown options={defaultOptions} />);

    // then

    expect(screen.queryByRole('group')).toBeInTheDocument();
  });

  it('Label renderiza', () => {
    // given
    const label = 'this is a label';

    // when

    render(<Dropdown options={defaultOptions} label={label} />);

    // then

    expect(screen.queryByText(label)).toBeInTheDocument();
  });

  it('ErrorMessage renderiza', () => {
    // given
    const error = 'there is an error';

    // when

    render(<Dropdown options={defaultOptions} errorMessage={error} />);

    // then

    expect(screen.queryByText(error)).toBeInTheDocument();
    expect(screen.getByText(error)).toHaveStyle(`padding-bottom: '20px'`);
  });
});
