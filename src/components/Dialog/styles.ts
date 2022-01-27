import styled, { css } from 'styled-components';
import { Z_INDEX_DIALOG } from '../../helpers/constants';
import { getMeasurement } from '../../helpers/FnUtil';
import { colors } from '../../styles/colors';

interface BackgroundProps {
  open: boolean;
}

interface DialogProps {
  open: boolean;
  maxHeight?: number | string;
  sizeHeader: number;
  sizeBody?: number;
  isLoading: boolean;
  title?: string;
}

interface HeaderProps {
  returnIcon?: boolean;
  noBorder?: boolean;
}

export const Background = styled.div<BackgroundProps>`
  ${props =>
    props.open
      ? css`
          opacity: 1;
          visibility: visible;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.25s ease;
          overflow: auto;
          display: flex;
          z-index: ${Z_INDEX_DIALOG};
        `
      : css`
          opacity: 0;
          visibility: hidden;
          display: none;
        `}
`;

export const Dialog = styled.div<DialogProps>`
  font-family: MontSerrat !important;
  ${props =>
    props.open
      ? css`
          transition: bottom 0.25s ease;
          width: 97%;
          background: ${colors.white};
          border-top-left-radius: 30px;
          border-top-right-radius: 30px;
          margin-top: auto;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          /* overflow: auto; */

          overflow: ${() => {
            if (props.maxHeight || props.isLoading) {
              return 'none';
            }
            return 'auto';
          }};
          padding-bottom: ${() => {
            if (props.maxHeight) {
              return '0';
            }
            return '20px';
          }};
          height: ${() => {
            if (props.maxHeight) {
              return '100%';
            }
            return 'auto';
          }};
          max-height: ${() => getMeasurement(props.maxHeight, '100%')};

          .box-dialog {
            position: relative;
            padding: 20px 20px 0;
            overflow: ${props.isLoading ? 'hidden' : 'auto'};

            height: ${props.title
              ? `calc(100% - ${props.sizeHeader}px)`
              : '100%'};
            /* max-height: 100%; */
          }

          .loading-dialog {
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
            border-radius: 30px;
            z-index: 2;
            position: absolute;
          }
        `
      : css`
          transition: bottom 0.25s ease;
          bottom: -100%;
        `}
`;

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props =>
    props.noBorder ? 'none' : `1px solid ${colors.default20}`};
  font-size: 1.25rem;

  div {
    flex: 1;
    text-align: left;
    padding: ${props => (props.returnIcon ? '1.25rem 0' : '1.25rem 1.875rem')};
    color: ${colors.brand10};
  }

  button {
    padding: 1.25rem 1.875rem;
  }
`;
