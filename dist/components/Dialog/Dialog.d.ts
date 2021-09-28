import React from 'react';
export interface DialogProps {
    open: boolean;
    onClose: Function;
    loading?: boolean;
    maxHeight?: number | string;
    title?: string;
    onBack?: Function;
    noBorder?: boolean;
    closeIcon?: boolean;
}
declare const DialogComponent: React.FC<DialogProps>;
export default DialogComponent;
