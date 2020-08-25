import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface BackgroundProps {
    open?: boolean;
}

interface DialogProps {
    open?: boolean;
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
                  width: 80%;
                  background: ${colors.white};
                  border-top-left-radius: 30px;
                  border-top-right-radius: 30px;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  position: fixed;
                  margin: auto;
                  padding: 20px;
              `
            : css`
                  transition: bottom 0.25s ease;
                  bottom: -100%;
              `}
`;
