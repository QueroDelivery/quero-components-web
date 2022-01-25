import React, { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { sizesTypes } from '../../helpers/FnUtil';
declare type IconPositions = 'left' | 'right';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst?: string;
    textFirstClassName?: string;
    textFirstStyle?: React.CSSProperties;
    textEnd?: string;
    textEndClassName?: string;
    textEndStyle?: React.CSSProperties;
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    loading?: boolean;
    secondary?: boolean;
    notification?: boolean;
    amount?: number;
    backPurple?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    containerIconClassName?: string;
    containerIconStyle?: React.CSSProperties;
    customIcon?: React.ReactNode;
    iconPosition?: IconPositions;
    noBorder?: boolean;
    tertiary?: boolean;
    size?: sizesTypes;
    rectangular?: boolean;
}
declare function ButtonMain({ textFirst, textFirstClassName, textFirstStyle, textEnd, textEndClassName, textEndStyle, firstStrong, notStrong, strong, loading, secondary, backPurple, children, notification, amount, width, icon, iconClassName, iconStyle, containerIconClassName, containerIconStyle, customIcon, iconPosition, noBorder, tertiary, size, rectangular, ...rest }: ButtonProps): JSX.Element;
export default ButtonMain;
