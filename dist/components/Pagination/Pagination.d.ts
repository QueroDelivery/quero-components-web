import React from 'react';
interface PaginacaoProps {
    page: number;
    totalCount: number;
    limit: number;
    onPageChange: (data: any) => void;
    mini?: string;
}
declare const PaginationComponent: React.FC<PaginacaoProps>;
export default PaginationComponent;
