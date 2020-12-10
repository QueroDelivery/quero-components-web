import React, { ButtonHTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst?: string;
    textEnd?: string;
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    loading?: boolean;
    secundary?: boolean;
    notification?: boolean;
    amount?: number;
    backPurple?: boolean;
    height?: number;
    width?: number;
    icon?: IconDefinition;
    colorIcon?: string;
    noBorder?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}
declare const ButtonMain: React.FC<ButtonProps>;
export default ButtonMain;
