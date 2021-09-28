import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface BackgroundProps {
  open?: boolean;
}

interface DialogProps {
  open?: boolean;
  maxHeight?: number | string;
  sizeHeader: number;
  sizeBody?: number;
  loading?: boolean;
  title?: string;
}

interface HeaderProps {
  iconBack?: boolean;
  noBorder?: boolean;
}

export const Background = styled.div<BackgroundProps>`
  ${(props) =>
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
          z-index: 999;
        `
      : css`
          opacity: 1;
          visibility: hidden;
        `}
`;

export const Dialog = styled.div<DialogProps>`
  font-family: MontSerrat !important;
  ${(props) =>
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
            if (props.maxHeight || props.loading) {
              return "none";
            }
            return "auto";
          }};
          padding-bottom: ${() => {
            if (props.maxHeight) {
              return "0";
            }
            return "20px";
          }};
          height: ${() => {
            if (props.maxHeight) {
              return "100%";
            }
            return "auto";
          }};
          max-height: ${() => {
            if (props.maxHeight) {
              if (typeof props.maxHeight === "string") {
                return props.maxHeight;
              }
              return `${props.maxHeight}px`;
            }

            return "100%";
          }};

          .box-dialog {
            position: relative;
            padding: 20px 20px 0;
            overflow: ${props.loading ? "hidden" : "auto"};

            height: ${props.title
              ? `calc(100% - ${props.sizeHeader}px)`
              : "100%"};
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
  border-bottom: ${(props) =>
    props.noBorder ? "none" : `1px solid ${colors.default20}`};
  font-size: 1.25rem;

  .name-icon-modal {
    display: flex;
    align-items: center;
  }

  & strong {
    padding: ${(props) => (props.iconBack ? "1.25rem 0" : "1.25rem 1.875rem")};
    color: ${colors.brand10};
  }
`;

export const Icon = styled.div`
  padding: 1.25rem 1.875rem;
  cursor: pointer;
`;
