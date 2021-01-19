import React, { LinkHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loader from "../Loader/Loader";
import { colors } from "../../styles/colors";
import { Shadow, Button } from "./styles";

interface CardProps extends Pick<LinkHTMLAttributes<HTMLLinkElement>, "href"> {
    type: "shadow" | "button" | "min-shadow";
    width?: number | string;
    style?: React.CSSProperties;
    icon?: IconDefinition;
    sizeIcon?:
        | "1x"
        | "2x"
        | "3x"
        | "4x"
        | "5x"
        | "6x"
        | "7x"
        | "8x"
        | "9x"
        | "10x"
        | "lg"
        | "sm"
        | "xs";
    colorIcon?: string;
    text?: string;
    colorText?: string;
    onClick?(): void;
    loading?: boolean;
}

const Types = {
    shadow: "shadow",
    button: "button",
    minShadow: "min-shadow",
};

const Card: React.FC<CardProps> = ({
    children,
    width,
    type,
    style,
    icon,
    sizeIcon,
    colorIcon,
    text,
    colorText,
    onClick,
    loading,
    ...rest
}) => {
    function renderShadow(type: string) {
        return (
            <Shadow width={width} style={style} type={type}>
                {loading && (
                    <div className="loading-card">
                        <Loader />
                    </div>
                )}
                {children}
            </Shadow>
        );
    }

    function renderButton() {
        return (
            <Button
                style={style}
                colorText={colorText}
                onClick={onClick}
                href={rest.href}
                width={width}
            >
                {icon && (
                    <React.Fragment>
                        <FontAwesomeIcon
                            icon={icon}
                            color={colorIcon ? colorIcon : colors.brandDark}
                            size={sizeIcon ? sizeIcon : "lg"}
                        />
                    </React.Fragment>
                )}

                <span>{text}</span>
            </Button>
        );
    }

    switch (type) {
        case Types.shadow:
            return renderShadow(Types.shadow);
        case Types.button:
            return renderButton();
        case Types.minShadow:
            return renderShadow(Types.minShadow);
        default:
            return <div />;
    }
};

export default Card;
