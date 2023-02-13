import React from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
export interface LoaderProps {
    color?: string;
    outsideColor?: string;
    size?: sizesTypes;
    className?: string;
    style?: React.CSSProperties;
    position?: 'left' | 'center' | 'right';
}
declare function Loader({ color, size, className, style, position, outsideColor, }: LoaderProps): JSX.Element;
export default Loader;
