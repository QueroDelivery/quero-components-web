import React from "react";
export interface ModalProps {
    open: boolean;
    title?: string;
    actions?: React.ReactNode;
    width?: number | string;
    onClose: Function;
    closeOnDimerClick?: boolean;
    loading?: boolean;
    onBack?: Function;
    size?: "mini" | "tiny" | "small" | "large" | "fullscreen";
    noBorder?: boolean;
    closeIcon?: boolean;
}
declare const ModalComponent: React.FC<ModalProps>;
export default ModalComponent;