import React from 'react';
export interface DialogProps {
    open: boolean;
    onClose: Function;
    loading?: boolean;
}
declare const DialogComponent: React.FC<DialogProps>;
export default DialogComponent;
