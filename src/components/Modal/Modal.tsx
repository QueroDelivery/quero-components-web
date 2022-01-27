/* eslint-disable react/prop-types */
import React, { KeyboardEvent, ReactNode, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { Background, Modal, Header, Body, Actions } from './styles';
import { colors } from '../../styles/colors';
import { sizesTypes } from '../../helpers/FnUtil';

import Loader from '../Loader/Loader';

export interface ModalProps {
  open: boolean;
  title?: string;
  actions?: React.ReactNode;
  width?: number | string;
  onClose: Function;
  closeOnDimerClick?: boolean;
  loading?: boolean;
  onReturnClick?(): void;
  size?: sizesTypes;
  noBorder?: boolean;
  closeIcon?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  bodyClassName?: string;
  bodyStyle?: React.CSSProperties;
}

function ModalComponent({
  open,
  title,
  children,
  actions,
  width,
  onClose,
  closeOnDimerClick,
  loading,
  onReturnClick,
  size = 'md',
  noBorder,
  closeIcon = true,
  className,
  style,
  headerClassName,
  headerStyle,
  bodyClassName,
  bodyStyle,
}: ModalProps) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const keydownListener: any = (event: KeyboardEvent<Element>) => {
      escModal(event);
    };
    if (open) {
      window.addEventListener('keydown', keydownListener);
    }

    return () => {
      window.removeEventListener('keydown', keydownListener);
    };
  }, [open]);

  function escModal(event: KeyboardEvent) {
    if (open && event.key == 'Escape' && closeOnDimerClick) {
      event.stopPropagation();
      onClose();
    }
  }

  return (
    <Background
      onClick={event => {
        if (closeOnDimerClick) {
          event.stopPropagation();
          onClose();
        }
      }}
      className={`${open ? 'open' : ''}`}
      data-testid="modal-background"
    >
      <Modal
        className={className}
        style={style}
        size={size}
        width={width}
        onClick={event => event.stopPropagation()}
        role="dialog"
      >
        <Header
          className={headerClassName}
          style={headerStyle}
          iconBack={!!onReturnClick}
          noBorder={noBorder}
          role="heading"
        >
          <div className="name-icon-modal">
            {!!onReturnClick && (
              <button
                onClick={event => {
                  event.stopPropagation();
                  onReturnClick();
                }}
                aria-label="return"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="lg"
                  color={colors.brand10}
                />
              </button>
            )}
            <strong>{title}</strong>
          </div>
          {closeIcon && (
            <button
              onClick={event => {
                event.stopPropagation();
                onClose();
              }}
              aria-label="close"
            >
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: 20 }}
                color={colors.brand10}
              />
            </button>
          )}
        </Header>
        <Body className={bodyClassName} style={bodyStyle}>
          {loading && (
            <div className="loading-modal">
              <Loader />
            </div>
          )}
          {children}
        </Body>
        {!!actions && <Actions>{actions}</Actions>}
      </Modal>
    </Background>
  );
}

export default ModalComponent;
