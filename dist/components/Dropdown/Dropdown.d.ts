import { CSSProperties } from 'react';
import { DropdownProps as SemanticDropdownProps } from 'semantic-ui-react';
export interface OptionsProps {
    key: string | number;
    text: string;
    value: any;
}
export interface DropdownProps extends SemanticDropdownProps {
    options?: OptionsProps[];
    brand?: boolean;
    textAlign?: 'center';
    errorMessage?: string;
    label?: string;
    line?: boolean;
    containerClassName?: string;
    containerStyle?: CSSProperties;
    errorClassName?: string;
    errorStyle?: CSSProperties;
    labelClassName?: string;
    labelStyle?: CSSProperties;
}
declare function Dropdown({ options, brand, textAlign, errorMessage, label, line, containerClassName, containerStyle, errorClassName, errorStyle, labelClassName, labelStyle, noResultsMessage, ...rest }: DropdownProps): JSX.Element;
export default Dropdown;
