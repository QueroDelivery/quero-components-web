import "../../styles/default.scss";

import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Background, Dialog } from "./styles";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { colors } from "../../styles/colors";

export interface DialogProps {
    open: boolean;
    body: React.ReactNode;
    onClose: Function;
}

const DialogComponent: React.FC<DialogProps> = ({ open, body, onClose }) => {
    return (
        <Background open={open} onClick={() => onClose()}>
            <Dialog open={open} onClick={(event) => event.stopPropagation()}>{body}</Dialog>
        </Background>
    );
};

export default DialogComponent;
