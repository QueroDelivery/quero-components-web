import React, { InputHTMLAttributes, RefObject } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    width?: string | number;
    textColor?: string;
    inputRef?: RefObject<HTMLInputElement>;
    icon?: IconDefinition;
    iconClassName?: string;
    iconPosition?: 'left' | 'right';
    iconColor?: string;
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: React.MouseEventHandler<HTMLButtonElement>;
        position?: 'left' | 'right';
        className?: string;
    };
    errorColor?: string;
    errorMessage?: string;
    errorClassName?: string;
    errorStyle?: React.CSSProperties;
}
declare function Input({ containerClassName, containerStyle, width, textColor, inputRef, icon, iconClassName, iconPosition, iconColor, action, label, labelClassName, labelStyle, errorColor, errorMessage, errorClassName, errorStyle, ...rest }: InputProps): JSX.Element;
export default Input;
