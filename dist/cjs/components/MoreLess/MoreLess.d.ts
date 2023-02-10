/// <reference types="react" />
import { sizesTypes } from '../../helpers/FnUtil';
export interface MoreLessProps {
    size?: sizesTypes;
    disabled?: boolean;
    value: number;
    maximum?: number;
    minimum?: number;
    quantityToChange?: number;
    onChange: (newValue: number) => void;
}
declare function MoreLess({ size, disabled, value, maximum, minimum, onChange, quantityToChange, }: MoreLessProps): JSX.Element;
export default MoreLess;
