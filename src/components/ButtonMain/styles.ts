import styled from "styled-components";
import { colors } from "../../styles/colors";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ButtonSizes } from "./ButtonMain";

interface ButtonProps {
    secondary?: boolean;
    backPurple?: boolean;
    notification?: boolean;
    width?: number | string;
    icon?: IconDefinition;
    noBorder?: boolean;
    colorText?: string;
    colorBackground?: string;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
    rectangular?: boolean;
}

interface TextFirstProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
}

interface TextEndProps {
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    colorText?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
}

const Sizes = {
    mini: "mini",
    tiny: "tiny",
    small: "small",
    medium: "medium",
    large: "large",
    big: "big",
    huge: "huge",
    massive: "massive",
};

const size = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return "25px";
        case Sizes.tiny:
            return "30px";
        case Sizes.small:
            return "35px";
        case Sizes.medium:
            return "40px";
        case Sizes.large:
            return "45px";
        case Sizes.big:
            return "50px";
        case Sizes.huge:
            return "55px";
        case Sizes.massive:
            return "60px";
        default:
            return size;
    }
};

const textSize = (size: string | number) => {
    switch (size) {
        case Sizes.mini:
            return "10px";
        case Sizes.tiny:
            return "11px";
        case Sizes.small:
            return "12px";
        case Sizes.medium:
            return "14px";
        case Sizes.large:
            return "16px";
        case Sizes.big:
            return "18px";
        case Sizes.huge:
            return "20px";
        case Sizes.massive:
            return "22px";
        default:
            return size;
    }
};

export const Button = styled.button<ButtonProps>`
    font-family: MontSerrat !important;
    background-color: ${(props) => {
        if (props.colorBackground) return props.colorBackground;
        if (props.secondary || props.tertiary) {
            return colors.white;
        }

        if (props.noBorder) {
            return "transparent";
        }

        return colors.brand30;
    }};
    height: ${(props) => (props.size ? size(props.size) : "40px")};
    width: ${(props) =>{
        if (props.width) {
            if (typeof props.width === "string") {
                return props.width;
            } else {
                return `${props.width}px`;
            }
        }

        return '100%'
    }};
    border-radius: ${(props) => {
        if (props.rectangular) return "10px";

        return "30px";
    }};
    cursor: pointer;
    border: ${(props) => {
        if (props.secondary) {
            return `1px solid ${colors.brand10}`;
        }

        if (props.tertiary) {
            return `1px solid ${colors.gray10}`;
        }

        return "none";
    }};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => (props.icon ? "0 15px" : "")};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
    }

    &:hover {
        background-color: ${(props) => {
            if (props.hoverBackgroundColor) {
                return props.hoverBackgroundColor;
            }
            if (props.secondary) {
                return colors.brandTransparent;
            }

            if (props.backPurple) {
                return colors.brand20;
            }

            if (props.noBorder) {
                return "transparent";
            }

            if (props.tertiary) {
                return colors.hover;
            }

            return colors.brand10;
        }};

        span {
            color: ${(props) => {
                if (props.hoverTextColor) {
                    return props.hoverTextColor;
                }

                if (props.secondary) {
                    return colors.brand10;
                }

                if (props.backPurple) {
                    return colors.white;
                }

                if (props.noBorder) {
                    if (props.colorText) {
                        return props.colorText;
                    } else {
                        return colors.brand10;
                    }
                }

                if (props.tertiary) {
                    return colors.gray20;
                }

                return colors.brand30;
            }};
        }
    }
`;

export const TextFirst = styled.span<TextFirstProps>`
    color: ${(props) => {
        if (props.colorText) {
            return props.colorText;
        }

        if (props.tertiary) {
            return colors.gray20;
        }

        return colors.brand10;
    }};
    font-weight: ${(props) => {
        if (props.firstStrong || props.strong) {
            return "bold";
        }

        return "normal";
    }};
    font-size: ${(props) => (props.size ? textSize(props.size) : "14px")};
`;
export const TextEnd = styled.span<TextEndProps>`
    color: ${(props) => {
        if (props.colorText) {
            return props.colorText;
        }

        if (props.tertiary) {
            return colors.gray20;
        }

        return colors.brand10;
    }};
    font-weight: ${(props) => {
        if (props.firstStrong || props.notStrong) {
            return "normal";
        }

        return "bold";
    }};
    font-size: ${(props) => (props.size ? textSize(props.size) : "14px")};
`;

export const Notification = styled.button`
    font-family: MontSerrat !important;
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
        background-color: ${colors.brandTransparent2};
    }

    span {
        color: ${colors.brand30};
        margin-left: 20px;
        font-weight: bold;
    }
`;

export const Icon = styled.div``;

export const Amount = styled.div`
    font-family: MontSerrat !important;
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
