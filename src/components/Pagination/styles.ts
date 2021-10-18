import styled, { css } from 'styled-components';
import { getFontSize, sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface IButtonProps {
  active?: boolean;
}

interface IContainerProps {
  disabledAll?: boolean;
  size: sizesTypes;
}

export const ContainerPagination = styled.div<IContainerProps>`
  display: flex;
  font-size: ${props => getFontSize(props.size, '1rem')};

  justify-content: center;
  align-items: center;

  button + button {
    margin-left: 0.5em;
  }

  button {
    ${props =>
      !props.disabledAll
        ? css`
            opacity: 1 !important;
          `
        : ''}
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
  font-size: 1.125em;
  font-weight: 500;
  width: 2.5em;
  height: 2.5em;
  border-radius: 0.625em;

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
