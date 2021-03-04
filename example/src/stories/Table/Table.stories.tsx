import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";
import { Table } from "quero-components-web";
import "quero-components-web/dist/index.css";
import { Label } from "semantic-ui-react";

export default {
  title: "Example/Table",
  component: Table,
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Table inverted>
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
