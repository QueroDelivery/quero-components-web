import React from 'react';
import { TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react';
import { ITableComponent } from './TableComponent';
interface TableComponentProps extends React.FunctionComponent<ITableComponent> {
    Body: typeof TableBody;
    Cell: typeof TableCell;
    Footer: typeof TableFooter;
    Header: typeof TableHeader;
    HeaderCell: typeof TableHeaderCell;
    Row: typeof TableRow;
}
declare const Table: TableComponentProps;
export default Table;
