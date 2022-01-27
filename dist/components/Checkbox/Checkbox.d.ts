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
declare function Checkbox({ label, labelClassName, labelStyle, sizeBox, containerClassName, containerStyle, ...rest }: CheckboxProps): JSX.Element;
export default Checkbox;
