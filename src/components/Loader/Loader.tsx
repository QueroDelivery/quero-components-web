/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Load } from './styles';

export interface LoaderProps {
  color?: string;
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
  className?: string;
  style?: React.CSSProperties;
  position?: 'left' | 'center' | 'right';
}

const Loader: React.FC<LoaderProps> = ({
  color,
  size,
  className,
  style,
  position,
}) => {
  return (
    <Container
      position={position}
      role="progressbar"
      aria-busy="true"
      aria-live="polite"
    >
      <Load color={color} size={size} style={style} className={className} />
    </Container>
  );
};

export default Loader;
