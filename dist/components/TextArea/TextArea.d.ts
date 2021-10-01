import React, { TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelColor?: string;
    labelStyle?: React.CSSProperties;
    labelClassName?: string;
    containerStyle?: React.CSSProperties;
    textColor?: string;
    errorMessage?: string;
    errorColor?: string;
    lengthInfo?: boolean | number;
    width?: number | string;
    height?: number | string;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
