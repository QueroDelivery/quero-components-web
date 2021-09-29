import React from 'react';
import { InputProps } from './InputLine';
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
declare const InputLineForm: React.FC<InputFormProps>;
export default InputLineForm;
