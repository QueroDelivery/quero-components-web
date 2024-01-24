import { ReactNode, useMemo, useRef, CSSProperties } from 'react';

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
  title?: string | ReactNode;
  noBorder?: boolean;
  closeIcon?: boolean;
  children?: ReactNode;
  closeOnDimerClick?: boolean;
  onReturn?(): void;

  className?: string;
  style?: CSSProperties;
  headerClassName?: string;
  headerStyle?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
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
  bodyClassName,
  bodyStyle,
  className,
  style,
  headerClassName,
  headerStyle,
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
        hasTitle={!!title}
        role="dialog"
        className={className}
        style={style}
      >
        {!!title || !!onReturn || closeIcon ? (
          <Header
            role="heading"
            returnIcon={!!onReturn}
            noBorder={noBorder}
            ref={headerDialog}
            className={headerClassName}
            style={headerStyle}
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
              {typeof title === 'string' ? <strong>{title}</strong> : title}
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

        <div
          className={`box-dialog ${bodyClassName || ''}`}
          id="sizeBody"
          style={bodyStyle}
        >
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
