import React from 'react';
declare type TSelectors = 'switch' | 'toggle' | 'activeInactive';
export declare type TSizes = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
export interface SelectionProps {
    type: TSelectors;
    checked?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onChange?: React.MouseEventHandler<HTMLElement>;
    size?: TSizes;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    ref?: React.RefObject<any>;
}
declare function Selection({ type, checked, onClick, onChange, size, disabled, ref, className, style, }: SelectionProps): JSX.Element | null;
export default Selection;
