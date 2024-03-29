import React from 'react';
import { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  Table,
  Pagination,
  Card,
  TableComponentProps,
} from '@quero-delivery/quero-components-web';
import '@quero-delivery/quero-components-web/dist/index.css';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `É necessário utilizar a lib [Semantic UI React](https://react.semantic-ui.com).`,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título da Table',
      defaultValue: 'Título da Table',
      table: {
        type: {
          summary: 'string | React.ReactNode',
        },
      },
    },
    message: {
      control: 'text',
      description: 'Mensagem da Table',
      defaultValue: 'Mensagem da Table',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    hasMore: {
      control: 'boolean',
      description: 'Função para saber se tem mais página',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    pagination: {
      control: 'string',
      description: 'Paginação da table',
      table: {
        type: {
          summary: 'React.ReactElement',
        },
      },
    },
    titleStyle: {
      control: 'object',
      description: 'Estilização do Título',
      table: {
        type: {
          summary: 'React.CSSProperties',
        },
      },
    },
    messageStyle: {
      control: 'object',
      description: 'Estilização da mensagem',
      table: {
        type: {
          summary: 'React.CSSProperties',
        },
      },
    },
  },
} as Meta;

export const Primary: Story<TableComponentProps> = args => {
  const hasMore = args.defaultProps?.hasMore ? () => {} : undefined;
  const [page, setPage] = useState(1);
  return (
    <Card type="shadow">
      <Table
        {...args}
        hasMore={hasMore}
        pagination={
          <Pagination
            currentPage={page}
            totalCount={5}
            limitPerPage={1}
            onPageChange={activePage => {
              setPage(activePage);
            }}
          />
        }
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Arguments</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  );
};

Primary.parameters = {
  docs: {
    source: {
      code: `
<Card type="shadow">
  <Table
    hasMore={hasMore}
    pagination={
      <Pagination
        page={page}
        totalCount={5}
        limit={1}
        onPageChange={() => {}}
      />
    }
  >

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Arguments</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>set rating</Table.Cell>
        <Table.Cell>rating (integer)</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>set rating</Table.Cell>
        <Table.Cell>rating (integer)</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</Card>`,
    },
  },
};
