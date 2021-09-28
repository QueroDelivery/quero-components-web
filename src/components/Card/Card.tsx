import React, { LinkHTMLAttributes, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from '../Loader/Loader';
import { colors } from '../../styles/colors';
import { Shadow, Button, Complement } from './styles';

export type TTypes = 'shadow' | 'button' | 'min-shadow' | 'border' | 'none';
interface CardProps extends Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'> {
  type?: TTypes;
  width?: number | string;
  style?: React.CSSProperties;
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
  complementStyle?: React.CSSProperties;
  complementClassName?: string;
}

const Card: React.FC<CardProps> = ({
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
}) => {
  function renderShadow() {
    if (complement) {
      return (
        <div>
          <Shadow
            className={className}
            width={width}
            style={style}
            type={type}
            id={id}
          >
            {loading && (
              <div className="loading-card">
                <Loader />
              </div>
            )}
            {children}
          </Shadow>
          <Complement className={complementClassName} style={complementStyle}>
            {complement}
          </Complement>
        </div>
      );
    }

    return (
      <Shadow
        className={className}
        width={width}
        style={style}
        type={type}
        id={id}
      >
        {loading && (
          <div className="loading-card">
            <Loader />
          </div>
        )}
        {children}
      </Shadow>
    );
  }

  function renderButton() {
    return (
      <Button
        style={style}
        colorText={colorText}
        onClick={onClick}
        href={rest.href}
        width={width}
        className={className}
        id={id}
      >
        {icon && (
          <React.Fragment>
            <FontAwesomeIcon
              icon={icon}
              color={colorIcon || colors.brandDark}
              size={sizeIcon || 'lg'}
            />
          </React.Fragment>
        )}

        <span>{text}</span>
      </Button>
    );
  }

  switch (type) {
    case 'shadow' || 'min-shadow' || 'border':
      return renderShadow();
    case 'button':
      return renderButton();
    default:
      return renderShadow();
  }
};

export default Card;
