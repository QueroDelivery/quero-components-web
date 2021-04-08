import React from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface CardProps {
    type: "shadow" | "button" | "min-shadow";
    width?: number | string;
    style?: React.CSSProperties;
    icon?: IconDefinition;
    sizeIcon?:
        | "1x"
        | "2x"
        | "3x"
        | "4x"
        | "5x"
        | "6x"
        | "7x"
        | "8x"
        | "9x"
        | "10x"
        | "lg"
        | "sm"
        | "xs";
    colorIcon?: string;
    text?: string;
    colorText?: string;
    onClick?(): void;
    loading?: boolean;
}
