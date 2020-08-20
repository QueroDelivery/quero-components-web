import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";

interface ButtonProps {
    secundary?: boolean;
    backPurple?: boolean;
    notification?: boolean;
    height?: number;
    width?: number;
    icon?: IconDefinition;
}

interface TextFirstProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
}

interface TextEndProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => {
        if (props.secundary) {
            return colors.white;
        }

        return colors.brand30;
    }};
    height: ${(props) => (props.height ? `${props.height}px` : "40px")};
    width: ${(props) =>
        props.width ? `${props.width}%` : props.icon ? "" : "100%"};
    border-radius: 30px;
    cursor: pointer;
    border: ${(props) =>
        props.secundary ? `1px solid ${colors.brand10}` : "none"};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => (props.icon ? "0 20px" : "")};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    &:hover {
        background-color: ${(props) => {
            if (props.secundary) {
                return colors.brandTransparent;
            }

            if (props.backPurple) {
                return colors.brand20;
            }
            return colors.brand10;
        }};

        span {
            color: ${(props) => {
                if (props.secundary) {
                    return colors.brand10;
                }

                if (props.backPurple) {
                    return colors.white;
                }

                return colors.brand30;
            }};
        }
    }
`;

export const TextFirst = styled.span<TextFirstProps>`
    color: ${colors.brand10};
    font-weight: ${(props) => {
        if (props.firstStrong || props.strong) {
            return "bold";
        }

        return "normal";
    }};
`;
export const TextEnd = styled.span<TextEndProps>`
    color: ${colors.brand10};
    font-weight: ${(props) => {
        if (props.firstStrong || props.notStrong) {
            return "normal";
        }

        return "bold";
    }};
`;

export const Notification = styled.button`
    background-color: ${colors.brand10};
    height: 40px;
    width: 100%;
    border-radius: 30px;
    cursor: pointer;
    border: 1px solid ${colors.brand30};
    outline: none;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    &:hover {
        background-color: ${colors.hover};
    }

    span {
        color: ${colors.brand30};
        margin-left: 20px;
        font-weight: bold;
    }
`;

export const Icon = styled.div``;

export const Amount = styled.div`
    background-color: ${colors.brand30};
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${colors.brand10};
    font-size: 10px;
`;
