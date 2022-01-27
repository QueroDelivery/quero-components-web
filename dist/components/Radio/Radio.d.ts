import React, { InputHTMLAttributes } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelStyle?: React.CSSProperties;
    labelClassName?: string;
    onChange: () => void;
    sizeBox?: sizesTypes;
}
declare function Radio({ label, labelStyle, sizeBox, labelClassName, ...rest }: RadioProps): JSX.Element;
export default Radio;
