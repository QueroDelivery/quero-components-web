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
    lengthInfo?: boolean | number;
    lengthInfoClassName?: string;
    lengthInfoStyle?: React.CSSProperties;
    width?: number | string;
    height?: number | string;
}
declare function TextArea({ label, labelClassName, labelStyle, labelColor, errorClassName, errorStyle, errorMessage, errorColor, containerStyle, textColor, width, height, lengthInfo, lengthInfoClassName, lengthInfoStyle, ...rest }: TextAreaProps): JSX.Element;
export default TextArea;
