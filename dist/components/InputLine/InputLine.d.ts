import React, { InputHTMLAttributes, RefObject } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string | number;
    textColor?: string;
    inputRef?: RefObject<HTMLInputElement>;
    icon?: IconDefinition;
    iconPosition?: 'left' | 'right';
    iconColor?: string;
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: () => void;
        position?: 'left' | 'right';
    };
}
declare const InputLine: React.FC<InputProps>;
export default InputLine;
