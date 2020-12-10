import React from 'react';
interface OptionsProps {
    text: string;
    id: string | number;
    value: any;
}
export interface DropdownProps {
    brand?: boolean;
    options: OptionsProps[];
    value: any;
    onChange: (value: any) => void;
    placeholder?: string;
    textAlign?: 'center';
    search?: boolean;
    loading?: boolean;
    width?: number;
    errorMessage?: string;
    label?: string;
    labelColor?: string;
    dropdownRef?: any;
    height?: number;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
