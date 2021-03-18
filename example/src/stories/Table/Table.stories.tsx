import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { Table, Pagination } from "quero-components-web";
import "quero-components-web/dist/index.css";

export default {
  title: "Example/Table",
  component: Table,
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Table
    pagination={
      <Pagination
        page={1}
        totalCount={100}
        limit={30}
        onPageChange={(activePage) => {
          console.log(activePage)
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
