import React from 'react';
import { InputProps } from './InputLine';
export interface InputFormProps extends InputProps {
    required?: boolean;
    name: string;
    errors: any;
    register?: any;
    validate?: any;
    values: any;
    onChange(value: any): void;
    setError: any;
    isSubmitted: boolean;
    limit?: number;
    minimum?: number;
}
declare const InputMoneyForm: React.FC<InputFormProps>;
export default InputMoneyForm;
