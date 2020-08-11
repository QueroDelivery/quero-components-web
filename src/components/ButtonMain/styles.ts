import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface ButtonProps {
    secundary?: boolean;
    backPurple?: boolean;
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
    height: 50px;
    width: 100%;
    border-radius: 30px;
    cursor: pointer;
    border: ${(props) =>
        props.secundary ? `1px solid ${colors.brand10}` : "none"};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

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
