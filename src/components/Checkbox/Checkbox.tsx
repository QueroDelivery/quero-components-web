import { CSSProperties, InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';
import { sizesTypes } from '../../helpers/FnUtil';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  labelClassName?: string;
  labelStyle?: CSSProperties;
  sizeBox?: sizesTypes;
  onChange?: () => void;
  containerClassName?: string;
  containerStyle?: CSSProperties;
}

function Checkbox({
  label,
  labelClassName,
  labelStyle,
  sizeBox,
  containerClassName,
  containerStyle,
  ...rest
}: CheckboxProps) {
  return (
    <Container
      onClick={!rest.disabled ? rest.onChange : undefined}
      disabled={rest.disabled}
      sizeBox={sizeBox}
      checked={rest.checked}
      className={containerClassName}
      style={containerStyle}
      role="group"
    >
      <input type="checkbox" {...rest} data-testid="checkbox" />
      <div>
        <span aria-label="check">
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <label className={labelClassName} style={labelStyle}>
          {label}
        </label>
      </div>
    </Container>
  );
}

export default Checkbox;
