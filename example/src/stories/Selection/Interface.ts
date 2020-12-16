export interface SelectionProps {
    type: "switch" | "toggle" | "activeInactive";
    checked?: boolean;
    onChange?: () => void;
    size?:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive";
    disabled?: boolean;
    selectionRef?: any;
}
