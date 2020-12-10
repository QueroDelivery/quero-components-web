import React from 'react';
interface MoreLessProps {
    size?: 'small' | 'medium' | 'big';
    disabled?: boolean;
    value: number;
    limit?: number;
    minimum?: number;
    more: () => void;
    less: () => void;
    onChange?: (value: number) => void;
}
declare const MoreLess: React.FC<MoreLessProps>;
export default MoreLess;
