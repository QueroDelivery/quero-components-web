import { DropdownProps } from "semantic-ui-react";

interface OptionsProps {
    text: string;
    key: string | number;
    value: any;
}

export interface Props extends DropdownProps {
    options: OptionsProps[];
    brand: boolean;
    textAlign: "center";
    errorMessage: string;
    label: string;
    line: boolean;
    colorLabel?: string;
}
