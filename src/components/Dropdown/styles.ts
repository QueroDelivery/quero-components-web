import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface SelectProps {
    active?: boolean;
    brand?: boolean;
    value?: any;
    search?: boolean;
    textAlign?: 'center';
    width?: number;
    error?: string;
}

interface LabelProps {
    labelColor?: string;
    errorMessage?: string;
}

export const Label = styled.span<LabelProps>`
    font-size: 14px;
    color: ${props => {
        if (props.errorMessage) {
            return colors.brand20;
        }

        if (props.labelColor) {
            return props.labelColor;
        }

        return colors.brand10;
    }};
    margin-left: 15px;
`;

export const SelectBox = styled.div<SelectProps>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: ${props => (props.width ? `${props.width}%` : '100%')};
    margin-top: 5px;
    margin-bottom: -3px;

    > .options-container {
        position: absolute;
        background-color: ${colors.white};
        border: 1px solid
            ${props => (props.error ? colors.brand20 : colors.default20)};
        margin: 44px 0;
        width: ${props => (props.width ? `${props.width}%` : '100%')};
        border-top: 0;
        color: ${props => {
            if (props.error) {
                return colors.brand20;
            }
            if (props.brand) {
                return colors.brand10;
            }

            return colors.gray20;
        }};
        transition: all 0.3s;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        overflow-y: auto;
        max-height: 0;
        opacity: 0;

        order: 1;
        -moz-appearance: none;
        -webkit-appearance: none;
        z-index: 2;
    }

    .active {
        max-height: 258px;
        opacity: 1;
    }

    .options-container::-webkit-scrollbar {
        width: 7px;
        border-radius: 50px;
        z-index: -1px;
    }

    .options-container::-webkit-scrollbar-thumb {
        background-color: ${colors.brand10};
        border-radius: 50px;
    }

    .options-container::-webkit-scrollbar-thumb:hover {
        background-color: ${colors.brandTransparent2};
    }

    .selected {
        color: ${props => {
            if (props.error) {
                return colors.brand20;
            }

            if (props.brand && props.active && props.value) {
                return colors.brandDark;
            }

            if (props.brand && props.value) {
                return colors.brand10;
            }

            if (props.brand && !props.value) {
                return colors.brandTransparent;
            }

            if (props.value) {
                return colors.gray20;
            }

            return colors.default20;
        }};
        font-weight: ${props => (props.brand ? 'bold' : 'normal')};
        padding: 0;
        cursor: pointer;
        background-color: ${props => {
            if (props.error) {
                return colors.error;
            }

            if (props.brand) {
                return colors.brandLight;
            }

            return colors.white;
        }};
        position: relative;
        border: ${props => {
            if (props.error) {
                return `1px solid ${colors.brand20}`;
            }

            if (props.brand) {
                return `1px solid ${colors.brandLight}`;
            }

            return `1px solid ${colors.default20}`;
        }};

        order: 0;

        display: flex;
        align-items: center;

        ${props =>
            props.active
                ? css`
                      border-top-left-radius: 20px;
                      border-top-right-radius: 20px;
                      /* border-bottom: 0px; */
                  `
                : css`
                      border-radius: 20px;
                  `}

        input {
            padding: 12px 35px 12px 24px;
            font-size: 16px;
            border: none;
            outline: none;
            width: 100%;
            text-align: ${props =>
                props.textAlign === 'center' ? 'center' : 'space-between'};
            color: ${props => {
                if (props.error) {
                    return colors.brand20;
                }

                if (props.brand && props.active && props.value) {
                    return colors.brandDark;
                }

                if (props.brand && props.value) {
                    return colors.brand10;
                }

                if (props.brand && !props.value) {
                    return colors.brandTransparent;
                }

                if (props.value) {
                    return colors.gray20;
                }

                return colors.default20;
            }};
            background-color: ${props => {
                if (props.error) {
                    return colors.error;
                }

                if (props.brand) {
                    return colors.brandLight;
                }

                return colors.white;
            }};
            cursor: pointer;

            ${props =>
                props.active
                    ? css`
                          border-top-left-radius: 20px;
                          border-top-right-radius: 20px;
                          border-bottom: 0px;
                      `
                    : css`
                          border-radius: 20px;
                      `}
            -moz-appearance: none;
            -webkit-appearance: none;
        }

        input::placeholder {
            color: ${props => {
                if (props.error) {
                    return colors.brand20;
                }

                if (props.brand) {
                    return colors.brandLight;
                }

                return colors.default20;
            }};
        }
    }

    .icon {
        position: absolute;
        right: 20px;
    }

    .option {
        padding: 12px 24px;
        cursor: pointer;

        label {
            cursor: pointer;
        }

        input {
            display: none;
        }
    }

    .no-value {
        color: ${colors.default20};
    }

    .no-value:hover {
        background-color: ${colors.white} !important;
    }

    .option:hover {
        background-color: ${colors.hover};
    }

    .active-option {
        background-color: ${colors.hover};
    }
`;

export const LabelError = styled.span<LabelProps>`
    font-size: 10px;
    color: ${colors.brand20};
`;
