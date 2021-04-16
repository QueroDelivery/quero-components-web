import { TextAreaProps } from "../TextArea/Interface";

export interface TextAreaFormProps extends TextAreaProps {
    name: string;
    lengthInfo?: boolean;
    required?: boolean;
    validate?: any;
    errors: any;
    register: any;
    minimum?: number;
    limit?: number;
}
