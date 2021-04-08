import React, { ButtonHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import {
    Button,
    TextFirst,
    TextEnd,
    Icon,
    Amount,
    Notification,
} from "./styles";
import Loader from "../Loader/Loader";
import { colors } from "../../styles/colors";

type ButtonTypes = 'icon'
type IconPositions = 'left' | 'right'
export type ButtonSizes = "mini"
| "tiny"
| "small"
| "medium"
| "large"
| "big"
| "huge"
| "massive"
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    textFirst?: string;
    textEnd?: string;
    firstStrong?: boolean;
    notStrong?: boolean;
    strong?: boolean;
    loading?: boolean;
    secondary?: boolean;
    notification?: boolean;
    amount?: number;
    backPurple?: boolean;
    width?: number | string;
    icon?: IconDefinition
    customIcon?: React.ReactNode;
    colorIcon?: string;
    iconPosition?: IconPositions;
    noBorder?: boolean;
    colorText?: string;
    colorBackground?: string;
    tertiary?: boolean;
    size?: ButtonSizes;
    rectangular?: boolean;
    typeContent?: ButtonTypes;
    hoverBackgroundColor?: string;
    hoverTextColor?: string;
}

const ButtonMain: React.FC<ButtonProps> = ({
    textFirst,
    textEnd,
    firstStrong,
    notStrong,
    strong,
    loading,
    secondary,
    backPurple,
    children,
    notification,
    amount,
    width,
    icon,
    customIcon,
    iconPosition = 'right',
    colorIcon,
    noBorder,
    colorText,
    colorBackground,
    tertiary,
    size,
    rectangular,
    typeContent,
    hoverBackgroundColor,
    hoverTextColor,
    ...rest
}) => {

    function renderButtonNotification(){
        return (
            <Notification {...rest}>
                {loading ? (
                    <Loader size="tiny" />
                ) : children ? (
                    children
                ) : (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "50%",
                            padding: 10,
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Icon>
                                <FontAwesomeIcon
                                    icon={faBell}
                                    size="lg"
                                    color={colors.brand30}
                                />
                            </Icon>
                            <span>notificações</span>
                        </div>
                        <Amount>{amount}</Amount>
                    </div>
                )}
            </Notification>
        )
    }

    function renderButtonTypes(type: ButtonTypes){
        switch(type){
            case 'icon':
                return(
                    <div>
                        {(icon || customIcon) && (
                            <React.Fragment>
                                {customIcon ?
                                    customIcon
                                    :
                                    <FontAwesomeIcon
                                        icon={icon as IconDefinition}
                                        color={
                                            colorIcon ? colorIcon : colors.brand10
                                        }
                                        size={"lg"}
                                        style={{ marginLeft: typeContent == 'icon' ? 0 : 10 }}
                                    />
                                }
                            </React.Fragment>
                        )}
                    </div>
                )
                default:
                    return null
        }
    }

    function renderButton(){
        return (
            <Button
                {...rest}
                secondary={secondary}
                backPurple={backPurple}
                width={width}
                icon={icon}
                noBorder={noBorder}
                colorText={colorText}
                colorBackground={colorBackground}
                tertiary={tertiary}
                size={size}
                rectangular={rectangular}
                hoverBackgroundColor={hoverBackgroundColor}
                hoverTextColor={hoverTextColor}
            >
                {loading ? (
                    <Loader size="tiny" />
                ) : children ? (
                    children
                ) : typeContent ? (
                    renderButtonTypes(typeContent)
                ) : (
                    <div>
                        {icon && iconPosition === 'left' && (
                            <React.Fragment>
                                {customIcon ?
                                    customIcon
                                    :
                                    <FontAwesomeIcon
                                        icon={icon}
                                        color={
                                            colorIcon ? colorIcon : colors.brand10
                                        }
                                        size={"lg"}
                                        style={{ marginRight: 10 }}
                                    />
                                }
                            </React.Fragment>
                        )}
                        <TextFirst
                            firstStrong={firstStrong}
                            strong={strong}
                            notStrong={notStrong}
                            colorText={colorText}
                            tertiary={tertiary}
                            size={size}
                        >
                            {`${textFirst} `}
                        </TextFirst>
                        <TextEnd
                            firstStrong={firstStrong}
                            strong={strong}
                            notStrong={notStrong}
                            colorText={colorText}
                            tertiary={tertiary}
                            size={size}
                        >
                            {textEnd}
                        </TextEnd>
                        {icon && iconPosition === 'right' && (
                            <React.Fragment>
                                {customIcon ?
                                    customIcon
                                    :
                                    <FontAwesomeIcon
                                        icon={icon}
                                        color={
                                            colorIcon ? colorIcon : colors.brand10
                                        }
                                        size={"lg"}
                                        style={{ marginLeft: 10 }}
                                    />
                                }
                            </React.Fragment>
                        )}
                    </div>
                )}
            </Button>
        )
    }

    if (notification) {
        return renderButtonNotification();
    } else {
        return renderButton();
    }
};

export default ButtonMain;
