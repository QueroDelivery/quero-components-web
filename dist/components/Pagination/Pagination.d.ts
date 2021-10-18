/// <reference types="react" />
import { sizesTypes } from '../../helpers/FnUtil';
export interface PaginationProps {
    totalCount: number;
    currentPage?: number;
    limitPerPage?: number;
    onPageChange?: (page: number) => void;
    doubleJumpArrow?: boolean;
    disabled?: boolean;
    size?: sizesTypes;
}
declare function Pagination({ totalCount, currentPage, limitPerPage, onPageChange, doubleJumpArrow, disabled, size, }: PaginationProps): JSX.Element | null;
export default Pagination;
