import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import { sizesTypes } from '../../helpers/FnUtil';
export interface CalendarProps extends ReactDatePickerProps {
    label?: string;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    brand?: boolean;
    otherFormatDate?: string;
    size?: sizesTypes;
}
declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
