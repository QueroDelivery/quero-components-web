import React, { InputHTMLAttributes } from 'react';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React.CSSProperties;
    sizeBox?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
    onChange?: () => void;
}
declare const Checkbox: React.FC<InputProps>;
export default Checkbox;
