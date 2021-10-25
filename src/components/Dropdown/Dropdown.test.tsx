import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { colors } from '../../styles/colors';

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

  it('Prop colorLabel funcionando', () => {
    // given
    const colorLabel = colors.brand30;
    // when

    render(<Dropdown options={defaultOptions} colorLabel={colorLabel} />);

    // then
  });
});
