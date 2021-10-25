import styled from 'styled-components';
import { Z_INDEX_MODAL } from '../../helpers/constants';
import { getMeasurement, sizesTypes } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface ModalProps {
  width?: number | string;
  size: sizesTypes;
}

interface HeaderProps {
  iconBack?: boolean;
  noBorder?: boolean;
}

const sizeWidth = (size: sizesTypes) => {
  switch (size) {
    case 'xs':
      return '35%';
    case 'sm':
      return '45%';
    case 'md':
      return '55%';
    case 'lg':
      return '65%';
    case 'xl':
      return '95%';
    default:
      return '55%';
  }
};

export const Background = styled.div`
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: opacity 0.25s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
    padding: 2.5rem 0;
    display: flex;
    z-index: ${Z_INDEX_MODAL};
  }
`;

export const Modal = styled.div<ModalProps>`
  font-family: MontSerrat !important;
  transition: top 0.25s ease;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: ${props => {
    if (props.width) {
      return getMeasurement(props.width, '80%');
    }

    return sizeWidth(props.size);
  }};
  margin: auto;
  background: ${colors.white};
  border-radius: 1.875rem;
`;

export const Dialog = styled.div`
  transition: bottom 1s ease;
  width: 90%;
  background: ${colors.white};
  border-top-left-radius: 1.875rem;
  border-top-right-radius: 1.875rem;
`;

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props =>
    props.noBorder ? 'none' : `1px solid ${colors.default20}`};
  font-size: 1.25rem;

  .name-icon-modal {
    display: flex;
    align-items: center;
  }

  & strong {
    padding: ${props => (props.iconBack ? '20px 0' : '20px 30px')};
    color: ${colors.brand10};
  }

  button {
    padding: 1.25rem 1.875rem;
  }
`;

export const Body = styled.div<HeaderProps>`
  padding: 1.25rem 1.875rem;
  height: 100%;
  position: relative;

  .loading-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.875rem;
    z-index: 2;
    position: absolute;
  }
`;

export const Actions = styled.div`
  border-top: 1px solid ${colors.default20};
  margin: 0 1.875rem;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: row-reverse;
`;
