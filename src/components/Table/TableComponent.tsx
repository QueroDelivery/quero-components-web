import React from 'react';
import { Table, TableProps } from 'semantic-ui-react'

import { Container, Header, Title, Message } from './styles'
import ButtonMain from '../ButtonMain/ButtonMain';

export interface ITableComponent extends TableProps{
    title?: string
    titleStyle?: React.CSSProperties
    message?: string
    messageStyle?: React.CSSProperties
    hasMore?: () => void;
    pagination?: React.ReactElement,
    loading?: boolean
}

const TableComponent: React.FC<ITableComponent> = ({children, title, titleStyle, message, messageStyle, hasMore, pagination, loading, ...rest}) => {
  return (
      <div>
        {title || message ? <Header>
            <Title style={titleStyle} >{title}</Title>
            <Message style={messageStyle}>{message}</Message>
        </Header> : null}

        <Container hasMore={!!hasMore} hasPagination={!!pagination}>
          <Table {...rest}>
            {children}
          </Table>
        </Container>

        {hasMore ? <ButtonMain secondary textFirst='ver a' textEnd='lista completa' onClick={() => hasMore()}/> : null}

        {pagination ? <div>
            <br />
            {pagination}
        </div> : null}
      </div>
  );
}

export default TableComponent;
