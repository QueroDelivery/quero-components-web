import { MouseEventHandler, CSSProperties } from 'react';
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
}
declare const Selection: import("react").ForwardRefExoticComponent<SelectionProps & import("react").RefAttributes<HTMLDivElement>>;
export default Selection;
