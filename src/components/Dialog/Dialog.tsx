import { ReactNode, useMemo, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Background, Dialog, Header } from './styles';
import Loader from '../Loader/Loader';
import { colors } from '../../styles/colors';

export interface DialogProps {
  open: boolean;
  onClose: Function;
  loading?: boolean;
  maxHeight?: number | string;
  title?: string;
  noBorder?: boolean;
  closeIcon?: boolean;
  children?: ReactNode;
  closeOnDimerClick?: boolean;
  onReturn?(): void;
}

function DialogComponent({
  open,
  children,
  onClose,
  loading = false,
  maxHeight,
  title,
  noBorder,
  closeOnDimerClick = true,
  closeIcon = false,
  onReturn,
}: DialogProps) {
  const headerDialog = useRef<HTMLDivElement | null>(null);

  const sizeHeader = useMemo(() => {
    if (headerDialog.current) return headerDialog.current.clientHeight;

    return 62;
  }, [headerDialog.current]);

  return (
    <Background
      open={open}
      onClick={event => {
        event.stopPropagation();
        if (closeOnDimerClick) onClose();
      }}
      data-testid="background"
    >
      <Dialog
        open={open}
        onClick={event => event.stopPropagation()}
        maxHeight={maxHeight}
        sizeHeader={sizeHeader}
        isLoading={loading}
        title={title}
        role="dialog"
      >
        {!!title || !!onReturn || closeIcon ? (
          <Header
            role="heading"
            returnIcon={!!onReturn}
            noBorder={noBorder}
            ref={headerDialog}
          >
            {!!onReturn && (
              <button onClick={onReturn} aria-label="return">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  size="lg"
                  color={colors.brand10}
                />
              </button>
            )}

            <div>
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
                  style={{ fontSize: '1.25rem' }}
                  color={colors.brand10}
                />
              </button>
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
}

export default DialogComponent;
