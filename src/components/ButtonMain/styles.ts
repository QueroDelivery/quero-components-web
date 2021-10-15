import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../styles/colors';
import { getFontSize, getMeasurement, sizesTypes } from '../../helpers/FnUtil';

interface ButtonProps {
  secondary?: boolean;
  backPurple?: boolean;
  notification?: boolean;
  width?: number | string;
  icon?: IconDefinition;
  noBorder?: boolean;
  colorBackground?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  tertiary?: boolean;
  size?: sizesTypes;
  rectangular?: boolean;
  isLoading?: boolean;
}

interface TextFirstProps {
  firstStrong?: boolean;
  notStrong?: boolean;
  strong?: boolean;
  tertiary?: boolean;
  size?: sizesTypes;
  hasTextEnd?: boolean;
}

interface TextEndProps {
  firstStrong?: boolean;
  notStrong?: boolean;
  strong?: boolean;
  tertiary?: boolean;
  size?: sizesTypes;
}

interface IconProps {
  hasText: boolean;
  iconPosition?: 'left' | 'right';
}

export const Button = styled.button<ButtonProps>`
  font-family: MontSerrat !important;
  font-size: ${props =>
    props.size ? getFontSize(props.size, '1rem') : '1rem'};
  position: ${props => (props.isLoading ? 'relative' : 'initial')};
  line-height: 0;
  background-color: ${props => {
    if (props.secondary || props.tertiary) {
      return colors.white;
    }

    if (props.noBorder) {
      return 'transparent';
    }

    return colors.brand30;
  }};
  color: ${props => {
    if (props.tertiary) {
      return colors.gray20;
    }

    if (props.isLoading) {
      return 'transparent';
    }

    return colors.brand10;
  }};
  padding: 0.65em 1.25em;
  width: ${props => getMeasurement(props.width, 'none')};
  border-radius: ${props => {
    if (props.rectangular) return '10px';

    return '30px';
  }};
  cursor: pointer;
  border: ${props => {
    if (props.secondary) {
      return `1px solid ${colors.brand10}`;
    }

    if (props.tertiary) {
      return `1px solid ${colors.gray10}`;
    }

    return 'none';
  }};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    background-color: ${props => {
      if (props.secondary) {
        return colors.brandTransparent;
      }

      if (props.backPurple) {
        return colors.brand20;
      }

      if (props.noBorder) {
        return 'transparent';
      }

      if (props.tertiary) {
        return colors.hover;
      }

      return colors.brand10;
    }};
    color: ${props => {
      if (props.secondary || props.noBorder) {
        return colors.brand10;
      }

      if (props.backPurple) {
        return colors.white;
      }

      if (props.tertiary) {
        return colors.gray20;
      }

      if (props.isLoading) {
        return 'transparent';
      }

      return colors.brand30;
    }};
  }
`;

export const TextFirst = styled.span<TextFirstProps>`
  font-weight: ${props => {
    if (props.firstStrong || props.strong) {
      return 'bold';
    }

    return 'normal';
  }};
  font-size: ${props =>
    props.size ? getFontSize(props.size, '1rem') : '1rem'};
  margin-right: ${props => (props.hasTextEnd ? '3.5px' : '')};
`;

export const TextEnd = styled.span<TextEndProps>`
  font-weight: ${props => {
    if (props.firstStrong || props.notStrong) {
      return 'normal';
    }

    return 'bold';
  }};
  font-size: ${props =>
    props.size ? getFontSize(props.size, '1rem') : '1rem'};
`;

export const Notification = styled.button`
  font-family: MontSerrat !important;
  background-color: ${colors.brand10};
  height: 40px;
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid ${colors.brand30};
  outline: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    background-color: ${colors.brandTransparent2};
  }

  span {
    color: ${colors.brand30};
    margin-left: 20px;
    font-weight: bold;
  }
`;

export const Icon = styled.div<IconProps>`
  margin-right: ${props =>
    props.iconPosition === 'left' && props.hasText ? '10px' : ''};
  margin-left: ${props =>
    props.iconPosition === 'right' && props.hasText ? '10px' : ''};
`;

export const Amount = styled.div`
  font-family: MontSerrat !important;
  background-color: ${colors.brand30};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${colors.brand10};
  font-size: 0.625rem;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
