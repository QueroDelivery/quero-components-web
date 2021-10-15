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
  brand?: boolean;
  otherFormatDate?: string;
  size?: sizesTypes;
}

const Calendar: React.FC<CalendarProps> = ({
  label,
  labelClassName,
  labelStyle,
  brand,
  otherFormatDate,
  size,
  ...rest
}) => {
  // eslint-disable-next-line react/display-name
  const CustomInput = React.forwardRef((props: any, ref: any) => (
    <MaskedInput
      ref={ref}
      mask="99/99/9999"
      onClick={props.onClick}
      value={props.value}
      readOnly={rest.readOnly}
      onChange={props.onChange}
      placeholder={rest.placeholderText}
    />
  ));

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
          customInput={
            otherFormatDate ? undefined : (
              <CustomInput
                onClick={rest.onCalendarOpen}
                value={rest.value}
                onChange={rest.onChange}
              />
            )
          }
          dateFormat={otherFormatDate || 'dd/MM/yyyy'}
          readOnly={false}
          onChangeRaw={event => (rest.readOnly ? event.preventDefault() : null)}
        />
        <FontAwesomeIcon icon={faAngleDown} className="calendar-icon" />
      </div>
    </Container>
  );
};

export default Calendar;
