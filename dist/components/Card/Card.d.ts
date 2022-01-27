import { CSSProperties, LinkHTMLAttributes, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
export declare type TTypes = 'shadow' | 'button' | 'min-shadow' | 'border' | 'none';
export interface CardProps extends Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'> {
    type?: TTypes;
    width?: number | string;
    className?: string;
    style?: CSSProperties;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    iconSize?: SizeProp;
    onClick?(): void;
    loading?: boolean;
    complement?: ReactNode;
    complementStyle?: CSSProperties;
    complementClassName?: string;
    children?: ReactNode;
    childrenStyle?: CSSProperties;
    childrenClassName?: string;
}
declare function Card({ children, childrenStyle, childrenClassName, width, type, style, icon, iconClassName, iconStyle, iconSize, onClick, loading, className, complement, complementStyle, complementClassName, ...rest }: CardProps): JSX.Element;
export default Card;
