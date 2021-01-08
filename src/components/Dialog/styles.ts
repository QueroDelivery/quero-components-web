import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface BackgroundProps {
    open?: boolean;
}

interface DialogProps {
    open?: boolean;
    maxHeight?: number;
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
                  padding: 20px;
                  position: relative;

                  .box-dialog {
                      max-height: ${props.maxHeight
                          ? `${props.maxHeight}px`
                          : "100%"};
                      overflow: auto;
                      margin-bottom: -20px;
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
