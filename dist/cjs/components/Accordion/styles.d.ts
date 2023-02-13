interface AccordionProps {
    subtitle?: string;
    open: boolean;
    secondary?: boolean;
    width?: number | string;
    icon?: boolean;
}
interface TitleProps {
    subtitle?: string;
}
interface BodyProps {
    width?: number | string;
    open: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, AccordionProps, never>;
export declare const Title: import("styled-components").StyledComponent<"span", any, TitleProps, never>;
export declare const Subtitle: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Value: import("styled-components").StyledComponent<"span", any, TitleProps, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, BodyProps, never>;
export {};
