import React, { ReactNode } from 'react';
import { Table, TableProps } from 'semantic-ui-react';
import Button from '../Button/Button';

import { Container, Header, Title, Message } from './styles';

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

function TableComponent({
  children,
  title,
  titleStyle,
  titleClassName,

  message,
  messageStyle,
  messageClassName,

  hasMore,
  hasMoreText,
  pagination,
  ...rest
}: ITableComponent) {
  return (
    <div>
      {title || message ? (
        <Header>
          <Title style={titleStyle} className={titleClassName}>
            {title}
          </Title>
          <Message style={messageStyle} className={messageClassName}>
            {message}
          </Message>
        </Header>
      ) : null}

      <Container hasMore={!!hasMore} hasPagination={!!pagination}>
        <Table {...rest}>{children}</Table>
      </Container>

      {hasMore ? (
        <Button data-testid="hasmore-button" secondary onClick={hasMore}>
          {hasMoreText || (
            <>
              ver lista <b>completa</b>
            </>
          )}
        </Button>
      ) : null}

      {pagination ? (
        <div>
          <br />
          {pagination}
        </div>
      ) : null}
    </div>
  );
}

export default TableComponent;
