import styled from 'styled-components';
import { Sizes, sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface CheckboxProps {
  disabled?: boolean;
  sizeBox?: sizesTypes;
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
      return size;
  }
};

const sizeChecked = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.125rem';
    case Sizes.sm:
      return '0.375rem';
    case Sizes.md:
      return '0.5625rem';
    case Sizes.lg:
      return '0.9375rem';
    case Sizes.xl:
      return '1.375rem';
    default:
      return size;
  }
};

const labelSize = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.625rem';
    case Sizes.sm:
      return '0.875rem';
    case Sizes.md:
      return '1rem';
    case Sizes.lg:
      return '1.25rem';
    case Sizes.xl:
      return '1.5rem';
    default:
      return size;
  }
};

const paddingLeft = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.9375rem';
    case Sizes.sm:
      return '1.25rem';
    case Sizes.md:
      return '1.5625rem';
    case Sizes.lg:
      return '2rem';
    case Sizes.xl:
      return '2.5rem';
    default:
      return size;
  }
};

const paddingTop = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.25rem';
    case Sizes.sm:
      return '0.0625rem';
    case Sizes.md:
      return '0rem';
    case Sizes.lg:
      return '0rem';
    case Sizes.xl:
      return '0.125rem';
    default:
      return size;
  }
};

const topBoxBefore = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.3125rem';
    case Sizes.sm:
      return '0.1875rem';
    case Sizes.md:
      return '0.0625rem';
    case Sizes.lg:
      return '0rem';
    case Sizes.xl:
      return '0rem';
    default:
      return size;
  }
};

const topBoxAfter = (size: string | number) => {
  switch (size) {
    case Sizes.xs:
      return '0.5625rem';
    case Sizes.sm:
      return '0.4375rem';
    case Sizes.md:
      return '0.3125rem';
    case Sizes.lg:
      return '0.25rem';
    case Sizes.xl:
      return '0.25rem';
    default:
      return size;
  }
};

export const Container = styled.div<CheckboxProps>`
  font-family: MontSerrat !important;

  &,
  label,
  input {
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }

  > input {
    display: none;
  }

  label {
    font-size: ${props => {
      if (props.sizeBox) {
        return labelSize(props.sizeBox);
      }

      return '1.0625rem';
    }};
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    color: ${colors.gray20};
    padding-top: ${props => {
      if (props.sizeBox) {
        return paddingTop(props.sizeBox);
      }

      return '0rem';
    }};
  }

  > input + div {
    position: relative;
    padding-left: ${props => {
      if (props.sizeBox) {
        return paddingLeft(props.sizeBox);
      }

      return '1.5625rem';
    }};
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    display: flex;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: ${props => {
        if (props.sizeBox) {
          return topBoxBefore(props.sizeBox);
        }

        return '1px';
      }};
      width: ${props => {
        if (props.sizeBox) {
          return size(props.sizeBox);
        }

        return '17px';
      }};
      height: ${props => {
        if (props.sizeBox) {
          return size(props.sizeBox);
        }

        return '17px';
      }};
      border: 1px solid ${colors.default30};
      background: ${colors.default20};
      border-radius: 50%;
    }
    &:after {
      content: ' ';
      position: absolute;
      left: 4px;
      top: ${props => {
        if (props.sizeBox) {
          return topBoxAfter(props.sizeBox);
        }

        return '5px';
      }};
      width: ${props => {
        if (props.sizeBox) {
          return sizeChecked(props.sizeBox);
        }

        return '9px';
      }};
      height: ${props => {
        if (props.sizeBox) {
          return sizeChecked(props.sizeBox);
        }

        return '9px';
      }};
      border: 1px solid ${colors.gray20};
      background: ${colors.gray20};
      border-radius: 50%;
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
`;
