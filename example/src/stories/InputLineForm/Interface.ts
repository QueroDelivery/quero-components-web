import { InputProps } from "../InputLine/Interface";

export interface InputFormProps extends InputProps {
    name: string;
    required?: boolean;
    validate?: () => void;
    errors: any;
    register: any;
    values: any;
    minimum?: number;
    limit?: number;
}