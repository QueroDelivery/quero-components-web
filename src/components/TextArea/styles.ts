import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface InputProps {
    isFieldActive?: boolean;
    errorMessage?: string;
    errorColor?: string;
    labelStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    disabled?: boolean;
    width?: string;
    height?: number;
    textColor?: string;
}

interface LabelErrorProps {
    errorColor?: string;
}

export const Container = styled.div<InputProps>`
    width: ${props => (props.width ? props.width : '100%')};
    position: relative;

    opacity: ${props => (props.disabled ? '50%' : '100%')};

    textarea {
        color: ${props => (props.textColor ? props.textColor : colors.gray20)};
        resize: none;
        width: 100%;
        border-radius: 20px;
        height: ${props => (props.height ? `${props.height}px` : '100px')};
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
    font-size: 10px;
    margin-left: 0;
    color: ${props => {
        if (props.errorColor) {
            return props.errorColor;
        }

        return colors.danger20;
    }};
`;
