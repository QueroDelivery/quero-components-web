import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    labelColor?: string;
    textColor?: string;
    errorMessage?: string;
    errorColor?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    height?: number;
    textAreaRef?: any;
    lengthInfo?: boolean;
}
