/// <reference types="react" />
import { InputProps } from './Input';
export interface InputFormProps extends InputProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    values: any;
    limit?: number;
    minimum?: number;
    msgErrorValidate?: string;
}
declare function InputForm({ register, errors, validate, name, required, values, limit, minimum, msgErrorValidate, ...rest }: InputFormProps): JSX.Element;
export default InputForm;
