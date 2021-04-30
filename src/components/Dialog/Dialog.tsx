/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from "react";

import { Background, Dialog } from "./styles";
import Loader from "../Loader/Loader";

export interface DialogProps {
    open: boolean;
    onClose: Function;
    loading?: boolean;
    maxHeight?: number | string;
}

const DialogComponent: React.FC<DialogProps> = ({
    open,
    children,
    onClose,
    loading,
    maxHeight,
}) => {
    return (
        <Background
            open={open}
            onClick={(event) => {
                event.stopPropagation();
                onClose();
            }}
        >
            <Dialog
                open={open}
                onClick={(event: any) => event.stopPropagation()}
                maxHeight={maxHeight}
            >
                {loading && (
                    <div className="loading-dialog">
                        <Loader />
                    </div>
                )}
                <div className="box-dialog">{children}</div>
            </Dialog>
        </Background>
    );
};

export default DialogComponent;
