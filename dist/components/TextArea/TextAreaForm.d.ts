/// <reference types="react" />
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
declare function TextAreaForm({ register, errors, validate, name, required, limit, minimum, ...rest }: TextAreaFormProps): JSX.Element;
export default TextAreaForm;
