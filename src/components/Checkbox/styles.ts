import styled from 'styled-components';
import { Sizes, sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface CheckboxProps {
  disabled?: boolean;
  sizeBox?: sizesTypes;
  checked?: boolean;
}

const size = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.625rem';
    case Sizes.sm:
      return '0.875rem';
    case Sizes.md:
      return '1.0625rem';
    case Sizes.lg:
      return '1.4375rem';
    case Sizes.xl:
      return '1.875rem';
    default:
      return '1.0625rem';
  }
};

const sizeChecked = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.5rem';
    case Sizes.sm:
      return '0.6875rem';
    case Sizes.md:
      return '0.8125rem';
    case Sizes.lg:
      return '1.1875rem';
    case Sizes.xl:
      return '1.4375rem';
    default:
      return '0.8125rem';
  }
};

const marginLeft = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.0625rem';
    case Sizes.sm:
      return '0.0875rem';
    case Sizes.md:
      return '0.125rem';
    case Sizes.lg:
      return '0.1875rem';
    case Sizes.xl:
      return '0.25rem';
    default:
      return '0.125rem';
  }
};

const labelSize = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '10px';
    case Sizes.sm:
      return '13px';
    case Sizes.md:
      return '16px';
    case Sizes.lg:
      return '20px';
    case Sizes.xl:
      return '24px';
    default:
      return '16px';
  }
};

const marginRight = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.3125rem';
    case Sizes.sm:
      return '0.4375rem';
    case Sizes.md:
      return '0.5rem';
    case Sizes.lg:
      return '0.625rem';
    case Sizes.xl:
      return '0.75rem';
    default:
      return '0.5rem';
  }
};

export const Container = styled.div<CheckboxProps>`
  font-family: MontSerrat !important;
  display: flex;
  align-items: center;

  > input {
    display: none;
  }

  label,
  input + div {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    opacity: ${props => (props.disabled ? 0.5 : 1)};
  }

  label {
    font-size: ${props => {
      if (props.sizeBox) {
        return labelSize(props.sizeBox);
      }

      return '1.0625rem';
    }};
    color: ${colors.gray20};
  }

  > input + div {
    position: relative;

    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      width: ${props => {
        if (props.sizeBox) {
          return size(props.sizeBox);
        }

        return '1.0625rem';
      }};
      height: ${props => {
        if (props.sizeBox) {
          return size(props.sizeBox);
        }

        return '1.0625rem';
      }};
      border: 1px solid ${colors.default20};
      background: ${colors.default20};
      border-radius: 5px;
    }
    &:after {
      content: ' ';
      position: absolute;
      width: ${props => {
        if (props.sizeBox) {
          return size(props.sizeBox);
        }

        return '1.0625rem';
      }};
      height: ${props => {
        if (props.sizeBox) {
          return size(props.sizeBox);
        }

        return '1.0625rem';
      }};
      border: 1px solid ${colors.brandDark};
      background: ${colors.brandDark};
      border-radius: 5px;
      color: ${colors.white};
      text-align: center;
      font-size: 12px;
    }
  }
  > input:not(:checked) + div {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:checked + div {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }

  span {
    margin-left: ${props => {
      if (props.sizeBox) {
        return marginLeft(props.sizeBox);
      }

      return '0.1563rem';
    }};
    margin-right: ${props => {
      if (props.sizeBox) {
        return marginRight(props.sizeBox);
      }

      return '0.5rem';
    }};
    font-size: ${props => {
      if (props.sizeBox) {
        return sizeChecked(props.sizeBox);
      }

      return '0.8125rem';
    }};
    color: ${props => (props.checked ? colors.white : colors.default20)};
    z-index: 1;
  }
`;
