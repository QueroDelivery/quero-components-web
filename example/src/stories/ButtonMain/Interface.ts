import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { ButtonHTMLAttributes } from "react";

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
  size?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
  rectangular?: boolean;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  typeContent: "icon";
}
