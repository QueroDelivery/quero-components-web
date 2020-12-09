import React from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import './Calendar.css';
import { Container } from './styles';
import MaskedInput from 'react-input-mask';

interface CalendarProps extends ReactDatePickerProps {
    write?: boolean;
    label?: string;
    labelColor?: string;
    brand?: boolean;
}

const Calendar: React.FC<CalendarProps> = ({
    write,
    labelColor,
    label,
    brand,
    ...rest
}) => {

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
        <Container brand={brand} labelColor={labelColor}>
            {label && <span>{label}</span>}
            <div>
                <DatePicker
                    {...rest}
                    locale="pt-BR"
                    customInput={
                        <CustomInput
                            onClick={rest.onCalendarOpen}
                            value={rest.value}
                            onChange={rest.onChange}
                        />
                    }
                    dateFormat="dd/MM/yyyy"
                    readOnly={false}
                    onChangeRaw={event =>
                        rest.readOnly ? event.preventDefault() : null
                    }
                />
            </div>
        </Container>
    );
};

export default Calendar;
