import React from "react";
import { DropdownProps } from "semantic-ui-react";
interface OptionsProps {
    text: string;
    key: string | number;
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
