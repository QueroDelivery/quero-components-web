import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

interface IButtonProps {
  active?: boolean;
}

export const ContainerPagination = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  button + button {
    margin-left: 0.5rem;
  }
`;

export const Button = styled.button<IButtonProps>`
  color: ${colors.brand10};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.hover};
  font-size: 1.125rem;
  font-weight: 500;

  width: 3rem;
  height: 3rem;
  border-radius: 10px;

  &:not(:disabled):hover {
    background-color: ${colors.hover};
    transition: background-color 0.4s;
  }

  &:disabled {
    border: none;
    cursor: default;
    opacity: 0.75;
  }

  ${props =>
    props.active
      ? css`
          background-color: ${colors.brand10};
          color: ${colors.white};
        `
      : ''}
`;
// font-family: MontSerrat !important;

// /*--------------
//  Pagination
// ---------------*/

// .ui.pagination.menu {
//   margin: 0em;
//   display: -webkit-inline-box;
//   display: -ms-inline-flexbox;
//   display: inline-flex;
//   vertical-align: middle;
// }
// .ui.pagination.menu .item:last-child {
//   border-radius: 0em 0.28571429rem 0.28571429rem 0em;
// }
// .ui.compact.menu .item:last-child {
//   border-radius: 0em 0.28571429rem 0.28571429rem 0em;
// }
// .ui.pagination.menu .item:last-child:before {
//   display: none;
// }
// .ui.pagination.menu .item {
//   font-family: MontSerrat !important;
//   min-width: 3em;
//   text-align: center;
// }
// .ui.pagination.menu .icon.item i.icon {
//   vertical-align: top;
// }

// /* Active */
// .ui.pagination.menu .active.item {
//   border-top: none;
//   padding-top: 0.92857143em;
//   background-color: rgba(0, 0, 0, 0.05);
//   color: rgba(0, 0, 0, 0.95);
//   -webkit-box-shadow: none;
//   box-shadow: none;
// }
