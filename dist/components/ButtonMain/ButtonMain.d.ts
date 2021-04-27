import React, { ButtonHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
declare type ButtonTypes = 'icon';
declare type IconPositions = 'left' | 'right';
export declare type ButtonSizes = "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst?: string;
    textEnd?: string;
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
    customIcon?: React.ReactNode;
    colorIcon?: string;
    iconPosition?: IconPositions;
    noBorder?: boolean;
    colorText?: string;
    colorBackground?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
    rectangular?: boolean;
    typeContent?: ButtonTypes;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    iconStyle?: React.CSSProperties;
}
declare const ButtonMain: React.FC<ButtonProps>;
export default ButtonMain;
