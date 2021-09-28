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
  LoadingContainer,
} from "./styles";
import Loader from "../Loader/Loader";
import { colors } from "../../styles/colors";

type ButtonTypes = "icon";
type IconPositions = "left" | "right";
export type ButtonSizes =
  | "mini"
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "big"
  | "huge"
  | "massive";
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
  icon?: IconDefinition;
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
  iconStyle?: React.CSSProperties;
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
  iconPosition = "right",
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
  iconStyle,
  ...rest
}) => {
  function renderButtonNotification() {
    return (
      <Notification {...rest}>
        {loading ? (
          <Loader size="tiny" />
        ) : (
          children || (
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
          )
        )}
      </Notification>
    );
  }

  function renderButtonTypes(type: ButtonTypes) {
    switch (type) {
      case "icon":
        return (
          <div>
            {(icon || customIcon) && (
              <React.Fragment>
                {customIcon ? (
                  <Icon loading={loading}>{customIcon}</Icon>
                ) : (
                  <Icon loading={loading}>
                    <FontAwesomeIcon
                      icon={icon as IconDefinition}
                      color={colorIcon || colors.brand10}
                      size="lg"
                      style={{ ...iconStyle }}
                    />
                  </Icon>
                )}
              </React.Fragment>
            )}
          </div>
        );
      default:
        return null;
    }
  }

  function renderButton() {
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
        loading={loading}
      >
        {children ||
          (typeContent ? (
            renderButtonTypes(typeContent)
          ) : (
            <React.Fragment>
              {(icon || customIcon) && iconPosition === "left" && (
                <React.Fragment>
                  {customIcon ? (
                    <Icon loading={loading} iconPosition={iconPosition}>
                      {customIcon}
                    </Icon>
                  ) : (
                    <Icon loading={loading} iconPosition={iconPosition}>
                      <FontAwesomeIcon
                        icon={icon!}
                        color={colorIcon || colors.brand10}
                        size="lg"
                        style={{ ...iconStyle }}
                      />
                    </Icon>
                  )}
                </React.Fragment>
              )}
              <TextFirst
                firstStrong={firstStrong}
                strong={strong}
                notStrong={notStrong}
                colorText={colorText}
                tertiary={tertiary}
                size={size}
                loading={loading}
              >
                {textFirst}
              </TextFirst>
              <TextEnd
                firstStrong={firstStrong}
                strong={strong}
                notStrong={notStrong}
                colorText={colorText}
                tertiary={tertiary}
                size={size}
                loading={loading}
              >
                {textEnd}
              </TextEnd>
              {(icon || customIcon) && iconPosition === "right" && (
                <React.Fragment>
                  {customIcon ? (
                    <Icon loading={loading} iconPosition={iconPosition}>
                      {customIcon}
                    </Icon>
                  ) : (
                    <Icon loading={loading} iconPosition={iconPosition}>
                      <FontAwesomeIcon
                        icon={icon!}
                        color={colorIcon || colors.brand10}
                        size="lg"
                        style={{ ...iconStyle }}
                      />
                    </Icon>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          ))}

        {loading && (
          <LoadingContainer>
            <Loader size="tiny" />
          </LoadingContainer>
        )}
      </Button>
    );
  }

  if (notification) {
    return renderButtonNotification();
  }
  return renderButton();
};

export default ButtonMain;
