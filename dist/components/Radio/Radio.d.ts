import React, { InputHTMLAttributes } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React.CSSProperties;
    labelClassName?: string;
    onChange: () => void;
    sizeBox?: sizesTypes;
}
declare const _default: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
