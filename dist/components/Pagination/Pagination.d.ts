/// <reference types="react" />
export interface PaginationProps {
    totalCount: number;
    currentPage?: number;
    limitPerPage?: number;
    onPageChange?: (page: number) => void;
    doubleJumpArrow?: boolean;
    disabled?: boolean;
}
export declare function Pagination({ totalCount, currentPage, limitPerPage, onPageChange, doubleJumpArrow, disabled, }: PaginationProps): JSX.Element;
export default Pagination;
