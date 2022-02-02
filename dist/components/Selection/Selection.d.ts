import { Ref, MouseEventHandler, CSSProperties } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
declare type TSelectors = 'switch' | 'toggle' | 'activeInactive';
export interface SelectionProps {
    type: TSelectors;
    checked?: boolean;
    onClick?: MouseEventHandler<HTMLElement>;
    onChange?: MouseEventHandler<HTMLElement>;
    size?: sizesTypes;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    ref?: Ref<HTMLButtonElement>;
}
declare function Selection({ type, checked, onClick, onChange, size, disabled, ref, className, style, }: SelectionProps): JSX.Element | null;
export default Selection;
