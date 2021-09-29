interface BackgroundProps {
    open?: boolean;
}
interface ModalProps {
    width?: number | string;
    size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';
}
interface HeaderProps {
    iconBack?: boolean;
    noBorder?: boolean;
}
export declare const Background: import("styled-components").StyledComponent<"div", any, BackgroundProps, never>;
export declare const Modal: import("styled-components").StyledComponent<"div", any, ModalProps, never>;
export declare const Dialog: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Header: import("styled-components").StyledComponent<"div", any, HeaderProps, never>;
export declare const Icon: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, HeaderProps, never>;
export declare const Actions: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
