export interface LoaderProps {
    color?: string;
    size?:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive";
    className?: string;
    style?: React.CSSProperties;
    position?: "left" | "center" | "right";
}