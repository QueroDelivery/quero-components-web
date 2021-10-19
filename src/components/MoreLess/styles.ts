import styled from 'styled-components';
import { sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface MoreLessProps {
  disabled?: boolean;
  maximum?: number;
  minimum?: number;
  value: number;
  size: sizesTypes;
}

const widthBtnMoreLess = (size: sizesTypes) => {
  switch (size) {
    case 'xs':
      return '14px';
    case 'sm':
      return '22px';
    case 'md':
      return '30px';
    case 'lg':
      return '38px';
    case 'xl':
      return '46px';
    default:
      return '30px';
  }
};

const heightBtnMoreLess = (size: sizesTypes) => {
  switch (size) {
    case 'xs':
      return '14px';
    case 'sm':
      return '22px';
    case 'md':
      return '30px';
    case 'lg':
      return '38px';
    case 'xl':
      return '46px';
    default:
      return '30px';
  }
};

const widthValueMoreLess = (size: sizesTypes, value: number) => {
  const valueAbs = Math.abs(value);

  switch (size) {
    case 'xs':
      if (valueAbs < 100) {
        return '15px';
      }

      if (valueAbs < 1000) {
        return '20px';
      }

      if (valueAbs < 10000) {
        return '25px';
      }

      return '30px';
    case 'sm': {
      if (valueAbs < 100) {
        return '25px';
      }

      if (valueAbs < 1000) {
        return '30px';
      }

      if (valueAbs < 10000) {
        return '35px';
      }

      return '40px';
    }
    case 'md': {
      if (valueAbs < 100) {
        return '20px';
      }
      if (valueAbs < 1000) {
        return '30px';
      }
      if (valueAbs < 10000) {
        return '40px';
      }

      return '50px';
    }
    case 'lg': {
      if (valueAbs < 100) {
        return '25px';
      }
      if (valueAbs < 1000) {
        return '35px';
      }
      if (valueAbs < 10000) {
        return '50px';
      }

      return '60px';
    }
    case 'xl': {
      if (valueAbs < 100) {
        return '30px';
      }
      if (valueAbs < 1000) {
        return '40px';
      }
      if (valueAbs < 10000) {
        return '55px';
      }

      return '70px';
    }
    default: {
      if (valueAbs < 100) {
        return '20px';
      }
      if (valueAbs < 1000) {
        return '30px';
      }
      if (valueAbs < 10000) {
        return '40px';
      }

      return '50px';
    }
  }
};

const fontMoreLess = (size: sizesTypes) => {
  switch (size) {
    case 'xs':
      return '9px';
    case 'sm':
      return '12px';
    case 'md':
      return '15px';
    case 'lg':
      return '18px';
    case 'xl':
      return '21px';
    default:
      return '15px';
  }
};

export const Container = styled.div<MoreLessProps>`
  font-family: MontSerrat !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.disabled ? '0.5' : '1')};

  button {
    width: ${props => widthBtnMoreLess(props.size)};
    font-size: ${props => fontMoreLess(props.size)};
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => heightBtnMoreLess(props.size)};
    color: ${colors.gray20};
    transition: color 0.2s ease-in-out;

    &:not(:disabled):hover {
      color: ${colors.hover};
    }

    &:disabled {
      opacity: 0.2;
      cursor: default;
    }
  }

  input {
    text-align: center;
    width: ${props =>
      props.size ? widthValueMoreLess(props.size, props.value) : '15px'};
    font-size: ${props => fontMoreLess(props.size)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.gray20};
    border: none;
    outline: none;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input:disabled {
    background-color: transparent;
  }
`;
