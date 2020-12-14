import { DropdownProps } from "semantic-ui-react";

interface OptionsProps {
    text: string;
    key: string | number;
    value: any;
}

// export interface DropdownProps {
//     brand?: boolean;
//     options: OptionsProps[];
//     value: any;
//     onChange: (value: any) => void;
//     placeholder?: string;
//     textAlign?: "center";
//     search?: boolean;
//     loading?: boolean;
//     width?: number;
//     errorMessage?: string;
//     label?: string;
//     labelColor?: string;
//     dropdownRef?: any;
//     height?: number;
// }
export interface Props extends DropdownProps {
    options: OptionsProps[];
    brand: boolean;
    textAlign: "center";
    errorMessage: string;
    label: string;
}
