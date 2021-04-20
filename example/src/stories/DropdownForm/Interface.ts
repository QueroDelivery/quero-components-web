import { Props } from "../Dropdown/Interface";

export interface DropdownFormProps extends Omit<Props, "onChange" | "value"> {
    name: string;  
    required?: boolean;
    errors: any;
    validate?: () => void;
    register: any;   
    setValue: any;
    clearError: any;
    value?: boolean | number | string | (boolean | number | string)[];
    line?: boolean;
} 