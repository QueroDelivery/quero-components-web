import React, { ButtonHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
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
    height?: number;
    width?: number;
    icon?: IconDefinition;
    colorIcon?: string;
    noBorder?: boolean;
    colorText?: string;
    colorBackground?: string;
    tertiary?: boolean;
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";
    rectangular?: boolean;
    typeContent?: "icon";
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
}
declare const ButtonMain: React.FC<ButtonProps>;
export default ButtonMain;
