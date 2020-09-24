import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface SelectionProps {
    size?:
        | 'mini'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'big'
        | 'huge'
        | 'massive';
    disabled?: boolean;
    checked?: boolean;
}

const toggleWidth = 50;
const toggleHeight = 30;
const toggleGutter = 6;

const toggleRadius = toggleHeight / 2;
const toggleControlSsize = toggleHeight - toggleGutter * 2;

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

const widthSwitch = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return 30;
        case Sizes.tiny:
            return 35;
        case Sizes.small:
            return 40;
        case Sizes.medium:
            return 50;
        case Sizes.large:
            return 60;
        case Sizes.big:
            return 70;
        case Sizes.huge:
            return 80;
        case Sizes.massive:
            return 90;
        default:
            return 50;
    }
};

const heightSwitch = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return 20;
        case Sizes.tiny:
            return 22.5;
        case Sizes.small:
            return 25;
        case Sizes.medium:
            return 30;
        case Sizes.large:
            return 35;
        case Sizes.big:
            return 40;
        case Sizes.huge:
            return 45;
        case Sizes.massive:
            return 50;
        default:
            return 30;
    }
};

const sizeGutter = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return 6;
        case Sizes.tiny:
            return 6;
        case Sizes.small:
            return 6;
        case Sizes.medium:
            return 6;
        case Sizes.large:
            return 6;
        case Sizes.big:
            return 6;
        case Sizes.huge:
            return 6;
        case Sizes.massive:
            return 6;
        default:
            return 6;
    }
};

const widthToggle = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return '40px';
        case Sizes.tiny:
            return '50px';
        case Sizes.small:
            return '60px';
        case Sizes.medium:
            return '70px';
        case Sizes.large:
            return '80px';
        case Sizes.big:
            return '90px';
        case Sizes.huge:
            return '100px';
        case Sizes.massive:
            return '110px';
        default:
            return '70px';
    }
};

const fontToggle = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return '8px';
        case Sizes.tiny:
            return '9px';
        case Sizes.small:
            return '10px';
        case Sizes.medium:
            return '11px';
        case Sizes.large:
            return '12px';
        case Sizes.big:
            return '13px';
        case Sizes.huge:
            return '14px';
        case Sizes.massive:
            return '15px';
        default:
            return '11px';
    }
};

const fontActiveInactive = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return '7px';
        case Sizes.tiny:
            return '8px';
        case Sizes.small:
            return '9px';
        case Sizes.medium:
            return '10px';
        case Sizes.large:
            return '11px';
        case Sizes.big:
            return '12px';
        case Sizes.huge:
            return '13px';
        case Sizes.massive:
            return '14px';
        default:
            return '10px';
    }
};

export const Switch = styled.label<SelectionProps>`
    display: block;
    position: relative;
    padding-left: ${props =>
        props.size ? `${widthSwitch(props.size)}px` : `${toggleWidth}px`};
    margin-bottom: 12px;
    cursor: ${props => (props.disabled ? 'normal' : 'pointer')};
    font-size: 22px;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input:checked ~ .control {
        background-color: ${props =>
            props.disabled
                ? `${colors.brandTransparent}`
                : `${colors.brandDark}`};

        &:after {
            left: ${props =>
                props.size
                    ? `${
                          widthSwitch(props.size) -
                          (heightSwitch(props.size) -
                              sizeGutter(props.size) * 2) -
                          sizeGutter(props.size)
                      }px`
                    : `${toggleWidth - toggleControlSsize - toggleGutter}px`};
        }
    }

    .control {
        position: absolute;
        top: 0;
        left: 0;
        height: ${props =>
            props.size ? `${heightSwitch(props.size)}px` : `${toggleHeight}px`};
        width: ${props =>
            props.size ? `${widthSwitch(props.size)}px` : `${toggleWidth}px`};
        border-radius: ${props =>
            props.size
                ? `${heightSwitch(props.size) / 2}px`
                : `${toggleRadius}px`};
        background-color: ${colors.card};
        transition: background-color 0.15s ease-in;

        &:after {
            content: '';
            position: absolute;
            left: 5px;
            top: 5px;
            height: ${props =>
                props.size
                    ? `${
                          heightSwitch(props.size) - sizeGutter(props.size) * 2
                      }px`
                    : `${toggleControlSsize}px`};
            width: ${props =>
                props.size
                    ? `${
                          heightSwitch(props.size) - sizeGutter(props.size) * 2
                      }px`
                    : `${toggleControlSsize}px`};
            border-radius: 50px;
            background-color: white;
            transition: left 0.15s ease-in;
            border: 1px solid ${colors.default10};
        }
    }
`;

export const Toggle = styled.div<SelectionProps>`
    display: flex;

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${props => (props.disabled ? '0.5' : '1')};
        width: ${props => (props.size ? widthToggle(props.size) : '70px')};
        border: 1px solid ${colors.card};
        padding: 8px 0;

        span {
            font-size: ${props =>
                props.size ? fontToggle(props.size) : '11px'};
        }
    }

    .left {
        cursor: ${props =>
            props.disabled
                ? 'default'
                : !props.checked
                ? 'default'
                : 'pointer'};
        background-color: ${props =>
            !props.checked ? `${colors.brand10}` : `${colors.white}`};
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-right: 0;
        transition: 400ms;

        span {
            color: ${props =>
                !props.checked ? `${colors.white}` : `${colors.gray20}`};
        }
    }

    .right {
        cursor: ${props =>
            props.disabled ? 'default' : props.checked ? 'default' : 'pointer'};
        background-color: ${props =>
            props.checked ? `${colors.brand10}` : `${colors.white}`};
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-left: 0;
        transition: 400ms;

        span {
            color: ${props =>
                props.checked ? `${colors.white}` : `${colors.gray20}`};
        }
    }
`;

export const ActiveInactive = styled.div<SelectionProps>`
    display: flex;

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: ${props => (props.disabled ? '0.5' : '1')};
        width: ${props => (props.size ? widthToggle(props.size) : '70px')};
        border: 1px solid ${colors.card};
        padding: 8px 0;

        span {
            font-size: ${props =>
                props.size ? fontActiveInactive(props.size) : '10px'};
        }
    }

    .left {
        cursor: ${props =>
            props.disabled
                ? 'default'
                : !props.checked
                ? 'default'
                : 'pointer'};
        background-color: ${props =>
            !props.checked ? `${colors.brand20}` : `${colors.white}`};
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-right: 0;
        transition: 400ms;

        span {
            color: ${props =>
                !props.checked ? `${colors.white}` : `${colors.gray20}`};
        }
    }

    .right {
        cursor: ${props =>
            props.disabled ? 'default' : props.checked ? 'default' : 'pointer'};
        background-color: ${props =>
            props.checked ? `${colors.brandGreen}` : `${colors.white}`};
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-left: 0;
        transition: 400ms;

        span {
            color: ${props =>
                props.checked ? `${colors.white}` : `${colors.gray20}`};
        }
    }
`;
