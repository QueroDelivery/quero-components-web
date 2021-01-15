/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loader from "../Loader/Loader";
import { Background, Modal, Header, Body, Actions, Icon } from "./styles";
import { faTimes, faAngleLeft } from "@fortawesome/pro-light-svg-icons";
import { colors } from "../../styles/colors";

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

const ModalComponent: React.FC<ModalProps> = ({
    open,
    title,
    children,
    actions,
    width,
    onClose,
    closeOnDimerClick,
    loading,
    onBack,
    size,
    noBorder,
    closeIcon = true,
}) => {
    useEffect(() => {
        if (open) {
            window.addEventListener("keydown", (event) => escModal(event));
        } else {
            window.removeEventListener("keydown", (event) => escModal(event));
        }

        return window.removeEventListener("keydown", (event) =>
            escModal(event)
        );
    }, [open]);

    function escModal(event: KeyboardEvent) {
        if (open && event.key == "Escape" && closeOnDimerClick) {
            console.log("oi");
            event.stopPropagation();
            onClose();
        }
    }

    return (
        <Background
            open={open}
            onClick={(event) => {
                if (closeOnDimerClick) {
                    event.stopPropagation();
                    onClose();
                }
            }}
        >
            <Modal
                size={size}
                width={width}
                onClick={(event) => event.stopPropagation()}
            >
                <Header iconBack={onBack ? true : false} noBorder={noBorder}>
                    <div className="name-icon-modal">
                        {onBack ? (
                            <Icon onClick={() => onBack()}>
                                <FontAwesomeIcon
                                    icon={faAngleLeft}
                                    size="lg"
                                    color={colors.brand10}
                                />
                            </Icon>
                        ) : null}
                        <strong>{title}</strong>
                    </div>
                    {closeIcon && (
                        <Icon
                            onClick={(event) => {
                                event.stopPropagation();
                                onClose();
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faTimes}
                                size="lg"
                                color={colors.brand10}
                            />
                        </Icon>
                    )}
                </Header>
                <Body>
                    {loading && (
                        <div className="loading-modal">
                            <Loader />
                        </div>
                    )}
                    {children}
                </Body>
                {actions && <Actions>{actions}</Actions>}
            </Modal>
        </Background>
    );
};

export default ModalComponent;
