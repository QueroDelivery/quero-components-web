import "../../styles/default.scss";

import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Background, Modal, Header, Body, Actions, Icon } from "./styles";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { colors } from "../../styles/colors";

export interface ModalProps {
    open: boolean;
    title: string;
    body: React.ReactNode;
    actions?: React.ReactNode;
    witdh?: number;
    onClose: Function;
    closeOnDimerClick?: boolean;
}

const ButtonMain: React.FC<ModalProps> = ({
    open,
    title,
    body,
    actions,
    witdh,
    onClose,
    closeOnDimerClick,
}) => {
    return (
        <Background
            open={open}
            onClick={() => (closeOnDimerClick ? onClose() : null)}
        >
            <Modal witdh={witdh} onClick={(event) => event.stopPropagation()}>
                <Header>
                    <strong>{title}</strong>
                    <Icon onClick={() => onClose()}>
                        <FontAwesomeIcon
                            icon={faTimes}
                            size="lg"
                            color={colors.brand10}
                        />
                    </Icon>
                </Header>
                <Body>{body}</Body>
                {actions && <Actions>{actions}</Actions>}
            </Modal>
        </Background>
    );
};

export default ButtonMain;
