import {
  useState,
  InputHTMLAttributes,
  useEffect,
  CSSProperties,
  Ref,
  MouseEventHandler,
  FocusEvent,
  forwardRef,
  useRef,
  KeyboardEvent,
  AnimationEvent,
} from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, InputContainer, LabelError } from './styles';
import { colors } from '../../styles/colors';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  labelStyle?: CSSProperties;

  width?: string | number;
  textColor?: string;

  icon?: IconDefinition;
  iconClassName?: string;
  iconStyle?: CSSProperties;
  iconPosition?: 'left' | 'right';

  action?: {
    icon: IconDefinition;
    iconColor?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    position?: 'left' | 'right';
    className?: string;
    style?: CSSProperties;
  };

  errorColor?: string;
  errorMessage?: string;
  errorClassName?: string;
  errorStyle?: CSSProperties;
}

function Input(
  {
    width,
    textColor,

    icon,
    iconClassName,
    iconStyle,
    iconPosition,
    action,

    label,
    labelClassName,
    labelStyle,

    errorColor,
    errorMessage,
    errorClassName,
    errorStyle,
    ...rest
  }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  const [isFieldActive, setIsFieldActive] = useState(() => {
    return false;
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rest.value) {
      setIsFieldActive(true);
    }
  }, [rest.value]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validRef = (ref as any) || inputRef;

    if (validRef.current && validRef.current.value) {
      setIsFieldActive(true);
    }
  }, []);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (!isFieldActive || !!event.currentTarget.value) setIsFieldActive(true);

    if (rest.onFocus) rest.onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (isFieldActive && !rest.value && !event.currentTarget.value)
      setIsFieldActive(false);

    if (rest.onBlur) rest.onBlur(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setIsFieldActive(true);
    }

    if (rest.onKeyDown) {
      rest.onKeyDown(event);
    }
  };

  const handleAnimationStart = (event: AnimationEvent<HTMLInputElement>) => {
    if (event.animationName === 'onAutoFillStart') {
      setIsFieldActive(true);
    }

    if (rest.onAnimationStart) {
      rest.onAnimationStart(event);
    }
  };

  return (
    <Container role="group" hasError={!!errorMessage}>
      <InputContainer
        isFieldActive={isFieldActive}
        className={rest.className}
        style={rest.style}
        width={width}
        disabled={rest.disabled}
        textColor={textColor}
        icon={!!icon}
        iconPosition={iconPosition}
        action={action}
        actionPosition={action?.position}
        date={rest.type === 'date'}
        errorMessage={errorMessage}
        data-testid="input-container"
        errorColor={errorColor}
      >
        {icon && (
          <div className="icon" data-testid="icon-container">
            <FontAwesomeIcon
              aria-label="icon"
              className={iconClassName}
              style={iconStyle}
              icon={icon}
              color={colors.brand10}
            />
          </div>
        )}

        {action && (
          <button
            className={`icon-action ${action.className || ''}`}
            style={action.style}
            onClick={action.onClick}
            data-testid="action-container"
          >
            <FontAwesomeIcon
              aria-label="action-icon"
              icon={action.icon}
              color={action.iconColor || colors.brand10}
            />
          </button>
        )}
        <input
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFieldActive ? rest.placeholder : undefined}
          ref={ref || inputRef}
          onAnimationStart={handleAnimationStart}
          onKeyDown={handleKeyDown}
        />
        <div className="label-container" data-testid="label-container">
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
        <LabelError
          errorColor={errorColor}
          className={errorClassName}
          style={errorStyle}
        >
          {errorMessage}
        </LabelError>
      )}
    </Container>
  );
}

export default forwardRef(Input);
