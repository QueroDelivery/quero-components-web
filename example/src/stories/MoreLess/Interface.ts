export interface MoreLessProps {
    size?: 'small' | 'medium' | 'big';
    disabled?: boolean;
    minimum?: number;
    limit?: number;
    value: number;
    more: () => void;
    less: () => void;
    onChange?: (value: number) => void;
}