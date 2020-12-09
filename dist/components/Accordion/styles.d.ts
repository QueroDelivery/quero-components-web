interface AccordionProps {
    subtitle?: string;
    colorTitle?: string;
    colorSubtitle?: string;
    colorValue?: string;
    open: boolean;
    secundary?: boolean;
    width?: number;
    icon?: boolean;
    fontSizeTitle?: number;
}
interface BodyProps {
    width?: number;
    open: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, AccordionProps, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, BodyProps, never>;
export {};
