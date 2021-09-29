import React from 'react';
import { Props } from './Dropdown';
interface DropdownFormProps extends Omit<Props, 'onChange' | 'value'> {
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
