import React, { InputHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string;
    textColor?: string;
    inputRef?: any;
    icon?: IconDefinition;
    iconPosition?: "left" | "right";
    iconColor?: string;
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: () => void;
        position?: "left" | "right";
    } | null;
}
declare const InputLine: React.FC<InputProps>;
export default InputLine;
