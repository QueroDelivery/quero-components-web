import React, { InputHTMLAttributes } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';

import { Container } from './styles';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  labelStyle?: React.CSSProperties;
  labelClassName?: string;
  onChange: () => void;
  sizeBox?: sizesTypes;
}

function Radio({
  label,
  labelStyle,
  sizeBox,
  labelClassName,
  ...rest
}: RadioProps) {
  return (
    <Container
      onClick={!rest.disabled && rest.onChange ? rest.onChange : undefined}
      disabled={rest.disabled}
      sizeBox={sizeBox}
      className={rest.className}
      style={rest.style}
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
