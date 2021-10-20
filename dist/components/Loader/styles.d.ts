import { sizesTypes } from '../../helpers/FnUtil';
declare type Positions = 'left' | 'center' | 'right';
interface LoaderProps {
    color?: string;
    size: sizesTypes;
    outsideColor?: string;
}
interface ContainerProps {
    position: Positions;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
export declare const Load: import("styled-components").StyledComponent<"div", any, LoaderProps, never>;
export {};
