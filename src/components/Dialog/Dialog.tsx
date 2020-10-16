/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React from 'react';

import { Background, Dialog } from './styles';

export interface DialogProps {
    open: boolean;
    onClose: Function;
}

const DialogComponent: React.FC<DialogProps> = ({
    open,
    children,
    onClose,
}) => {
    return (
        <Background open={open} onClick={() => onClose()}>
            <Dialog
                open={open}
                onClick={(event: any) => event.stopPropagation()}
            >
                {children}
            </Dialog>
        </Background>
    );
};

export default DialogComponent;
