import { ReactNode } from 'react';
export interface DialogProps {
    open: boolean;
    onClose: Function;
    loading?: boolean;
    maxHeight?: number | string;
    title?: string;
    onBack?: Function;
    noBorder?: boolean;
    closeIcon?: boolean;
    children?: ReactNode;
    closeOnDimerClick?: boolean;
    onReturn?(): void;
}
declare function DialogComponent({ open, children, onClose, loading, maxHeight, title, noBorder, closeOnDimerClick, closeIcon, onReturn, }: DialogProps): JSX.Element;
export default DialogComponent;
