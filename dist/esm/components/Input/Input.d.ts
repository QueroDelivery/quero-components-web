import { InputHTMLAttributes, CSSProperties, MouseEventHandler } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
    width?: string | number;
    textColor?: string;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    iconPosition?: 'left' | 'right';
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: MouseEventHandler<HTMLButtonElement>;
        position?: 'left' | 'right';
        className?: string;
        style?: CSSProperties;
    };
    errorColor?: string;
    errorMessage?: string;
    errorClassName?: string;
    errorStyle?: CSSProperties;
}
declare const _default: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
