import React, { InputHTMLAttributes } from 'react';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React.CSSProperties;
    labelClassName?: string;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    onChange: () => void;
    sizeBox?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}
declare function Radio({ label, labelStyle, sizeBox, containerClassName, containerStyle, labelClassName, ...rest }: InputProps): JSX.Element;
export default Radio;
