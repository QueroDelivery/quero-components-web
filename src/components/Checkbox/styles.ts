import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface CheckboxProps {
    disabled?: boolean;
    sizeBox?:
        | 'mini'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'big'
        | 'huge'
        | 'massive';
    checked?: boolean;
}

const Sizes = {
    mini: 'mini',
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    large: 'large',
    big: 'big',
    huge: 'huge',
    massive: 'massive',
};

const size = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '10px';
        case Sizes.tiny:
            return '12px';
        case Sizes.small:
            return '14px';
        case Sizes.medium:
            return '17px';
        case Sizes.large:
            return '20px';
        case Sizes.big:
            return '23px';
        case Sizes.huge:
            return '26px';
        case Sizes.massive:
            return '30px';
        default:
            return size;
    }
};

const sizeChecked = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '8px';
        case Sizes.tiny:
            return '10px';
        case Sizes.small:
            return '11px';
        case Sizes.medium:
            return '13px';
        case Sizes.large:
            return '16px';
        case Sizes.big:
            return '19px';
        case Sizes.huge:
            return '21px';
        case Sizes.massive:
            return '23px';
        default:
            return size;
    }
};

const marginLeft = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '2px';
        case Sizes.tiny:
            return '2px';
        case Sizes.small:
            return '2.5px';
        case Sizes.medium:
            return '3px';
        case Sizes.large:
            return '3px';
        case Sizes.big:
            return '3px';
        case Sizes.huge:
            return '4px';
        case Sizes.massive:
            return '5px';
        default:
            return size;
    }
};

const labelSize = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '10px';
        case Sizes.tiny:
            return '13px';
        case Sizes.small:
            return '14px';
        case Sizes.medium:
            return '16px';
        case Sizes.large:
            return '18px';
        case Sizes.big:
            return '20px';
        case Sizes.huge:
            return '22px';
        case Sizes.massive:
            return '24px';
        default:
            return size;
    }
};

const marginRight = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '5px';
        case Sizes.tiny:
            return '6px';
        case Sizes.small:
            return '7px';
        case Sizes.medium:
            return '8px';
        case Sizes.large:
            return '9px';
        case Sizes.big:
            return '10px';
        case Sizes.huge:
            return '11px';
        case Sizes.massive:
            return '12px';
        default:
            return size;
    }
};

export const Container = styled.div<CheckboxProps>`
    > input {
        display: none;
    }

    label {
        font-size: ${props => {
            if (props.sizeBox) {
                return labelSize(props.sizeBox);
            }

            return '17px';
        }};
        color: ${colors.gray20};
        cursor: ${props => (props.disabled ? 'default' : 'pointer')};
        opacity: ${props => (props.disabled ? 0.5 : 1)};
    }

    > input + div {
        position: relative;
        cursor: ${props => (props.disabled ? 'default' : 'pointer')};
        opacity: ${props => (props.disabled ? 0.5 : 1)};
        display: flex;
        align-items: center;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 1px;
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
            border: 1px solid ${colors.default20};
            background: ${colors.default20};
            border-radius: 5px;
        }
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 1px;
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

            return '-22px';
        }};
        margin-right: ${props => {
            if (props.sizeBox) {
                return marginRight(props.sizeBox);
            }

            return '-22px';
        }};
        font-size: ${props => {
            if (props.sizeBox) {
                return sizeChecked(props.sizeBox);
            }

            return '13px';
        }};
        color: ${props => (props.checked ? colors.white : colors.default20)};
        z-index: 1;
    }
`;
