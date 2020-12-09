import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import './Calendar.css';
interface CalendarProps extends ReactDatePickerProps {
    write?: boolean;
    label?: string;
    labelColor?: string;
    brand?: boolean;
}
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
