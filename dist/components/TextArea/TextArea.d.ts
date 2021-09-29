import React, { TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelColor?: string;
    textColor?: string;
    errorMessage?: string;
    errorColor?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: number | string;
    height?: number | string;
    textAreaRef?: any;
    lengthInfo?: boolean | number;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
