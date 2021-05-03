import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface InputProps {
    requiredText?: boolean;
    isFieldActive?: boolean;
    errorMessage?: any;
    errorColor?: string;
    labelStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    disabled?: boolean;
    width?: string | number;
    textColor?: string;
    icon?: boolean;
    iconPosition?: "left" | "right";
    action?: any;
    actionPosition?: "left" | "right";
    date?: boolean;
}

interface LabelErrorProps {
    errorColor?: string;
}

export const Container = styled.div<InputProps>`
    font-family: MontSerrat !important;
    position: relative;
    opacity: ${(props) => (props.disabled ? "50%" : "100%")};
    width: ${(props) => {
        if (props.width) {
            if (typeof props.width === "string") {
                return props.width;
            } else {
                return `${props.width}px`;
            }
        }
        return "100%";
    }};

    input {
        font-family: MontSerrat !important;
        color: ${(props) =>
            props.textColor ? props.textColor : colors.gray20};
        width: 100%;
        height: 100%;
        padding-top: 20px;
        padding-left: ${(props) => {
            if (props.icon && !props.action) {
                if (props.iconPosition === "right") {
                    return "15px";
                }
                return "40px";
            }

            if (props.action && !props.icon) {
                if (props.actionPosition === "left") {
                    return "40px";
                }
                return "15px";
            }

            if (props.action || props.icon) {
                return "40px";
            }

            return "15px";
        }};
        padding-bottom: 5px;
        padding-right: ${(props) => {
            if (props.icon && !props.action) {
                if (props.iconPosition === "right") {
                    return "40px";
                }
                return "0px";
            }

            if (props.action && !props.icon) {
                if (props.actionPosition === "left") {
                    return "0px";
                }
                return "40px";
            }

            if (props.action && props.icon) {
                return "40px";
            }

            return "0px";
        }};
        border: none;
        outline: none;
        background-color: transparent;

        &::placeholder {
            color: ${colors.default10};
        }
    }

    ${(props) =>
        props.date && !props.isFieldActive
            ? css`
                  input::-webkit-calendar-picker-indicator {
                      display: none !important;
                  }

                  input[type="date"]::-webkit-input-placeholder {
                      display: none !important;
                      visibility: hidden !important;
                      -webkit-appearance: none;
                  }

                  input[type="date"]::-webkit-datetime-edit-fields-wrapper,
                  input[type="date"]::-webkit-datetime-edit-fields-wrapper {
                      visibility: hidden;
                  }
              `
            : null}

    input:disabled {
        background-color: transparent;
    }

    label {
        font-family: MontSerrat !important;
        position: absolute;
        bottom: 0px;
        top: 0px;
        left: 0px;
        width: 100%;
        right: 100%;
        pointer-events: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${(props) => {
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

        ${(props) =>
            props.isFieldActive
                ? css`
                      color: ${colors.brand10};
                  `
                : css`
                      color: ${colors.gray20};
                  `}
    }

    span {
        font-family: MontSerrat !important;
        position: absolute;
        bottom: 5px;
        left: ${(props) => {
            if (props.icon && !props.action) {
                if (props.iconPosition === "right") {
                    return "15px";
                }
                return "40px";
            }

            if (props.action && !props.icon) {
                if (props.actionPosition === "left") {
                    return "40px";
                }
                return "15px";
            }

            if (props.action || props.icon) {
                return "40px";
            }

            return "15px";
        }};
        transition: all 0.3s ease;

        ${(props) =>
            props.isFieldActive
                ? css`
                      transform: translateY(-100%);
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

                          return colors.brand10;
                      }};
                  `
                : css`
                      font-size: 16px;
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

    .icon {
        position: absolute;
        bottom: 0;
        padding: 5px 10px;
        ${(props) => props.iconPosition === "right" && "right: 0;"}
    }

    .icon-action {
        position: absolute;
        bottom: 0;
        padding: 5px 10px;
        ${(props) =>
            props.actionPosition && props.actionPosition === "left"
                ? "left: 0;"
                : "right: 0;"}
        cursor: pointer;
    }
`;

export const LabelError = styled.span<LabelErrorProps>`
    font-family: MontSerrat !important;
    font-size: 10px;
    margin-left: 0;
    color: ${(props) => {
        if (props.errorColor) {
            return props.errorColor;
        }

        return colors.danger20;
    }};
`;
