import styled from 'styled-components';
import { sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

type Positions = 'left' | 'center' | 'right';
interface LoaderProps {
  color?: string;
  size: sizesTypes;
  outsideColor?: string;
}
interface ContainerProps {
  position: Positions;
}

const POSITIONS: Record<Positions, string> = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};

const widthLoader = (size: sizesTypes) => {
  switch (size) {
    case 'xs':
      return '1em';
    case 'sm':
      return '1.75em';
    case 'md':
      return '2.5em';
    case 'lg':
      return '3.25em';
    case 'xl':
      return '4em';
    default:
      return '2.5em';
  }
};

const widthBorder = (size: sizesTypes) => {
  switch (size) {
    case 'xs':
      return '2px';
    case 'sm':
      return '3px';
    case 'md':
      return '4px';
    case 'lg':
      return '5px';
    case 'xl':
      return '6px';
    default:
      return '4px';
  }
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: ${props => POSITIONS[props.position]};
`;

export const Load = styled.div<LoaderProps>`
  border-width: ${props => widthBorder(props.size)};
  border-style: solid;
  border-color: ${props => props.outsideColor || colors.default20};
  border-top-width: ${props => widthBorder(props.size)};
  border-top-style: solid;
  border-top-color: ${props => props.color || colors.brand10};
  border-radius: 50%;
  width: ${props => widthLoader(props.size)};
  height: ${props => widthLoader(props.size)};
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
