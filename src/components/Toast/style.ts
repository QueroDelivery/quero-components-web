import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface ToastProps {
    type?: "default" | "info" | "success" | "warning" | "error" | "light";
}

const toastType = {
    default: css`
        background-color: ${colors.black};
        color: ${colors.white};
    `,
    info: css`
        background-color: ${colors.info20};
        color: ${colors.white};
    `,
    success: css`
        background-color: ${colors.brandGreen};
        color: ${colors.white};
    `,
    warning: css`
        background-color: ${colors.gold};
        color: ${colors.white};
    `,
    error: css`
        background-color: ${colors.danger20};
        color: ${colors.white};
    `,
    light: css`
        background-color: ${colors.white};
        color: ${colors.black};
        border: 1px solid ${colors.gray10};
    `,
};

export const Container = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 30px;
    overflow: hidden;
`;

export const Toast = styled.div<ToastProps>`
    width: 300px;
    min-height: 40px;
    position: relative;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    ${(props) => toastType[props.type || "default"]};
`;

export const Title = styled.div`
    font-weight: bold;
    max-width: 275px;
`;

export const Body = styled.div`
    font-size: 14px;
    max-width: 275px;
`;

export const Close = styled.div`
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
`;
