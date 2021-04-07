interface AccordionProps {
    subtitle?: string;
    colorTitle?: string;
    colorSubtitle?: string;
    colorValue?: string;
    open: boolean;
    secondary?: boolean;
    width?: number | string;
    icon?: boolean;
    fontSizeTitle?: number;
}
interface BodyProps {
    width?: number | string;
    open: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, AccordionProps, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, BodyProps, never>;
export {};
