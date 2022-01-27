import React, { InputHTMLAttributes, RefObject, CSSProperties } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    width?: string | number;
    textColor?: string;
    inputRef?: RefObject<HTMLInputElement>;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    iconPosition?: 'left' | 'right';
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: React.MouseEventHandler<HTMLButtonElement>;
        position?: 'left' | 'right';
        className?: string;
        style?: CSSProperties;
    };
    errorColor?: string;
    errorMessage?: string;
    errorClassName?: string;
    errorStyle?: React.CSSProperties;
}
declare function Input({ width, textColor, inputRef, icon, iconClassName, iconStyle, iconPosition, action, label, labelClassName, labelStyle, errorColor, errorMessage, errorClassName, errorStyle, ...rest }: InputProps): JSX.Element;
export default Input;
