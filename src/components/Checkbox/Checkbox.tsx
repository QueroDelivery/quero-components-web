import React, { InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  labelStyle?: React.CSSProperties;
  sizeBox?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
  onChange?: () => void;
}

const Checkbox: React.FC<InputProps> = ({
  label,
  labelStyle,
  sizeBox,
  ...rest
}) => {
  return (
    <Container
      onClick={() =>
        !rest.disabled ? (rest.onChange ? rest.onChange() : null) : null
      }
      disabled={rest.disabled}
      sizeBox={sizeBox}
      checked={rest.checked}
    >
      <input type="checkbox" {...rest} />
      <div>
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <label style={labelStyle}>{label}</label>
      </div>
    </Container>
  );
};

export default Checkbox;
