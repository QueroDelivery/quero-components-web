import { CSSProperties, LinkHTMLAttributes, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import Loader from '../Loader/Loader';
import { Shadow, Button, Complement, LoadingCard } from './styles';
import { colors } from '../../styles/colors';

export type TTypes = 'shadow' | 'button' | 'min-shadow' | 'border' | 'none';
export interface CardProps
  extends Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'> {
  type?: TTypes;
  width?: number | string;
  className?: string;
  style?: CSSProperties;
  icon?: IconDefinition;
  iconClassName?: string;
  iconStyle?: CSSProperties;
  iconSize?: SizeProp;
  onClick?(): void;
  loading?: boolean;
  complement?: ReactNode;
  complementStyle?: CSSProperties;
  complementClassName?: string;
  children?: ReactNode;
  childrenStyle?: CSSProperties;
  childrenClassName?: string;
}

function Card({
  children,
  childrenStyle,
  childrenClassName,
  width,
  type = 'shadow',
  style,
  icon,
  iconClassName,
  iconStyle,
  iconSize,
  onClick,
  loading,
  className,
  complement,
  complementStyle,
  complementClassName,
  ...rest
}: CardProps) {
  function renderShadow() {
    return (
      <>
        <Shadow
          className={className}
          width={width}
          style={style}
          type={type}
          data-testid="card"
        >
          {loading && (
            <LoadingCard>
              <Loader />
            </LoadingCard>
          )}
          {children}
        </Shadow>
        {!!complement && (
          <Complement
            data-testid="complement"
            className={complementClassName}
            style={complementStyle}
          >
            {complement}
          </Complement>
        )}
      </>
    );
  }

  function renderButton() {
    return (
      <Button
        className={className}
        style={style}
        onClick={onClick}
        href={rest.href}
        width={width}
        data-testid="card"
      >
        {loading && (
          <LoadingCard>
            <Loader size="sm" />
          </LoadingCard>
        )}

        {icon && (
          <>
            <FontAwesomeIcon
              aria-label="icon"
              color={colors.brandDark}
              icon={icon}
              className={iconClassName}
              style={iconStyle}
              size={iconSize || 'lg'}
            />
          </>
        )}

        <span style={childrenStyle} className={childrenClassName}>
          {children}
        </span>
      </Button>
    );
  }

  switch (type) {
    case 'shadow':
      return renderShadow();
    case 'min-shadow':
      return renderShadow();
    case 'border':
      return renderShadow();
    case 'button':
      return renderButton();
    default:
      return renderShadow();
  }
}

export default Card;
