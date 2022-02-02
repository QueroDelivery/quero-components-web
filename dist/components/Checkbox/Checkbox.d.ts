import { CSSProperties, InputHTMLAttributes } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
    sizeBox?: sizesTypes;
    onChange?: () => void;
    containerClassName?: string;
    containerStyle?: CSSProperties;
}
declare const _default: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
