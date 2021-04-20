import { InputProps } from "../InputLine/Interface";

export interface InputFormProps extends InputProps {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: () => void;
    values: any;
    limit?: number;
    minimum?: number;
}
