import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
interface CalendarProps extends ReactDatePickerProps {
    write?: boolean;
    label?: string;
    labelColor?: string;
    brand?: boolean;
    otherFormatDate?: string;
}
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
