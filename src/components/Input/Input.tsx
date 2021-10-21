/* eslint-disable react/prop-types */
import React, {
  useState,
  InputHTMLAttributes,
  useEffect,
  RefObject,
} from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputContainer, LabelError } from './styles';
import { colors } from '../../styles/colors';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;

  containerClassName?: string;
  containerStyle?: React.CSSProperties;

  width?: string | number;
  textColor?: string;
  inputRef?: RefObject<HTMLInputElement>;

  icon?: IconDefinition;
  iconClassName?: string;
  iconPosition?: 'left' | 'right';
  iconColor?: string;

  action?: {
    icon: IconDefinition;
    iconColor?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    position?: 'left' | 'right';
    className?: string;
  };

  errorMessage?: string;
  errorClassName?: string;
  errorStyle?: React.CSSProperties;
}

function Input({
  containerClassName,
  containerStyle,
  width,
  textColor,
  inputRef,

  icon,
  iconClassName,
  iconPosition,
  iconColor,
  action,

  label,
  labelClassName,
  labelStyle,
  errorMessage,
  errorClassName,
  errorStyle,
  ...rest
}: InputProps) {
  const [isFieldActive, setIsFieldActive] = useState(false);

  useEffect(() => {
    if (rest.value) {
      setIsFieldActive(true);
    }
  }, [rest.value]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!isFieldActive || !!event.currentTarget.value) {
      setIsFieldActive(true);
    }

    if (rest.onFocus) {
      setImmediate(rest.onFocus);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (isFieldActive && !rest.value && !event.currentTarget.value) {
      setIsFieldActive(false);
    }

    if (rest.onBlur) {
      setImmediate(rest.onBlur);
    }
  };

  return (
    <div role="group">
      <InputContainer
        isFieldActive={isFieldActive}
        className={containerClassName}
        style={containerStyle}
        width={width}
        disabled={rest.disabled ? rest.disabled : undefined}
        textColor={textColor}
        icon={!!icon}
        iconPosition={iconPosition}
        action={action}
        actionPosition={action?.position}
        date={rest.type === 'date'}
        errorMessage={errorMessage}
      >
        {icon && (
          <div className="icon">
            <FontAwesomeIcon
              className={iconClassName}
              icon={icon}
              color={iconColor || colors.brand10}
            />
          </div>
        )}

        {action && (
          <button
            className={`icon-action ${action.className || ''}`}
            onClick={action.onClick}
          >
            <FontAwesomeIcon
              icon={action.icon}
              color={action.iconColor || colors.brand10}
            />
          </button>
        )}
        <input
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFieldActive ? rest.placeholder : ''}
          ref={inputRef}
        />
        <div className="label-container">
          <label
            htmlFor={rest.name}
            className={labelClassName}
            style={labelStyle}
          >
            {label}
          </label>
        </div>
      </InputContainer>
      {!!errorMessage && (
        <LabelError className={errorClassName} style={errorStyle}>
          {errorMessage}
        </LabelError>
      )}
    </div>
  );
}

export default Input;
