import React from "react";
import { DropdownProps } from "semantic-ui-react";
interface OptionsProps {
    key: string | number;
    text: string;
    value: any;
}
export interface Props extends DropdownProps {
    options?: OptionsProps[];
    brand?: boolean;
    textAlign?: "center";
    errorMessage?: string;
    label?: string;
    colorLabel?: string;
}
declare const Dropdown: React.FC<Props>;
export default Dropdown;
