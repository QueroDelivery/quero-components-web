/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Background, Dialog, Header, Icon } from './styles';
import Loader from '../Loader/Loader';
import { colors } from '../../styles/colors';

export interface DialogProps {
  open: boolean;
  onClose: Function;
  loading?: boolean;
  maxHeight?: number | string;
  title?: string;
  onBack?: Function;
  noBorder?: boolean;
  closeIcon?: boolean;
}

const DialogComponent: React.FC<DialogProps> = ({
  open,
  children,
  onClose,
  loading,
  maxHeight,
  title,
  onBack,
  noBorder,
  closeIcon = false,
}) => {
  const [sizeHeader, setSizeHeader] = useState(62);

  useEffect(() => {
    if (document.getElementById('headerDialog')) {
      setSizeHeader(document.getElementById('headerDialog')!.clientHeight);
    }
  }, [document.getElementById('headerDialog')]);

  return (
    <Background
      open={open}
      onClick={event => {
        event.stopPropagation();
        onClose();
      }}
    >
      <Dialog
        open={open}
        onClick={event => event.stopPropagation()}
        maxHeight={maxHeight}
        sizeHeader={sizeHeader}
        loading={loading}
        title={title}
      >
        {title ? (
          <Header iconBack={!!onBack} noBorder={noBorder} id="headerDialog">
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
                onClick={event => {
                  event.stopPropagation();
                  onClose();
                }}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ fontSize: '1.25rem' }}
                  color={colors.brand10}
                />
              </Icon>
            )}
          </Header>
        ) : null}

        <div className="box-dialog" id="sizeBody">
          {loading && (
            <div className="loading-dialog">
              <Loader />
            </div>
          )}
          {children}
        </div>
      </Dialog>
    </Background>
  );
};

export default DialogComponent;
