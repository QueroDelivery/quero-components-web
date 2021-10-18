/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sizesTypes } from '../../helpers/FnUtil';
import { Button, ContainerPagination } from './styles';

export interface PaginationProps {
  totalCount: number;
  currentPage?: number;
  limitPerPage?: number;
  onPageChange?: (page: number) => void;
  doubleJumpArrow?: boolean;
  disabled?: boolean;
  size?: sizesTypes;
}

const brothersCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

function Pagination({
  totalCount,
  currentPage = 1,
  limitPerPage = 30,
  onPageChange,
  doubleJumpArrow = false,
  disabled = false,
  size = 'md',
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / limitPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - (brothersCount + 1), currentPage - 1)
      : [];

  const nextPages =
    currentPage < totalPages
      ? generatePagesArray(
          currentPage,
          Math.min(totalPages, currentPage + brothersCount),
        )
      : [];

  function handlePageChange(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const newPage = Number(event.currentTarget.value);

    return onPageChange && onPageChange(newPage);
  }

  if (totalPages == 0) return null;

  return (
    <ContainerPagination disabledAll={disabled} size={size} role="group">
      {doubleJumpArrow && (
        <Button
          disabled={currentPage == 1 || disabled}
          value={1}
          onClick={handlePageChange}
          active={currentPage == 1}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </Button>
      )}

      <Button
        onClick={handlePageChange}
        value={currentPage - 1}
        disabled={currentPage == 1 || disabled}
        active={currentPage == 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>

      {currentPage >= brothersCount + 2 && (
        <>
          <Button onClick={handlePageChange} value={1} disabled={disabled}>
            {1}
          </Button>
          {currentPage > brothersCount + 2 && (
            <Button disabled={disabled}>...</Button>
          )}
        </>
      )}

      {previousPages.map(value => (
        <Button
          onClick={handlePageChange}
          key={value}
          value={value}
          disabled={disabled}
        >
          {value}
        </Button>
      ))}

      <Button onClick={handlePageChange} disabled value={currentPage} active>
        {currentPage}
      </Button>

      {nextPages.map(value => (
        <Button
          onClick={handlePageChange}
          disabled={disabled}
          key={value}
          value={value}
        >
          {value}
        </Button>
      ))}

      {totalPages >= currentPage + brothersCount + 1 && (
        <>
          {totalPages > currentPage + brothersCount + 1 && (
            <Button disabled={disabled}>...</Button>
          )}
          <Button
            onClick={handlePageChange}
            disabled={disabled}
            value={totalPages}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        onClick={handlePageChange}
        value={currentPage + 1}
        disabled={currentPage == totalPages || disabled}
        active={currentPage == totalPages}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>

      {doubleJumpArrow && (
        <Button
          disabled={currentPage == totalPages || disabled}
          active={currentPage == totalPages}
          value={totalPages}
          onClick={handlePageChange}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </Button>
      )}
    </ContainerPagination>
  );
}

export default Pagination;
