import React from "react";
export interface ModalProps {
    open: boolean;
    title?: string;
    actions?: React.ReactNode;
    witdh?: number;
    onClose: Function;
    closeOnDimerClick?: boolean;
    loading?: boolean;
    onBack?: Function;
}
declare const ModalComponent: React.FC<ModalProps>;
export default ModalComponent;
