interface BackgroundProps {
    open: boolean;
}
interface DialogProps {
    open: boolean;
    maxHeight?: number | string;
    sizeHeader: number;
    sizeBody?: number;
    isLoading: boolean;
    title?: string;
}
interface HeaderProps {
    returnIcon?: boolean;
    noBorder?: boolean;
}
export declare const Background: import("styled-components").StyledComponent<"div", any, BackgroundProps, never>;
export declare const Dialog: import("styled-components").StyledComponent<"div", any, DialogProps, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, HeaderProps, never>;
export {};
