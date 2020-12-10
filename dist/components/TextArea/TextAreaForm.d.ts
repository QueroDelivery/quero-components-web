import React from 'react';
import { TextAreaProps } from './TextArea';
export interface TextAreaFormProps extends TextAreaProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    limit?: number;
    minimum?: number;
}
declare const TextAreaForm: React.FC<TextAreaFormProps>;
export default TextAreaForm;
