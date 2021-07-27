/* eslint-disable react/prop-types */
import React, {
    useState,
    InputHTMLAttributes,
    useEffect,
    RefObject,
} from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, LabelError } from "./styles";
import { colors } from "../../styles/colors";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    width?: string | number;
    textColor?: string;
    inputRef?: RefObject<HTMLInputElement>;
    icon?: IconDefinition;
    iconPosition?: "left" | "right";
    iconColor?: string;
    action?: {
        icon: IconDefinition;
        iconColor?: string;
        onClick: () => void;
        position?: "left" | "right";
    } | null;
}

const InputLine: React.FC<InputProps> = ({
    containerStyle,
    label,
    labelStyle,
    errorMessage,
    width,
    textColor,
    inputRef,
    name,
    icon,
    iconPosition,
    iconColor,
    action,
    ...rest
}) => {
    const [isFieldActive, setIsFieldActive] = useState(false);

    useEffect(() => {
        if (rest.value) {
            if (!isFieldActive) {
                setIsFieldActive(true);
            }
        }
    }, [rest.value]);

    const handleFocus = () => {
        if (!isFieldActive) {
            setIsFieldActive(true);
        }
    };

    const handleBlur = () => {
        if (isFieldActive && !rest.value) {
            setIsFieldActive(false);
        }
        if (rest.onBlur) {
            setImmediate(rest.onBlur);
        }
    };

    return (
        <div
            style={{
                paddingBottom: errorMessage ? 0 : 20,
            }}
        >
            <Container
                isFieldActive={isFieldActive}
                errorMessage={errorMessage}
                // labelStyle={labelStyle}
                containerStyle={containerStyle}
                width={width}
                disabled={rest.disabled ? rest.disabled : undefined}
                style={containerStyle}
                textColor={textColor}
                icon={icon ? true : false}
                iconPosition={iconPosition}
                action={action}
                actionPosition={action?.position}
                date={rest.type === "date"}
            >
                {icon && (
                    <div className="icon">
                        <FontAwesomeIcon
                            icon={icon}
                            color={iconColor || colors.brand10}
                        />
                    </div>
                )}

                {action && (
                    <div className="icon-action" onClick={action.onClick}>
                        <FontAwesomeIcon
                            icon={action.icon}
                            color={action.iconColor || colors.brand10}
                        />
                    </div>
                )}
                <input
                    {...rest}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    name={name}
                    placeholder={isFieldActive ? rest.placeholder : ""}
                    ref={inputRef}
                />
                <label>
                    <span style={labelStyle}>{label}</span>
                </label>
            </Container>
            {errorMessage ? <LabelError>{errorMessage}</LabelError> : null}
        </div>
    );
};

export default InputLine;
