import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  textFirst?: string;
  textEnd?: string;
  size?:
    | "mini"
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | "massive";
  width?: number | string;
  firstStrong?: boolean;
  notStrong?: boolean;
  strong?: boolean;
  loading?: boolean;
  secondary?: boolean;
  noBorder?: boolean;
  backPurple?: boolean;
  tertiary?: boolean;
  rectangular?: boolean;
  notification?: boolean;
  amount?: number;
  typeContent: "icon";
  icon?: IconDefinition;
  customIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  colorIcon?: string;
  colorText?: string;
  colorBackground?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}
