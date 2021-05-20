import { RefObject, TextareaHTMLAttributes } from "react";

export interface TextAreaProps
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
    label?: string;
    lengthInfo?: boolean | number;
    errorMessage?: string;
    width?: number | string;
    height?: number | string;
    textAreaRef?: RefObject<HTMLTextAreaElement>;
    labelColor?: string;
    textColor?: string;
    errorColor?: string;
    containerStyle?: React.CSSProperties | any;
    labelStyle?: React.CSSProperties | any;
}
