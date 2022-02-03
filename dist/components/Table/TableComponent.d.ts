import React, { ReactNode } from 'react';
import { TableProps } from 'semantic-ui-react';
export interface ITableComponent extends TableProps {
    title?: string | React.ReactNode;
    titleStyle?: React.CSSProperties;
    titleClassName?: string;
    message?: string;
    messageStyle?: React.CSSProperties;
    messageClassName?: string;
    hasMore?: () => void;
    hasMoreText?: string | ReactNode;
    pagination?: React.ReactElement;
    loading?: boolean;
}
declare function TableComponent({ children, title, titleStyle, titleClassName, message, messageStyle, messageClassName, hasMore, hasMoreText, pagination, ...rest }: ITableComponent): JSX.Element;
export default TableComponent;
