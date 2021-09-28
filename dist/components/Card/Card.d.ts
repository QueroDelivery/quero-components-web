import React, { LinkHTMLAttributes, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export declare type TTypes = 'shadow' | 'button' | 'min-shadow' | 'border' | 'none';
interface CardProps extends Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'> {
    type?: TTypes;
    width?: number | string;
    style?: React.CSSProperties;
    icon?: IconDefinition;
    sizeIcon?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | 'lg' | 'sm' | 'xs';
    colorIcon?: string;
    text?: string;
    colorText?: string;
    onClick?(): void;
    loading?: boolean;
    className?: string;
    id?: string;
    complement?: ReactNode;
    complementStyle?: React.CSSProperties;
    complementClassName?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;
