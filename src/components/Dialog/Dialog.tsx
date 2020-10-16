/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React from 'react';

import { Background, Dialog } from './styles';
import Loader from '../Loader/Loader'

export interface DialogProps {
    open: boolean;
    onClose: Function;
    loading?: boolean;
}

const DialogComponent: React.FC<DialogProps> = ({
    open,
    children,
    onClose,
    loading,
}) => {
    return (
        <Background open={open} onClick={() => onClose()}>
            <Dialog
                loading={loading}
                open={open}
                onClick={(event: any) => event.stopPropagation()}
            >
                {loading && (
                    <div className="loading-dialog">
                        <Loader />
                    </div>
                )}
                {children}
            </Dialog>
        </Background>
    );
};

export default DialogComponent;
