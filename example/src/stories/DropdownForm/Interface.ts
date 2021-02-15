import { Props } from "../Dropdown/Interface";

export interface DropdownFormProps extends Omit<Props, "onChange" | "value"> {
    required?: boolean;
    name: string;
    errors: any;
    register: any;
    validate?: any;
    setValue: any;
    clearError: any;
    value?: any;
    line?: boolean;
}
