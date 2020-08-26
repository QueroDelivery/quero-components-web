import "../../styles/default.scss";

import React from "react";

import { Container } from "./styles";

export interface LoaderProps {
    color?: string;
    size?:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive";
    className?: string;
    style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ color, size, className, style }) => {
    return (
        <Container
            color={color}
            size={size}
            style={style}
            className={className}
        />
    );
};

export default Loader;
