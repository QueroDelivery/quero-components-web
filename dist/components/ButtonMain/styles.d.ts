import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ButtonSizes } from "./ButtonMain";
interface ButtonProps {
    secondary?: boolean;
    backPurple?: boolean;
    notification?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    noBorder?: boolean;
    colorText?: string;
    colorBackground?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
    rectangular?: boolean;
}
interface TextFirstProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
}
interface TextEndProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
}
export declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const TextFirst: import("styled-components").StyledComponent<"span", any, TextFirstProps, never>;
export declare const TextEnd: import("styled-components").StyledComponent<"span", any, TextEndProps, never>;
export declare const Notification: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Amount: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
