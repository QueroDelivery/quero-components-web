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

const topChecked = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '2px';
        case Sizes.tiny:
            return '2px';
        case Sizes.small:
            return '2px';
        case Sizes.medium:
            return '2px';
        case Sizes.large:
            return '3px';
        case Sizes.big:
            return '3px';
        case Sizes.huge:
            return '2px';
        case Sizes.massive:
            return '3px';
        default:
            return size;
    }
};

const leftChecked = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '2px';
        case Sizes.tiny:
            return '2px';
        case Sizes.small:
            return '2px';
        case Sizes.medium:
            return '3px';
        case Sizes.large:
            return '3px';
        case Sizes.big:
            return '3px';
        case Sizes.huge:
            return '3px';
        case Sizes.massive:
            return '4px';
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

const paddingLeft = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return '15px';
        case Sizes.tiny:
            return '18px';
        case Sizes.small:
            return '20px';
        case Sizes.medium:
            return '25px';
        case Sizes.large:
            return '28px';
        case Sizes.big:
            return '32px';
        case Sizes.huge:
            return '35px';
        case Sizes.massive:
            return '40px';
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
        padding-left: ${props => {
            if (props.sizeBox) {
                return paddingLeft(props.sizeBox);
            }

            return '25px';
        }};
        cursor: ${props => (props.disabled ? 'default' : 'pointer')};
        opacity: ${props => (props.disabled ? 0.5 : 1)};
        display: flex;
        align-items: center;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 1px;

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
        display: absolute;
        top: ${props => {
            if (props.sizeBox) {
                return topChecked(props.sizeBox);
            }

            return '2px';
        }};
        left: ${props => {
            if (props.sizeBox) {
                return leftChecked(props.sizeBox);
            }

            return '3px';
        }};
        position: absolute;
        font-size: ${props => {
            if (props.sizeBox) {
                return sizeChecked(props.sizeBox);
            }

            return '13px';
        }};
        color: ${colors.white};
        z-index: 1;
    }
`;
