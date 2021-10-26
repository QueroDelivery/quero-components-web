import { CSSProperties, LinkHTMLAttributes, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from '../Loader/Loader';
import { colors } from '../../styles/colors';
import { Shadow, Button, Complement } from './styles';

export type TTypes = 'shadow' | 'button' | 'min-shadow' | 'border' | 'none';
export interface CardProps
  extends Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'> {
  type?: TTypes;
  width?: number | string;
  style?: CSSProperties;
  icon?: IconDefinition;
  sizeIcon?:
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | 'lg'
    | 'sm'
    | 'xs';
  colorIcon?: string;
  text?: string;
  colorText?: string;
  onClick?(): void;
  loading?: boolean;
  className?: string;
  id?: string;
  complement?: ReactNode;
  complementStyle?: CSSProperties;
  complementClassName?: string;
  children?: ReactNode;
}

function Card({
  children,
  width,
  type = 'shadow',
  style,
  icon,
  sizeIcon,
  colorIcon,
  text,
  colorText,
  onClick,
  loading,
  className,
  id,
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
          id={id}
          data-testid="card"
        >
          {loading && (
            <div className="loading-card">
              <Loader />
            </div>
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
        colorText={colorText}
        onClick={onClick}
        href={rest.href}
        width={width}
        id={id}
        data-testid="card"
      >
        {icon && (
          <>
            <FontAwesomeIcon
              aria-label="icon"
              icon={icon}
              color={colorIcon || colors.brandDark}
              size={sizeIcon || 'lg'}
            />
          </>
        )}

        <span>{text}</span>
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
