import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';

describe('Table component tests', () => {
  it('Table e seu children são renderizados', () => {
    // given

    // when

    const wrapper = render(
      <Table data-testid="table-teste">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Arguments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    // then

    const table = wrapper.getByTestId('table-teste');

    expect(table).toBeInTheDocument();
    expect(table.childElementCount).toEqual(2);
  });

  it('Title da table está funcionando', () => {
    // given
    const title = 'Titulo tabela';

    // when

    const wrapper = render(
      <Table data-testid="table-teste" title={title}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Arguments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    // then

    const titleContainer = wrapper.getByText(title);

    expect(titleContainer).toBeInTheDocument();
    expect(titleContainer).toHaveTextContent(title);
  });

  it('Message da table está funcionando', () => {
    // given
    const message = 'Message tabela';

    // when

    const wrapper = render(
      <Table data-testid="table-teste" message={message}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Arguments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    // then

    const messageContainer = wrapper.getByText(message);

    expect(messageContainer).toBeInTheDocument();
    expect(messageContainer).toHaveTextContent(message);
  });

  it('Função hasMore é chamada corretamente', () => {
    // given
    const hasMoreMock = jest.fn();
    const hasMoreText = 'ver mais itens';
    // when

    const wrapper = render(
      <Table
        data-testid="table-teste"
        hasMore={hasMoreMock}
        hasMoreText={hasMoreText}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Arguments</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>set rating</Table.Cell>
            <Table.Cell>rating (integer)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );

    // then

    const hasMoreButton = wrapper.getByTestId('hasmore-button');

    expect(hasMoreButton).toHaveTextContent(hasMoreText);

    userEvent.click(hasMoreButton);
    expect(hasMoreMock).toHaveBeenCalled();
  });
});
