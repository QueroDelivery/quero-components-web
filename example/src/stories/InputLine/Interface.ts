import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { InputHTMLAttributes, RefObject } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    width?: string | number; 
    inputRef?: RefObject<HTMLInputElement>;
    action?: { 
        icon: IconDefinition;
        iconColor?: string;
        onClick: () => void;  
        position?: "left" | "right";
    } | null; 
    icon?: IconDefinition;
    iconPosition?: "left" | "right";
    textColor?: string;
    iconColor?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
}