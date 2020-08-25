import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface BackgroundProps {
    open?: boolean;
}

interface ModalProps {
    witdh?: number;
}

export const Background = styled.div<BackgroundProps>`
    ${(props) =>
        props.open
            ? css`
                  opacity: 1;
                  visibility: visible;
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  background: rgba(0, 0, 0, 0.5);
                  transition: opacity 0.25s ease;
                  overflow: auto;
                  padding: 40px 0;
                  display: flex;
                  z-index: 999;
              `
            : css`
                  opacity: 1;
                  visibility: hidden;
              `}
`;

export const Modal = styled.div<ModalProps>`
    transition: top 0.25s ease;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.witdh ? `${props.witdh}%` : "80%")};
    margin: auto;
    background: ${colors.white};
    border-radius: 30px;
`;

export const Dialog = styled.div`
    transition: bottom 1s ease;
    width: 90%;
    background: ${colors.white};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.default20};

    & strong {
        padding: 20px 30px;
        color: ${colors.brand10};
    }
`;
export const Icon = styled.div`
    padding: 20px 30px;
    cursor: pointer;
`;

export const Body = styled.div`
    padding: 20px 30px;
    height: 100%;
`;

export const Actions = styled.div`
    border-top: 1px solid ${colors.default20};
    margin: 0 30px;
    padding: 20px 0;
    display: flex;
    flex-direction: row-reverse;
`;
