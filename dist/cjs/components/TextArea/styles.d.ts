interface ContainerProps {
    isFieldActive?: boolean;
    errorMessage?: string;
    errorColor?: string;
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    textColor?: string;
}
interface LabelErrorProps {
    errorColor?: string;
}
interface LabelProps {
    labelColor?: string;
    errorMessage?: string;
    errorColor?: string;
}
export declare const Label: import("styled-components").StyledComponent<"span", any, LabelProps, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
export declare const LabelError: import("styled-components").StyledComponent<"span", any, LabelErrorProps, never>;
export declare const Footer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LabelLengthInfo: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
