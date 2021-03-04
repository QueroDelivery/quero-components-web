import React from 'react';
import { TableProps } from 'semantic-ui-react';
export interface ITableComponent extends TableProps {
    title?: string;
    titleStyle?: React.CSSProperties;
    message?: string;
    messageStyle?: React.CSSProperties;
    hasMore?: () => void;
    pagination?: React.ReactElement;
}
declare const TableComponent: React.FC<ITableComponent>;
export default TableComponent;
