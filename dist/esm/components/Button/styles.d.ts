import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { sizesTypes } from '../../helpers/FnUtil';
interface ButtonProps {
    secondary?: boolean;
    backPurple?: boolean;
    notification?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    noBorder?: boolean;
    colorBackground?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    tertiary?: boolean;
    size?: sizesTypes;
    rectangular?: boolean;
    isLoading?: boolean;
}
interface TextFirstProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    tertiary?: boolean;
    size?: sizesTypes;
    hasTextEnd?: boolean;
}
interface TextEndProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    tertiary?: boolean;
    size?: sizesTypes;
}
interface IconProps {
    hasText: boolean;
    iconPosition?: 'left' | 'right';
}
export declare const Container: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const TextFirst: import("styled-components").StyledComponent<"span", any, TextFirstProps, never>;
export declare const TextEnd: import("styled-components").StyledComponent<"span", any, TextEndProps, never>;
export declare const Notification: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, IconProps, never>;
export declare const Amount: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const LoadingContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
