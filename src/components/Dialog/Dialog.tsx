/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React from 'react';

import { Background, Dialog } from './styles';

export interface DialogProps {
    open: boolean;
    body: React.ReactNode;
    onClose: Function;
}

const DialogComponent: React.FC<DialogProps> = ({ open, body, onClose }) => {
    return (
        <Background open={open} onClick={() => onClose()}>
            <Dialog
                open={open}
                onClick={(event: any) => event.stopPropagation()}
            >
                {body}
            </Dialog>
        </Background>
    );
};

export default DialogComponent;
