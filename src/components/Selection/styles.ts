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
            return '40px !important';
        case Sizes.tiny:
            return '50px !important';
        case Sizes.small:
            return '60px !important';
        case Sizes.medium:
            return '70px !important';
        case Sizes.large:
            return '80px !important';
        case Sizes.big:
            return '90px !important';
        case Sizes.huge:
            return '100px !important';
        case Sizes.massive:
            return '110px !important';
        default:
            return '70px !important';
    }
};

const fontToggle = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return '8px !important';
        case Sizes.tiny:
            return '9px !important';
        case Sizes.small:
            return '10px !important';
        case Sizes.medium:
            return '11px !important';
        case Sizes.large:
            return '12px !important';
        case Sizes.big:
            return '13px !important';
        case Sizes.huge:
            return '14px !important';
        case Sizes.massive:
            return '15px !important';
        default:
            return '11px !important';
    }
};

const fontActiveInactive = (size: string) => {
    switch (size) {
        case Sizes.mini:
            return '7px !important';
        case Sizes.tiny:
            return '8px !important';
        case Sizes.small:
            return '9px !important';
        case Sizes.medium:
            return '10px !important';
        case Sizes.large:
            return '11px !important';
        case Sizes.big:
            return '12px !important';
        case Sizes.huge:
            return '13px !important';
        case Sizes.massive:
            return '14px !important';
        default:
            return '10px !important';
    }
};

export const Switch = styled.label<SelectionProps>`
    display: flex !important;
    flex-direction: row !important;
    position: relative !important;
    /* padding-left: ${props =>
        props.size ? `${widthSwitch(props.size)}px` : `${toggleWidth}px`}; */
    /* margin-bottom: 12px; */
    cursor: ${props => (props.disabled ? 'normal !important' : 'pointer !important')};
    font-size: 22px !important;
    user-select: none !important;

    input {
        position: absolute !important;
        opacity: 0 !important;
        cursor: pointer !important;
        height: 0 !important;
        width: 0 !important;
        display: none !important;
    }

    input:checked ~ .control {
        background-color: ${props =>
            props.disabled
                ? `${colors.brandTransparent} !important`
                : `${colors.brandDark} !important`};

        &:after {
            left: ${props =>
                props.size
                    ? `${
                          widthSwitch(props.size) -
                          (heightSwitch(props.size) -
                              sizeGutter(props.size) * 2) -
                          sizeGutter(props.size)
                      }px !important`
                    : `${toggleWidth - toggleControlSsize - toggleGutter}px !important`};
        }
    }

    .control {
        height: ${props =>
            props.size ? `${heightSwitch(props.size)}px !important` : `${toggleHeight}px !important`};
        width: ${props =>
            props.size ? `${widthSwitch(props.size)}px !important` : `${toggleWidth}px !important`};
        border-radius: ${props =>
            props.size
                ? `${heightSwitch(props.size) / 2}px !important`
                : `${toggleRadius}px !important`};
        background-color: ${colors.card} !important;
        transition: background-color 0.15s ease-in !important;

        &:after {
            content: '' !important;
            position: absolute !important;
            left: 5px !important;
            top: 5px !important;
            height: ${props =>
                props.size
                    ? `${
                          heightSwitch(props.size) - sizeGutter(props.size) * 2
                      }px !important`
                    : `${toggleControlSsize}px !important`};
            width: ${props =>
                props.size
                    ? `${
                          heightSwitch(props.size) - sizeGutter(props.size) * 2
                      }px !important`
                    : `${toggleControlSsize}px !important`};
            border-radius: 50px !important;
            background-color: white !important;
            transition: left 0.15s ease-in !important;
            border: 1px solid ${colors.default10} !important;
        }
    }
`;

export const Toggle = styled.div<SelectionProps>`
    display: flex !important;
    flex-direction: row !important;

    .btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: ${props => (props.disabled ? '0.5 !important' : '1 !important')};
        width: ${props => (props.size ? widthToggle(props.size) : '70px !important')};
        border: 1px solid ${colors.card} !important;
        padding: 8px 0 !important;

        span {
            font-size: ${props =>
                props.size ? fontToggle(props.size) : '11px !important'};
        }
    }

    .left {
        cursor: ${props =>
            props.disabled
                ? 'default !important'
                : !props.checked
                ? 'default !important'
                : 'pointer !important'};
        background-color: ${props =>
            !props.checked ? `${colors.brand10} !important` : `${colors.white} !important`};
        border-top-left-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
        border-right: 0 !important;
        transition: 400ms !important;

        span {
            color: ${props =>
                !props.checked ? `${colors.white} !important` : `${colors.gray20} !important`};
        }
    }

    .right {
        cursor: ${props =>
            props.disabled ? 'default !important' : props.checked ? 'default !important' : 'pointer !important'};
        background-color: ${props =>
            props.checked ? `${colors.brand10} !important` : `${colors.white} !important`};
        border-top-right-radius: 20px !important;
        border-bottom-right-radius: 20px !important;
        border-left: 0 !important;
        transition: 400ms !important;

        span {
            color: ${props =>
                props.checked ? `${colors.white} !important` : `${colors.gray20} !important`};
        }
    }
`;

export const ActiveInactive = styled.div<SelectionProps>`
    display: flex !important;
    flex-direction: row !important;

    .btn {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        opacity: ${props => (props.disabled ? '0.5 !important' : '1 !important')};
        width: ${props => (props.size ? widthToggle(props.size) : '70px !important')};
        border: 1px solid ${colors.card} !important;
        padding: 8px 0 !important;

        span {
            font-size: ${props =>
                props.size ? fontActiveInactive(props.size) : '10px !important'};
        }
    }

    .left {
        cursor: ${props =>
            props.disabled
                ? 'default !important'
                : !props.checked
                ? 'default !important'
                : 'pointer !important'};
        background-color: ${props =>
            !props.checked ? `${colors.brand20} !important` : `${colors.white} !important`};
        border-top-left-radius: 20px !important;
        border-bottom-left-radius: 20px !important;
        border-right: 0 !important;
        transition: 400ms !important;

        span {
            color: ${props =>
                !props.checked ? `${colors.white} !important` : `${colors.gray20} !important`};
        }
    }

    .right {
        cursor: ${props =>
            props.disabled ? 'default !important' : props.checked ? 'default !important' : 'pointer !important'};
        background-color: ${props =>
            props.checked ? `${colors.brandGreen} !important` : `${colors.white} !important`};
        border-top-right-radius: 20px !important;
        border-bottom-right-radius: 20px !important;
        border-left: 0 !important;
        transition: 400ms !important;

        span {
            color: ${props =>
                props.checked ? `${colors.white} !important` : `${colors.gray20} !important`};
        }
    }
`;
