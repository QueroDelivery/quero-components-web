/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import MaskedInput from 'react-input-mask';
import br from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';
import { sizesTypes } from '../../helpers/FnUtil';

registerLocale('pt-BR', br);
export interface CalendarProps extends ReactDatePickerProps {
  label?: string;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  calendarClassName?: string;
  brand?: boolean;
  otherFormatDate?: string;
  size?: sizesTypes;
}

function Calendar({
  label,
  labelClassName,
  labelStyle,
  brand,
  otherFormatDate,
  calendarClassName,
  size,
  ...rest
}: CalendarProps) {
  return (
    <Container brand={brand} size={size}>
      {label && (
        <span className={labelClassName} style={labelStyle}>
          {label}
        </span>
      )}
      <div>
        <DatePicker
          {...rest}
          locale="pt-BR"
          calendarClassName={`spanCalendarClassName ${calendarClassName || ''}`}
          customInput={
            otherFormatDate ? undefined : (
              <MaskedInput
                role="textbox"
                mask="99/99/9999"
                onClick={rest.onCalendarOpen}
                value={rest.value}
                onChange={rest.onChange as any}
                readOnly={rest.readOnly}
                placeholder={rest.placeholderText}
              />
            )
          }
          dateFormat={otherFormatDate || 'dd/MM/yyyy'}
          readOnly={false}
          onChangeRaw={event => (rest.readOnly ? event.preventDefault() : null)}
        />
        {!rest.isClearable && (
          <FontAwesomeIcon icon={faAngleDown} className="calendar-icon" />
        )}
      </div>
    </Container>
  );
}

export default Calendar;
