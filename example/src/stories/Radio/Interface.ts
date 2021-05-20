import { InputHTMLAttributes } from "react";

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | 'style'> {
    label?: string;
    sizeBox?:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive";
    onChange: () => void;
    labelStyle?: React.CSSProperties | any;
}
