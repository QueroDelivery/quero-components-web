export interface MoreLessProps {
    size?: 'small' | 'medium' | 'big';
    disabled?: boolean;
    value: number;
    limit?: number;
    minimum?: number;
    more: () => void;
    less: () => void;
    onChange?: (value: number) => void;
}
