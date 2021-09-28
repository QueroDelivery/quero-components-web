import styled from "styled-components";

export const Container = styled.div`
  font-family: MontSerrat !important;

  /*--------------
   Pagination
---------------*/

  .ui.pagination.menu {
    margin: 0em;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
  }
  .ui.pagination.menu .item:last-child {
    border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  }
  .ui.compact.menu .item:last-child {
    border-radius: 0em 0.28571429rem 0.28571429rem 0em;
  }
  .ui.pagination.menu .item:last-child:before {
    display: none;
  }
  .ui.pagination.menu .item {
    font-family: MontSerrat !important;
    min-width: 3em;
    text-align: center;
  }
  .ui.pagination.menu .icon.item i.icon {
    vertical-align: top;
  }

  /* Active */
  .ui.pagination.menu .active.item {
    border-top: none;
    padding-top: 0.92857143em;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
