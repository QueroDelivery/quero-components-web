import React from 'react';
import { DropdownProps } from './Dropdown';
interface DropdownFormProps extends Omit<DropdownProps, 'onChange' | 'value'> {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    setValue: any;
    clearError: any;
    value?: any;
}
declare const DropdownForm: React.FC<DropdownFormProps>;
export default DropdownForm;
