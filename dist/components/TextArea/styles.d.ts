/// <reference types="react" />
interface InputProps {
    isFieldActive?: boolean;
    errorMessage?: string;
    errorColor?: string;
    labelStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    disabled?: boolean;
    width?: string;
    height?: number;
    textColor?: string;
}
interface LabelErrorProps {
    errorColor?: string;
}
interface LabelProps {
    labelColor?: string;
    errorMessage?: string;
}
export declare const Label: import("styled-components").StyledComponent<"span", any, LabelProps, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, InputProps, never>;
export declare const LabelError: import("styled-components").StyledComponent<"span", any, LabelErrorProps, never>;
export declare const Footer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LabelLengthInfo: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
