import styled, { css } from 'styled-components';
import { getMeasurement } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface ContainerProps {
  isFieldActive?: boolean;
  errorMessage?: string;
  errorColor?: string;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  textColor?: string;
}

interface LabelErrorProps {
  errorColor?: string;
}

interface LabelProps {
  labelColor?: string;
  errorMessage?: string;
  errorColor?: string;
}

export const Label = styled.span<LabelProps>`
  font-family: MontSerrat !important;
  font-size: 14px;
  color: ${props => {
    if (props.errorMessage && props.errorColor) {
      return props.errorColor;
    }

    if (props.errorMessage) {
      return colors.danger20;
    }

    if (props.labelColor) {
      return props.labelColor;
    }

    return colors.brand10;
  }};
  margin-left: 15px;
`;

export const Container = styled.div<ContainerProps>`
  font-family: MontSerrat !important;
  width: ${props => getMeasurement(props.width)};
  position: relative;

  opacity: ${props => (props.disabled ? '50%' : '100%')};

  textarea {
    font-family: MontSerrat !important;
    color: ${props => (props.textColor ? props.textColor : colors.gray20)};
    resize: none;
    width: ${props => getMeasurement(props.width)};

    border-radius: 20px;
    height: ${props => getMeasurement(props.height)};

    margin: 0px;
    outline: none;
    padding: 20px;
    border-color: ${props => {
      if (props.errorMessage && props.errorColor) {
        return props.errorColor;
      }

      if (props.errorMessage) {
        return colors.danger20;
      }

      return colors.gray10;
    }};

    &::placeholder {
      color: ${colors.default10};
    }

    -moz-appearance: none;
    -webkit-appearance: none;
  }

  label {
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    right: 100%;
    pointer-events: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${props => {
      if (props.errorMessage && props.errorColor) {
        return props.errorColor;
      }

      if (props.errorMessage) {
        return colors.danger20;
      }

      return colors.gray10;
    }};

    ${props =>
      props.isFieldActive
        ? css`
            color: ${colors.brand10};
          `
        : css`
            color: ${colors.gray20};
          `}
  }

  textarea::-webkit-scrollbar {
    width: 7px;
    border-radius: 50px;
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: ${colors.brand10};
    border-radius: 50px;
  }

  textarea::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.brandTransparent2};
  }
`;

export const LabelError = styled.span<LabelErrorProps>`
  font-family: MontSerrat !important;
  font-size: 10px;
  margin-left: 0;
  margin-top: -2px;
  color: ${props => {
    if (props.errorColor) {
      return props.errorColor;
    }

    return colors.danger20;
  }};
`;

export const Footer = styled.div`
  font-family: MontSerrat !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 10px;
`;

export const LabelLengthInfo = styled.span`
  font-size: 10px;
  color: ${colors.gray10};
`;
