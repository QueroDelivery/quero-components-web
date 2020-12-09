interface SelectProps {
    active?: boolean;
    brand?: boolean;
    value?: any;
    search?: boolean;
    textAlign?: 'center';
    width?: number;
    error?: string;
    height?: number;
}
interface LabelProps {
    labelColor?: string;
    errorMessage?: string;
}
export declare const Label: import("styled-components").StyledComponent<"span", any, LabelProps, never>;
export declare const SelectBox: import("styled-components").StyledComponent<"div", any, SelectProps, never>;
export declare const LabelError: import("styled-components").StyledComponent<"span", any, LabelProps, never>;
export {};
