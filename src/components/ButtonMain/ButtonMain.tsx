import React, { ButtonHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import {
  Button,
  TextFirst,
  TextEnd,
  Icon,
  Amount,
  Notification,
  LoadingContainer,
} from './styles';
import Loader from '../Loader/Loader';
import { colors } from '../../styles/colors';
import { sizesTypes } from '../../helpers/FnUtil';

type IconPositions = 'left' | 'right';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textFirst?: string;
  textFirstClassName?: string;
  textFirstStyle?: React.CSSProperties;
  textEnd?: string;
  textEndClassName?: string;
  textEndStyle?: React.CSSProperties;
  firstStrong?: boolean;
  notStrong?: boolean;
  strong?: boolean;
  loading?: boolean;
  secondary?: boolean;
  notification?: boolean;
  amount?: number;
  backPurple?: boolean;
  width?: number | string;
  icon?: IconDefinition;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
  containerIconClassName?: string;
  containerIconStyle?: React.CSSProperties;
  customIcon?: React.ReactNode;
  iconPosition?: IconPositions;
  noBorder?: boolean;
  tertiary?: boolean;
  size?: sizesTypes;
  rectangular?: boolean;
}

function ButtonMain({
  textFirst,
  textFirstClassName,
  textFirstStyle,
  textEnd,
  textEndClassName,
  textEndStyle,
  firstStrong,
  notStrong,
  strong,
  loading,
  secondary,
  backPurple,
  children,
  notification,
  amount,
  width,
  icon,
  iconClassName,
  iconStyle,
  containerIconClassName,
  containerIconStyle,
  customIcon,
  iconPosition = 'right',
  noBorder,
  tertiary,
  size,
  rectangular,
  ...rest
}: ButtonProps) {
  function renderButtonNotification() {
    return (
      <Notification {...rest}>
        {loading ? (
          <Loader size="sm" />
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '50%',
              padding: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon
                // loading={loading}
                iconPosition={iconPosition}
                hasText={!!textFirst || !!textEnd || !!children}
              >
                <FontAwesomeIcon
                  icon={faBell}
                  size="lg"
                  color={colors.brand30}
                />
              </Icon>
              <span>notificações</span>
            </div>
            <Amount>{amount}</Amount>
          </div>
        )}
      </Notification>
    );
  }

  function renderIcon() {
    if (customIcon)
      return (
        <Icon
          className={containerIconClassName}
          style={containerIconStyle}
          iconPosition={iconPosition}
          hasText={!!textFirst || !!textEnd || !!children}
        >
          {customIcon}
        </Icon>
      );

    return (
      <Icon
        className={containerIconClassName}
        style={containerIconStyle}
        iconPosition={iconPosition}
        hasText={!!textFirst || !!textEnd || !!children}
      >
        <FontAwesomeIcon
          icon={icon!}
          className={iconClassName}
          style={iconStyle}
          data-testid="button-icon"
        />
      </Icon>
    );
  }

  function renderButton() {
    return (
      <Button
        {...rest}
        secondary={secondary}
        backPurple={backPurple}
        width={width}
        icon={icon}
        noBorder={noBorder}
        tertiary={tertiary}
        size={size}
        rectangular={rectangular}
        isLoading={!!loading}
      >
        {(icon || customIcon) && iconPosition === 'left' && renderIcon()}

        {children || (
          <>
            <TextFirst
              className={textFirstClassName}
              style={textFirstStyle}
              hasTextEnd={!!textEnd}
              firstStrong={firstStrong}
              strong={strong}
              notStrong={notStrong}
              tertiary={tertiary}
              size={size}
            >
              {textFirst}
            </TextFirst>
            <TextEnd
              className={textEndClassName}
              style={textEndStyle}
              firstStrong={firstStrong}
              strong={strong}
              notStrong={notStrong}
              tertiary={tertiary}
              size={size}
            >
              {textEnd}
            </TextEnd>
          </>
        )}

        {(icon || customIcon) && iconPosition === 'right' && renderIcon()}

        {loading && (
          <LoadingContainer data-testid="button-loading">
            <Loader size="sm" />
          </LoadingContainer>
        )}
      </Button>
    );
  }

  if (notification) {
    return renderButtonNotification();
  }
  return renderButton();
}

export default ButtonMain;
