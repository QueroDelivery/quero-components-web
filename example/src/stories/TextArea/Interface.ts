import { RefObject, TextareaHTMLAttributes } from "react";

export interface TextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string; 
    lengthInfo?: boolean | number; 
    errorMessage?: string; 
    width?: string; 
    height?: number;
    textAreaRef?: RefObject<HTMLTextAreaElement>;
    labelColor?: string; 
    textColor?: string;
    errorColor?: string; 
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
}