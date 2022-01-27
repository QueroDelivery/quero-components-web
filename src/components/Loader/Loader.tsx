/* eslint-disable react/prop-types */
import React from 'react';
import { sizesTypes } from '../../helpers/FnUtil';

import { Container, Load } from './styles';

export interface LoaderProps {
  color?: string;
  outsideColor?: string;
  size?: sizesTypes;
  className?: string;
  style?: React.CSSProperties;
  position?: 'left' | 'center' | 'right';
}

function Loader({
  color,
  size = 'md',
  className,
  style,
  position = 'center',
  outsideColor,
}: LoaderProps) {
  return (
    <Container position={position}>
      <Load
        role="progressbar"
        aria-busy="true"
        aria-live="polite"
        color={color}
        size={size}
        style={style}
        className={className}
        outsideColor={outsideColor}
      />
    </Container>
  );
}

export default Loader;
