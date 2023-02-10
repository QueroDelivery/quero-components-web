import React, { TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelColor?: string;
    labelStyle?: React.CSSProperties;
    labelClassName?: string;
    errorClassName?: string;
    errorStyle?: React.CSSProperties;
    errorMessage?: string;
    errorColor?: string;
    textColor?: string;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    lengthInfo?: boolean | number;
    lengthInfoClassName?: string;
    lengthInfoStyle?: React.CSSProperties;
    width?: number | string;
    height?: number | string;
}
declare const _default: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
