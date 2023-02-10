import React from 'react';
interface InputProps {
    requiredText?: boolean;
    isFieldActive?: boolean;
    errorMessage?: any;
    errorColor?: string;
    labelStyle?: React.CSSProperties;
    disabled?: boolean;
    width?: string | number;
    textColor?: string;
    icon?: boolean;
    iconPosition?: 'left' | 'right';
    action?: any;
    actionPosition?: 'left' | 'right';
    date?: boolean;
}
interface LabelErrorProps {
    errorColor?: string;
}
export declare const InputContainer: import("styled-components").StyledComponent<"div", any, InputProps, never>;
export declare const LabelError: import("styled-components").StyledComponent<"span", any, LabelErrorProps, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    hasError?: boolean | undefined;
}, never>;
export {};
