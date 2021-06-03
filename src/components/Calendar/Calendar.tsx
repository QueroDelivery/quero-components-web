import React from "react";
import DatePicker, { ReactDatePickerProps, registerLocale } from "react-datepicker";
import { Container } from "./styles";
import MaskedInput from "react-input-mask";
import br from "date-fns/locale/pt-BR";
registerLocale("pt-BR", br);
interface CalendarProps extends ReactDatePickerProps {
    label?: string;
    labelColor?: string;
    brand?: boolean;
    otherFormatDate?: string;
}

const Calendar: React.FC<CalendarProps> = ({
    labelColor,
    label,
    brand,
    otherFormatDate,
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
                        otherFormatDate ? undefined : (
                            <CustomInput
                                onClick={rest.onCalendarOpen}
                                value={rest.value}
                                onChange={rest.onChange}
                            />
                        )
                    }
                    dateFormat={
                        otherFormatDate ? otherFormatDate : "dd/MM/yyyy"
                    }
                    readOnly={false}
                    onChangeRaw={(event) =>
                        rest.readOnly ? event.preventDefault() : null
                    }
                />
            </div>
        </Container>
    );
};

export default Calendar;
