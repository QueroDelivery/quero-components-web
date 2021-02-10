import { TextAreaProps } from "../TextArea/Interface";

export interface TextAreaFormProps extends TextAreaProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    lengthInfo?: boolean;
    limit?: number;
    minimum?: number;
}
