import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface InputProps {
    requiredText?: boolean;
    isFieldActive?: boolean;
    errorMessage?: any;
    errorColor?: string;
    labelStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    disabled?: boolean;
    width?: string;
    textColor?: string;
}

interface LabelErrorProps {
    errorColor?: string;
}

export const Container = styled.div<InputProps>`
    width: ${props => (props.width ? props.width : '100%')};
    position: relative;

    opacity: ${props => (props.disabled ? '50%' : '100%')};

    input {
        color: ${props => (props.textColor ? props.textColor : colors.gray20)};
        width: 100%;
        height: 100%;
        padding-top: 20px;
        padding-left: 15px;
        padding-bottom: 5px;
        border: none;
        outline: none;
        background-color: transparent;

        &::placeholder {
            color: ${colors.default10};
        }

        -moz-appearance: none;
        -webkit-appearance: none;
    }

    input:disabled {
        background-color: transparent;
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
            if (
                (props.requiredText || props.errorMessage) &&
                props.errorColor
            ) {
                return props.errorColor;
            }

            if (props.requiredText || props.errorMessage) {
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

    span {
        position: absolute;
        bottom: 5px;
        left: 15px;
        transition: all 0.3s ease;

        ${props =>
            props.isFieldActive
                ? css`
                      transform: translateY(-100%);
                      font-size: 12px;
                      color: ${(props: InputProps) => {
                          if (
                              (props.requiredText || props.errorMessage) &&
                              props.errorColor
                          ) {
                              return props.errorColor;
                          }

                          if (props.requiredText || props.errorMessage) {
                              return colors.danger20;
                          }

                          return colors.brand10;
                      }};
                  `
                : css`
                      font-size: 14px;
                      color: ${(props: InputProps) => {
                          if (
                              (props.requiredText || props.errorMessage) &&
                              props.errorColor
                          ) {
                              return props.errorColor;
                          }

                          if (props.requiredText || props.errorMessage) {
                              return colors.danger20;
                          }

                          return colors.gray20;
                      }};
                  `}
    }
`;

export const LabelError = styled.span<LabelErrorProps>`
    font-size: 10px;
    margin-left: 0;
    color: ${props => {
        if (props.errorColor) {
            return props.errorColor;
        }

        return colors.danger20;
    }};
`;
