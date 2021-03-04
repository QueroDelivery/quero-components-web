import React from 'react';
import { TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import TableComponent, { ITableComponent } from './TableComponent'

interface TableComponentProps extends React.FunctionComponent<ITableComponent> {
    Body: typeof TableBody
    Cell: typeof TableCell
    Footer: typeof TableFooter
    Header: typeof TableHeader
    HeaderCell: typeof TableHeaderCell
    Row: typeof TableRow
}

const Table: TableComponentProps = TableComponent as any

Table.Row = TableRow
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter

export default Table;
