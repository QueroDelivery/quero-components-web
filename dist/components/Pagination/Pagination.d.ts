import React from 'react';
import { sizesTypes } from '../../helpers/FnUtil';
export interface PaginationProps {
    totalCount: number;
    currentPage?: number;
    limitPerPage?: number;
    onPageChange?: (page: number) => void;
    doubleJumpArrow?: boolean;
    disabled?: boolean;
    size?: sizesTypes;
    className?: string;
    style?: React.CSSProperties;
}
declare function Pagination({ totalCount, currentPage, limitPerPage, onPageChange, doubleJumpArrow, disabled, size, className, style, }: PaginationProps): JSX.Element | null;
export default Pagination;
