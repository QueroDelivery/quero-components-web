/* eslint-disable react/prop-types */
import '../../styles/default.css';

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from '../Loader/Loader';
import { Background, Modal, Header, Body, Actions, Icon } from './styles';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { colors } from '../../styles/colors';

export interface ModalProps {
    open: boolean;
    title?: string;
    actions?: React.ReactNode;
    witdh?: number;
    onClose: Function;
    closeOnDimerClick?: boolean;
    loading?: boolean;
}

const ModalComponent: React.FC<ModalProps> = ({
    open,
    title,
    children,
    actions,
    witdh,
    onClose,
    closeOnDimerClick,
    loading,
}) => {
    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', event => escModal(event));
        } else {
            window.removeEventListener('keydown', event => escModal(event));
        }

        return window.removeEventListener('keydown', event => escModal(event));
    }, [open]);

    function escModal(event: KeyboardEvent) {
        if (open && event.keyCode === 27 && closeOnDimerClick) {
            onClose();
        }
    }

    return (
        <Background
            open={open}
            onClick={() => (closeOnDimerClick ? onClose() : null)}
        >
            <Modal witdh={witdh} onClick={event => event.stopPropagation()}>
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
                <Body loading={loading ? loading : undefined}>
                    {loading ? (
                        <div className="loading-modal">
                            <Loader />
                        </div>
                    ) : (
                        children
                    )}
                </Body>
                {actions && <Actions>{actions}</Actions>}
            </Modal>
        </Background>
    );
};

export default ModalComponent;
