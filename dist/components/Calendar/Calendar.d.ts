import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
interface CalendarProps extends ReactDatePickerProps {
    label?: string;
    labelColor?: string;
    brand?: boolean;
    otherFormatDate?: string;
}
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
