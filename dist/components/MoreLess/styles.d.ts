interface MoreLessProps {
    disabled?: boolean;
    limit?: number;
    minimum?: number;
    value: number;
    size?: 'small' | 'medium' | 'big';
    noLess?: boolean;
    noMore?: boolean;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, MoreLessProps, never>;
export {};
