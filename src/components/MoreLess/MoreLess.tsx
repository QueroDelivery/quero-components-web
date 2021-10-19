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
        aria-label="minus"
        disabled={disabled || noLess}
        onClick={() => handleChangeValue(value - quantityToChange)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        value={value}
        type="number"
        onChange={event => handleChangeValue(Number(event.target.value))}
        disabled={disabled}
        max={maximum}
        min={minimum}
        readOnly={disabled}
      />
      <button
        aria-label="plus"
        disabled={disabled || noMore}
        onClick={() => handleChangeValue(value + quantityToChange)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </Container>
  );
}

export default MoreLess;
