import { useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';
import { sizesTypes } from '../../helpers/FnUtil';

export interface MoreLessProps {
  size?: sizesTypes;
  disabled?: boolean;
  value: number;
  maximum?: number;
  minimum?: number;
  quantityToChange?: number;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: number) => void;
}

function MoreLess({
  size = 'md',
  disabled,
  value,
  maximum,
  minimum = 0,
  onChange,
  quantityToChange = 1,
}: MoreLessProps) {
  const noLess = useMemo(() => {
    if (value <= minimum) {
      return true;
    }

    return false;
  }, [minimum, value]);

  const noMore = useMemo(() => {
    if (typeof maximum == 'number' && value >= maximum) {
      return true;
    }

    return false;
  }, [maximum, value]);

  function handleChangeValue(newValue: number) {
    if (typeof maximum == 'number' && newValue > maximum) {
      return onChange(maximum);
    }

    if (newValue < minimum) return onChange(minimum);

    onChange(newValue);
  }

  return (
    <Container
      maximum={maximum}
      minimum={minimum}
      value={value}
      size={size}
      disabled={disabled}
      role="group"
    >
      <button
        disabled={disabled || noLess}
        onClick={() => handleChangeValue(value - quantityToChange)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        value={value || value === 0 ? value.toString() : ''}
        type="number"
        onChange={event => onChange(Number(event.target.value))}
        disabled={disabled}
      />
      <button
        disabled={disabled || noMore}
        onClick={() => handleChangeValue(value + quantityToChange)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </Container>
  );
}

export default MoreLess;
