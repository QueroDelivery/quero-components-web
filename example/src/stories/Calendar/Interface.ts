import { ReactDatePickerProps } from 'react-datepicker';

export interface CalendarProps extends ReactDatePickerProps {
  label?: string;
  labelColor?: string;
  brand?: boolean;
  otherFormatDate?: string;
}
