import React from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
declare type TSelectors = 'switch' | 'toggle' | 'activeInactive';
export interface SelectionProps {
    type: TSelectors;
    checked?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onChange?: React.MouseEventHandler<HTMLElement>;
    size?: sizesTypes;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    ref?: React.RefObject<any>;
}
declare function Selection({ type, checked, onClick, onChange, size, disabled, ref, className, style, }: SelectionProps): JSX.Element | null;
export default Selection;
