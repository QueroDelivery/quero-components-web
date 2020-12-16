import { InputHTMLAttributes } from "react";

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    labelStyle?: React.CSSProperties;
    onChange: () => void;
    sizeBox?:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive";
}
