import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  onChange: () => void;
  sizeBox?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
}

function Radio({
  label,
  labelStyle,
  sizeBox,
  containerClassName,
  containerStyle,
  labelClassName,
  ...rest
}: RadioProps) {
  return (
    <Container
      onClick={!rest.disabled && rest.onChange ? rest.onChange : undefined}
      disabled={rest.disabled}
      sizeBox={sizeBox}
      className={containerClassName}
      style={containerStyle}
      role="radio"
    >
      <input data-testid="input-radio" type="radio" {...rest} />

      <div>
        <label className={labelClassName} style={labelStyle}>
          {label}
        </label>
      </div>
    </Container>
  );
}

export default Radio;
