/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Pagination, Icon } from "semantic-ui-react";

import { Container } from "./styles";

interface PaginacaoProps {
  page: number;
  totalCount: number;
  limit: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (data: any) => void;
  mini?: string;
}

const PaginationComponent: React.FC<PaginacaoProps> = ({
  page,
  totalCount,
  limit,
  onPageChange,
  mini,
}) => {
  return (
    <Container>
      <Pagination
        totalPages={Math.ceil(totalCount / limit)}
        size={mini ? "mini" : "small"}
        ellipsisItem={{
          content: <Icon name="ellipsis horizontal" />,
          icon: true,
        }}
        firstItem={{
          content: <Icon name="angle double left" />,
          icon: true,
        }}
        lastItem={{
          content: <Icon name="angle double right" />,
          icon: true,
        }}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
        onPageChange={(_ev, data: any) => onPageChange(data.activePage)}
        activePage={page}
      />
    </Container>
  );
};

export default PaginationComponent;
