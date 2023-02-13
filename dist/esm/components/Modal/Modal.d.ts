import React, { ReactNode } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
export interface ModalProps {
    open: boolean;
    title?: string;
    actions?: React.ReactNode;
    width?: number | string;
    onClose: Function;
    closeOnDimerClick?: boolean;
    loading?: boolean;
    onReturnClick?(): void;
    size?: sizesTypes;
    noBorder?: boolean;
    closeIcon?: boolean;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
}
declare function ModalComponent({ open, title, children, actions, width, onClose, closeOnDimerClick, loading, onReturnClick, size, noBorder, closeIcon, className, style, headerClassName, headerStyle, bodyClassName, bodyStyle, }: ModalProps): JSX.Element;
export default ModalComponent;
