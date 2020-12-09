import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
interface ButtonProps {
    secundary?: boolean;
    backPurple?: boolean;
    notification?: boolean;
    height?: number;
    width?: number;
    icon?: IconDefinition;
    noBorder?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}
interface TextFirstProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}
interface TextEndProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
}
export declare const Button: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const TextFirst: import("styled-components").StyledComponent<"span", any, TextFirstProps, never>;
export declare const TextEnd: import("styled-components").StyledComponent<"span", any, TextEndProps, never>;
export declare const Notification: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Amount: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
