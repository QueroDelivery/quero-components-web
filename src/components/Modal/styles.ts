import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface BackgroundProps {
  open?: boolean;
}

interface ModalProps {
  width?: number | string;
  size?: "mini" | "tiny" | "small" | "large" | "fullscreen";
}

interface HeaderProps {
  iconBack?: boolean;
  noBorder?: boolean;
}

const Sizes = {
  mini: "mini",
  tiny: "tiny",
  small: "small",
  large: "large",
  fullscreen: "fullscreen",
};

const sizeWidth = (size: string) => {
  switch (size) {
    case Sizes.mini:
      return "35%";
    case Sizes.tiny:
      return "45%";
    case Sizes.small:
      return "55%";
    case Sizes.large:
      return "65%";
    case Sizes.fullscreen:
      return "95%";
    default:
      return size;
  }
};

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
  font-family: MontSerrat !important;
  transition: top 0.25s ease;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => {
    if (props.width) {
      if (typeof props.width === "string") {
        return props.width;
      }
      return `${props.width}px`;
    }

    if (props.size) {
      return sizeWidth(props.size);
    }

    return "80%";
  }};
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

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.noBorder ? "none" : `1px solid ${colors.default20}`};
  font-size: 20px;

  .name-icon-modal {
    display: flex;
    align-items: center;
  }

  & strong {
    padding: ${(props) => (props.iconBack ? "20px 0" : "20px 30px")};
    color: ${colors.brand10};
  }
`;

export const Icon = styled.div`
  padding: 20px 30px;
  cursor: pointer;
`;

export const Body = styled.div<HeaderProps>`
  padding: 20px 30px;
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
    border-radius: 30px;
    z-index: 2;
    position: absolute;
  }
`;

export const Actions = styled.div`
  border-top: 1px solid ${colors.default20};
  margin: 0 30px;
  padding: 20px 0;
  display: flex;
  flex-direction: row-reverse;
`;
