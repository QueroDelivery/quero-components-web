import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface MoreLessProps {
    disabled?: boolean;
    limit?: number;
    minimum?: number;
    value: number;
    size?: 'small' | 'medium' | 'big';
    noLess?: boolean;
    noMore?: boolean;
}

const Sizes = {
    small: 'small',
    medium: 'medium',
    big: 'big',
};

const widthBtnMoreLess = (size: string) => {
    switch (size) {
        case Sizes.small:
            return '20px';
        case Sizes.medium:
            return '30px';
        case Sizes.big:
            return '40px';
        default:
            return '30px';
    }
};

const heightBtnMoreLess = (size: string) => {
    switch (size) {
        case Sizes.small:
            return '20px';
        case Sizes.medium:
            return '30px';
        case Sizes.big:
            return '40px';
        default:
            return '30px';
    }
};

const widthValueMoreLess = (size: string, value: number) => {
    if (size === Sizes.small) {
        if (value < 100) {
            return '15px';
        }
        if (value < 1000) {
            return '20px';
        }
        if (value < 10000) {
            return '25px';
        }

        return '30px';
    }

    if (size === Sizes.medium) {
        if (value < 100) {
            return '20px';
        }
        if (value < 1000) {
            return '30px';
        }
        if (value < 10000) {
            return '40px';
        }

        return '50px';
    }

    if (size === Sizes.big) {
        if (value < 100) {
            return '30px';
        }
        if (value < 1000) {
            return '40px';
        }
        if (value < 10000) {
            return '55px';
        }

        return '70px';
    }

    return '50px'
};

const fontMoreLess = (size: string) => {
    switch (size) {
        case Sizes.small:
            return '10px';
        case Sizes.medium:
            return '15px';
        case Sizes.big:
            return '22px';
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

    .btn {
        width: ${props => (props.size ? widthBtnMoreLess(props.size) : '30px')};
        font-size: ${props => (props.size ? fontMoreLess(props.size) : '15px')};
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${props =>
        props.size ? heightBtnMoreLess(props.size) : '30px'};
        color: ${colors.gray20};
    }

    .left {
        opacity: ${props => (props.noLess ? '0.2' : '1')};

        cursor: ${props =>
        props.disabled || props.noLess ? 'default' : 'pointer'};
    }

    .right {
        opacity: ${props => (props.noMore ? '0.2' : '1')};

        cursor: ${props =>
        props.disabled || props.noMore ? 'default' : 'pointer'};
    }

    input {
        text-align: center;
        width: ${props =>
        props.size ? widthValueMoreLess(props.size, props.value) : '15px'};
        font-size: ${props => (props.size ? fontMoreLess(props.size) : '15px')};
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
