import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import { colors } from '../../styles/colors';
import Calendar from './Calendar';

describe('Calendar Component', () => {
  const startDate = new Date();
  const endDate = addDays(new Date(), 5);

  it('Verificar se está sendo renderizado', () => {
    // Given
    const onChangeMock = jest.fn();

    // When
    render(
      <Calendar
        onChange={onChangeMock}
        startDate={startDate}
        endDate={endDate}
        selected={startDate}
      />,
    );
    // Then
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('Verificar se estilo brand está funcionando', () => {
    // Given
    const onChangeMock = jest.fn();

    // When
    render(
      <Calendar
        onChange={onChangeMock}
        startDate={startDate}
        endDate={endDate}
        selected={startDate}
        brand
      />,
    );
    // Then
    const calendar = screen.getByRole('textbox');
    expect(calendar).toHaveStyle(`color: ${colors.brand10}`);
    expect(calendar).toHaveStyle(`border: 1px solid ${colors.brandLight}`);
    expect(calendar).toHaveStyle(`background-color: ${colors.brandLight}`);
    expect(calendar).toHaveStyle(`color: ${colors.brand10}`);
  });

  it('Verificar se label está funcionando', () => {
    // Given
    const onChangeMock = jest.fn();

    // When
    render(
      <Calendar
        onChange={onChangeMock}
        startDate={startDate}
        endDate={endDate}
        selected={startDate}
        label="Calendário"
      />,
    );

    // Then
    expect(screen.getByText('Calendário')).toBeInTheDocument();
  });

  it('Verificar se otherFormatDate está funcionando', () => {
    // Given
    const onChangeMock = jest.fn();

    // When
    render(
      <Calendar
        onChange={onChangeMock}
        startDate={startDate}
        endDate={endDate}
        selected={startDate}
        otherFormatDate="MM-dd-yyyy"
      />,
    );

    // Then
    const calendar = screen.getByRole('textbox');
    expect(calendar.closest('input')?.value).toEqual(
      format(startDate, 'MM-dd-yyyy'),
    );
  });
});
