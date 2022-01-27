/// <reference types="react" />
import { DropdownProps } from './Dropdown';
export interface DropdownFormProps extends Omit<DropdownProps, 'onChange' | 'value'> {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    setValue: any;
    clearError: any;
    value?: any;
}
declare function DropdownForm({ value, clearError, errors, name, register, required, setValue, validate, ...rest }: DropdownFormProps): JSX.Element;
export default DropdownForm;
