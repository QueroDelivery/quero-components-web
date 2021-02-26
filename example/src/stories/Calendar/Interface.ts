import { ReactDatePickerProps } from "react-datepicker";

export interface CalendarProps extends ReactDatePickerProps {
    write?: boolean;
    label?: string;
    labelColor?: string;
    brand?: boolean;
    otherFormatDate?: string;
}
