import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { TSizes } from './Selection';

interface SelectionProps {
  size?: TSizes;
  disabled?: boolean;
  checked?: boolean;
}

const toggleWidth = 50;
const toggleHeight = 30;
const toggleGutter = 5;

const toggleRadius = toggleHeight / 2;
const toggleControlSsize = toggleHeight - toggleGutter * 2;

const Sizes: Record<TSizes, TSizes> = {
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
      return 5;
    case Sizes.tiny:
      return 5;
    case Sizes.small:
      return 5;
    case Sizes.medium:
      return 5;
    case Sizes.large:
      return 5;
    case Sizes.big:
      return 5;
    case Sizes.huge:
      return 5;
    case Sizes.massive:
      return 5;
    default:
      return 5;
  }
};

const widthToggle = (size: TSizes) => {
  switch (size) {
    case Sizes.mini:
      return '40px !important';
    case Sizes.tiny:
      return '3.125rem !important';
    case Sizes.small:
      return '3.75rem !important';
    case Sizes.medium:
      return '4.0625rem !important';
    case Sizes.large:
      return '4.375rem !important';
    case Sizes.big:
      return '5rem !important';
    case Sizes.huge:
      return '5.625rem !important';
    case Sizes.massive:
      return '6.25rem !important';
    default:
      return '4.0625rem !important';
  }
};

const fontToggle = (size: TSizes) => {
  switch (size) {
    case Sizes.mini:
      return '0.5rem !important';
    case Sizes.tiny:
      return '0.5625rem !important';
    case Sizes.small:
      return '0.625rem !important';
    case Sizes.medium:
      return '0.6875rem !important';
    case Sizes.large:
      return '0.75rem !important';
    case Sizes.big:
      return '0.8125rem !important';
    case Sizes.huge:
      return '0.875rem !important';
    case Sizes.massive:
      return '0.9375rem !important';
    default:
      return '0.6875rem !important';
  }
};

const fontActiveInactive = (size: TSizes) => {
  switch (size) {
    case Sizes.mini:
      return '0.4375rem !important';
    case Sizes.tiny:
      return '0.5rem !important';
    case Sizes.small:
      return '0.5625rem !important';
    case Sizes.medium:
      return '0.625rem !important';
    case Sizes.large:
      return '0.6875rem !important';
    case Sizes.big:
      return '0.75rem !important';
    case Sizes.huge:
      return '0.8125rem !important';
    case Sizes.massive:
      return '0.875rem !important';
    default:
      return '0.625rem !important';
  }
};

export const Switch = styled.button<SelectionProps>`
  font-family: MontSerrat !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative !important;
  /* padding-left: ${props =>
    props.size ? `${widthSwitch(props.size)}px` : `${toggleWidth}px`}; */
  /* margin-bottom: 12px; */
  cursor: ${props =>
    props.disabled ? 'not-allowed !important' : 'pointer !important'};
  font-size: 1.375rem !important;
  user-select: none !important;

  div {
    position: absolute !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    display: none !important;
  }

  .control {
    height: ${props =>
      props.size
        ? `${heightSwitch(props.size)}px !important`
        : `${toggleHeight}px !important`};
    width: ${props =>
      props.size
        ? `${widthSwitch(props.size)}px !important`
        : `${toggleWidth}px !important`};
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

  div.checked ~ .control {
    background-color: ${props =>
      props.disabled
        ? `${colors.brandTransparent} !important`
        : `${colors.brandDark} !important`};

    &:after {
      left: ${props =>
        props.size
          ? `${
              widthSwitch(props.size) -
              (heightSwitch(props.size) - sizeGutter(props.size) * 2) -
              sizeGutter(props.size)
            }px !important`
          : `${toggleWidth - toggleControlSsize - toggleGutter}px !important`};
    }
  }
`;

export const Toggle = styled.button<SelectionProps>`
  font-family: MontSerrat !important;
  display: flex !important;
  flex-direction: row !important;
  opacity: ${props => (props.disabled ? '0.5 !important' : '1 !important')};

  cursor: ${props =>
    props.disabled ? 'not-allowed !important' : 'pointer !important'};

  .btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: ${props =>
      props.size ? widthToggle(props.size) : '4rem !important'};
    border: 1px solid ${colors.card} !important;
    padding: 0.5rem 0 !important;

    span {
      font-size: ${props =>
        props.size ? fontToggle(props.size) : '0.6875rem !important'};
    }
  }

  .left {
    background-color: ${props =>
      !props.checked
        ? `${colors.brand10} !important`
        : `${colors.white} !important`};
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
    border-right: 0 !important;
    transition: 400ms !important;

    color: ${props =>
      !props.checked
        ? `${colors.white} !important`
        : `${colors.gray20} !important`};
  }

  .right {
    background-color: ${props =>
      props.checked
        ? `${colors.brand10} !important`
        : `${colors.white} !important`};
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-left: 0 !important;
    transition: 400ms !important;

    color: ${props =>
      props.checked
        ? `${colors.white} !important`
        : `${colors.gray20} !important`};
  }
`;

export const ActiveInactive = styled.button<SelectionProps>`
  font-family: MontSerrat !important;
  display: flex !important;
  flex-direction: row !important;
  opacity: ${props => (props.disabled ? '0.5 !important' : '1 !important')};

  cursor: ${props =>
    props.disabled ? 'not-allowed !important' : 'pointer !important'};

  .btn {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: ${props =>
      props.size ? widthToggle(props.size) : '4.375rem !important'};
    border: 1px solid ${colors.card} !important;
    padding: 0.5rem 0 !important;

    span {
      font-size: ${props =>
        props.size ? fontActiveInactive(props.size) : '0.625rem !important'};
    }
  }

  .left {
    background-color: ${props =>
      !props.checked
        ? `${colors.brand20} !important`
        : `${colors.white} !important`};
    border-top-left-radius: 20px !important;
    border-bottom-left-radius: 20px !important;
    border-right: 0 !important;
    transition: 400ms !important;

    span {
      color: ${props =>
        !props.checked
          ? `${colors.white} !important`
          : `${colors.gray20} !important`};
    }
  }

  .right {
    background-color: ${props =>
      props.checked
        ? `${colors.brandGreen} !important`
        : `${colors.white} !important`};
    border-top-right-radius: 20px !important;
    border-bottom-right-radius: 20px !important;
    border-left: 0 !important;
    transition: 400ms !important;

    span {
      color: ${props =>
        props.checked
          ? `${colors.white} !important`
          : `${colors.gray20} !important`};
    }
  }
`;
