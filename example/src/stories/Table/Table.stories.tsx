import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { Table, Pagination } from "quero-components-web";
import "quero-components-web/dist/index.css";
import { ITableComponent } from "./Interface";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    title: {
      control: "text", 
      description: "Título da Table",
      defaultValue: "Título da Table",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    message: {
      control: "text", 
      description: "Mensagem da Table",
      defaultValue: "Mensagem da Table",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    loading: {
      control: "boolean",
      description: "Esta carregando?",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    hasMore: {
        control: "boolean",
        description: "Função para saber se tem mais página",
        table: {
        type: {
            summary: "function",
          },
        },
    },
    pagination: {
      control: "string",
      description: "Paginação da table",
      table: {
      type: {
          summary: "React.ReactElement",
        },
      },
    },
    titleStyle: { 
      control: "object",
      description: "Estilização do Título",
      table: {
        type: {
          summary: "React.CSSProperties",
        },
      },
    },
    messageStyle: { 
      control: "object",
      description: "Estilização da mensagem",
      table: {
        type: {
          summary: "React.CSSProperties",
        },
      },
    },
  }
  
} as Meta;

export const Primary: Story<ITableComponent> = (args) => {
  console.log (args)
  const hasMore = args.hasMore ? () => {} : undefined
  const [page, setPage] = useState(1)
  return (
  <Table
    {...args}
    hasMore={hasMore}
    pagination={
      <Pagination
        page={page}
        totalCount={5}
        limit={1}
        
        onPageChange={(activePage) => {
          setPage(activePage)
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
);
  }