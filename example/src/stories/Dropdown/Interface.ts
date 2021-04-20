import { DropdownProps } from "semantic-ui-react";

interface OptionsProps {
    text: string;
    key: string | number;
    value: any;
}

export interface Props extends DropdownProps {
    label: string;   
    options: OptionsProps[];
    errorMessage: string; 
    brand: boolean;
    textAlign: "center";
    line: boolean; 
    colorLabel?: string;
}